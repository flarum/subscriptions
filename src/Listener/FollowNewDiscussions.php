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

use Flarum\Post\Event\Posted;
use Flarum\User\AssertPermissionTrait;

class FollowNewDiscussions
{
    use AssertPermissionTrait;

    public function handle(Posted $event)
    {
        $post = $event->post;

        $users = User::all()->filter(function ($user) use ($post) {
            return $user->exists && $user->getPreference('followNewDiscussions') && $post->isVisibleTo($user);
        });

        foreach ($users as $user) {
            $state = $event->post->discussion->stateFor($user);

            $state->subscription = 'follow';
            $state->save();
        }
    }
}
