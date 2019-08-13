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

use Flarum\Notification\NotificationSyncer;
use Flarum\Post\Event\Posted;
use Flarum\User\User;
use Flarum\Subscriptions\Notification\NewPostBlueprint;

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

    public function handle(Posted $event)
    {
        $post = $event->post;

        $users = User::all()->filter(function ($user) use ($post) {
            return $user->exists
                && $user->getPreference('followNewDiscussions')
                && $post->isVisibleTo($user)
                && !$user->isGuest();
        });

        foreach ($users as $user) {
            $state = $post->discussion->stateFor($user);

            $state->subscription = 'follow';
            $state->save();
        }

        $this->notifications->sync(
            new NewPostBlueprint($post),
            $users->all()
        );
    }
}
