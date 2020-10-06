<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Subscriptions\Gambit;

use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\AbstractSearch;
use Flarum\Subscriptions\Event\SearchingSubscribedDiscussions;

class SubscriptionGambit extends AbstractRegexGambit
{
    /**
     * {@inheritdoc}
     */
    protected $pattern = 'is:(follow|ignor)(?:ing|ed)';

    /**
     * {@inheritdoc}
     */
    protected function conditions(AbstractSearch $search, array $matches, $negate)
    {
        $actor = $search->getActor();

        $method = $negate ? 'whereNotIn' : 'whereIn';
        $search->getQuery()->$method('id', function ($query) use ($actor, $matches, $negate, $search) {
            $query->select('discussion_id')
                ->from('discussion_user')
                ->where('user_id', $actor->id)
                ->where('subscription', $matches[1] === 'follow' ? 'follow' : 'ignore');

            app()->make('events')->fire(new SearchingSubscribedDiscussions($actor, $matches, $negate, $search, $query));
        });
    }
}
