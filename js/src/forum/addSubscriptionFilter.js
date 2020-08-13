import { extend, override } from 'flarum/extend';
import LinkButton from 'flarum/components/LinkButton';
import IndexPage from 'flarum/components/IndexPage';
import DiscussionListState from 'flarum/states/DiscussionListState';

export default function addSubscriptionFilter() {
  extend(IndexPage.prototype, 'navItems', function(items) {
    if (app.session.user) {
      const params = app.search.stickyParams();

      params.filter = 'following';

      items.add('following', LinkButton.component({
        href: app.route('following', params),
        icon: 'fas fa-star'
      }, app.translator.trans('flarum-subscriptions.forum.index.following_link')), 50);
    }
  });

  override(IndexPage.prototype, 'setTitle', function (original) {
    if (m.route.get().startsWith("/following")) {
      app.setTitle(app.translator.trans('flarum-subscriptions.forum.following.meta_title_text'));
    } else {
      original();
    }
  });

  extend(DiscussionListState.prototype, 'requestParams', function(params) {
    if (this.params.filter === 'following') {
      params.filter.q = (params.filter.q || '') + ' is:following';
    }
  });
}
