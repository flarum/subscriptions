import { extend } from 'flarum/extend';
import SettingsPage from 'flarum/components/SettingsPage';
import FieldSet from 'flarum/components/FieldSet';
import Switch from 'flarum/components/Switch';
import ItemList from 'flarum/utils/ItemList';

export default function addSubscriptionSettings() {

  extend(SettingsPage.prototype, 'settingsItems', function (items) {

    //Build ItemList
    var forumItems = new ItemList();

    forumItems.add('followAfterReply',
      Switch.component({
        children: app.translator.trans('core.forum.settings.follow_after_reply'),
        state: this.user.preferences().followAfterReply,
        onchange: (value, component) => {
          this.preferenceSaver('followAfterReply')(value, component);
        }
      })
    );

    //Add Section to SettingsList
    items.add('forum',
      FieldSet.component({
        label: app.translator.trans('core.forum.settings.forum'),
        className: 'Settings-forum',
        children: forumItems.toArray()
      })
    );
  });
}
