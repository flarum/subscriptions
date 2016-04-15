<?php
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flarum\Subscriptions\Listener;

use Flarum\Core\Notification\NotificationSyncer;
use Flarum\Core\User;
use Flarum\Event\ConfigureUserPreferences;
use Flarum\Event\DiscussionWasStarted;
use Flarum\Subscriptions\Notification\NewPostBlueprint;
use Illuminate\Contracts\Events\Dispatcher;

class FollowNewDiscussions
{
    /**
     * @var NotificationSyncer
     */
    protected $notifications;

    /**
     * @param NotificationSyncer $notifications
     */
    public function __construct(NotificationSyncer $notifications)
    {
        $this->notifications = $notifications;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(DiscussionWasStarted::class, [$this, 'whenDiscussionWasStarted'], 1);
        $events->listen(ConfigureUserPreferences::class, [$this, 'addUserPreference']);
    }

    /**
     * @param ConfigureUserPreferences $event
     */
    public function addUserPreference(ConfigureUserPreferences $event)
    {
        $event->add('followNewDiscussions', 'boolval', false);
    }

    /**
     * @param PostWasPosted $event
     */
    public function whenDiscussionWasStarted(DiscussionWasStarted $event)
    {
        $users = User::all()->filter(function ($user) {
            return $user->exists && $user->getPreference('followNewDiscussions');
        });

        foreach ($users as $user) {
            $state = $event->discussion->stateFor($user);

            $state->subscription = 'follow';
            $state->save();
        }

        $this->notifications->sync(
            new NewPostBlueprint($event->discussion->lastPost),
            $users->filter(function ($user) use ($event) {
                return $user->id !== $event->actor->id;
            })->all()
        );
    }
}
