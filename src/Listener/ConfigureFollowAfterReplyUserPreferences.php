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

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Event\ConfigureUserPreferences;
use Flarum\Event\PrepareApiAttributes;
use Illuminate\Contracts\Events\Dispatcher;

class ConfigureFollowAfterReplyUserPreferences
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureUserPreferences::class, [$this, 'addUserPreference']);
    }

    /**
     * @param ConfigureUserPreferences $event
     */
    public function addUserPreference(ConfigureUserPreferences $event)
    {
        $event->add('followAfterReply', 'boolval', true);
    }
}
