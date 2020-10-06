<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Subscriptions\Event;

use Flarum\Search\AbstractSearch;
use Flarum\User\User;
use Illuminate\Database\Query\Builder;

class SearchingSubscribedDiscussions
{
    /**
     * @var User
     */
    public $actor;

    /**
     * @var array
     */
    public $matches;

    /**
     * @var bool
     */
    public $negate;

    /**
     * @var Searching
     */
    public $searching;

    /**
     * @var Builder
     */
    public $query;

    public function __construct(User $actor, array $matches, $negate, AbstractSearch $search, Builder $query)
    {
        $this->actor = $actor;
        $this->matches = $matches;
        $this->negate = $negate;
        $this->search = $search;
        $this->query = $query;
    }
}
