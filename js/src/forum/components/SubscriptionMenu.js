import Dropdown from 'flarum/components/Dropdown';
import Button from 'flarum/components/Button';
import icon from 'flarum/helpers/icon';
import extractText from 'flarum/utils/extractText';

import SubscriptionMenuItem from './SubscriptionMenuItem';

export default class SubscriptionMenu extends Dropdown {
  oninit(vnode) {
    super.oninit(vnode);

    this.options = [
      {
        subscription: false,
        icon: 'far fa-star',
        label: app.translator.trans('flarum-subscriptions.forum.sub_controls.not_following_button'),
        description: app.translator.trans('flarum-subscriptions.forum.sub_controls.not_following_text')
      },
      {
        subscription: 'follow',
        icon: 'fas fa-star',
        label: app.translator.trans('flarum-subscriptions.forum.sub_controls.following_button'),
        description: app.translator.trans('flarum-subscriptions.forum.sub_controls.following_text')
      },
      {
        subscription: 'ignore',
        icon: 'far fa-eye-slash',
        label: app.translator.trans('flarum-subscriptions.forum.sub_controls.ignoring_button'),
        description: app.translator.trans('flarum-subscriptions.forum.sub_controls.ignoring_text')
      }
    ];
  }

  view() {
    const discussion = this.attrs.discussion;
    const subscription = discussion.subscription();

    let buttonLabel = app.translator.trans('flarum-subscriptions.forum.sub_controls.follow_button');
    let buttonIcon = 'far fa-star';
    const buttonClass = 'SubscriptionMenu-button--' + subscription;

    switch (subscription) {
      case 'follow':
        buttonLabel = app.translator.trans('flarum-subscriptions.forum.sub_controls.following_button');
        buttonIcon = 'fas fa-star';
        break;

      case 'ignore':
        buttonLabel = app.translator.trans('flarum-subscriptions.forum.sub_controls.ignoring_button');
        buttonIcon = 'far fa-eye-slash';
        break;

      default:
        // no default
    }

    const preferences = app.session.user.preferences();
    const notifyEmail = preferences['notify_newPost_email'];
    const notifyAlert = preferences['notify_newPost_alert'];
    const title = extractText(app.translator.trans(notifyEmail
      ? 'flarum-subscriptions.forum.sub_controls.notify_email_tooltip'
      : 'flarum-subscriptions.forum.sub_controls.notify_alert_tooltip'));

    const buttonAttrs = {
      className: 'Button SubscriptionMenu-button ' + buttonClass,
      icon: buttonIcon,
      onclick: this.saveSubscription.bind(this, discussion, ['follow', 'ignore'].indexOf(subscription) !== -1 ? false : 'follow'),
      title: title
    };

    if ((notifyEmail || notifyAlert) && subscription === false) {
      buttonAttrs.onupdate = vnode => {
        $(vnode.dom).tooltip({
          container: '.SubscriptionMenu',
          placement: 'bottom',
          delay: 250,
          title
        });
      }
    } else {
      buttonAttrs.onupdate = vnode => $(vnode.dom).tooltip('destroy');
    }

    return (
      <div className="Dropdown ButtonGroup SubscriptionMenu">
        {Button.component(buttonAttrs, buttonLabel)}

        <button className={'Dropdown-toggle Button Button--icon ' + buttonClass} data-toggle="dropdown">
          {icon('fas fa-caret-down', {className: 'Button-icon'})}
        </button>

        <ul className="Dropdown-menu dropdown-menu Dropdown-menu--right">
          {this.options.map(attrs => {
            attrs.onclick = this.saveSubscription.bind(this, discussion, attrs.subscription);
            attrs.active = subscription === attrs.subscription;

            return <li>{SubscriptionMenuItem.component(attrs)}</li>;
          })}
        </ul>
      </div>
    );
  }

  saveSubscription(discussion, subscription) {
    discussion.save({subscription});

    this.$('.SubscriptionMenu-button').tooltip('hide');
  }
}
