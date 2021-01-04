import { extend } from 'flarum/extend';
import LinkButton from 'flarum/components/LinkButton';
import IndexPage from 'flarum/components/IndexPage';
import GlobalSearchState from 'flarum/states/GlobalSearchState';

export default function addSubscriptionFilter() {
  extend(IndexPage.prototype, 'navItems', function(items) {
    if (app.session.user) {
      const params = app.search.stickyParams();

      items.add('following', LinkButton.component({
        href: app.route('following', params),
        icon: 'fas fa-star'
      }, app.translator.trans('flarum-subscriptions.forum.index.following_link')), 50);
    }
  });

  extend(IndexPage.prototype, 'setTitle', function () {
    if (app.current.get('routeName') === 'following') {
      app.setTitle(app.translator.trans('flarum-subscriptions.forum.following.meta_title_text'));
    }
  });

  extend(GlobalSearchState.prototype, 'params', function(params) {
    if (app.current.get('routeName') === 'following') {
      params.q = (params.q || '') + ' is:following';
    }
  });
}
