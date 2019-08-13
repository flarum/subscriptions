module.exports=function(o){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return o[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=o,n.c=t,n.d=function(o,t,r){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:r})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var s in o)n.d(r,s,function(t){return o[t]}.bind(null,s));return r},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=22)}([function(o,t){o.exports=flarum.core.compat.extend},function(o,t){o.exports=flarum.core.compat["helpers/icon"]},function(o,t){o.exports=flarum.core.compat["models/Discussion"]},function(o,t){o.exports=flarum.core.compat["components/Button"]},function(o,t){o.exports=flarum.core.compat.app},function(o,t){o.exports=flarum.core.compat["components/Badge"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionPage"]},function(o,t){o.exports=flarum.core.compat["components/Switch"]},function(o,t){o.exports=flarum.core.compat.Model},function(o,t){o.exports=flarum.core.compat["components/NotificationGrid"]},function(o,t){o.exports=flarum.core.compat["utils/DiscussionControls"]},function(o,t){o.exports=flarum.core.compat["components/Dropdown"]},function(o,t){o.exports=flarum.core.compat["utils/extractText"]},function(o,t){o.exports=flarum.core.compat.Component},function(o,t){o.exports=flarum.core.compat["components/LinkButton"]},function(o,t){o.exports=flarum.core.compat["components/IndexPage"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionList"]},function(o,t){o.exports=flarum.core.compat["components/SettingsPage"]},function(o,t){o.exports=flarum.core.compat["components/Notification"]},function(o,t){o.exports=flarum.core.compat["components/FieldSet"]},function(o,t){o.exports=flarum.core.compat["utils/ItemList"]},function(o,t){o.exports=flarum.core.compat["helpers/username"]},function(o,t,n){"use strict";n.r(t);var r=n(0),s=n(4),e=n.n(s),i=n(8),a=n.n(i),c=n(2),u=n.n(c),p=n(9),l=n.n(p),f=n(5),b=n.n(f);var d=n(3),_=n.n(d),w=n(6),g=n.n(w),h=n(10),y=n.n(h);function x(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var v=n(11),S=n.n(v),j=n(1),N=n.n(j),O=n(12),P=n.n(O),M=n(13),D=function(o){function t(){return o.apply(this,arguments)||this}return x(t,o),t.prototype.view=function(){return m("button",{className:"SubscriptionMenuItem hasIcon",onclick:this.props.onclick},this.props.active?N()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},N()(this.props.icon,{className:"Button-icon"}),m("strong",null,this.props.label),m("span",{className:"SubscriptionMenuItem-description"},this.props.description)))},t}(n.n(M).a),k=function(o){function t(){return o.apply(this,arguments)||this}x(t,o);var n=t.prototype;return n.init=function(){this.options=[{subscription:!1,icon:"far fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]},n.view=function(){var o=this,t=this.props.discussion,n=t.subscription(),r=app.translator.trans("flarum-subscriptions.forum.sub_controls.follow_button"),s="far fa-star",e="SubscriptionMenu-button--"+n;switch(n){case"follow":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),s="fas fa-star";break;case"ignore":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),s="far fa-eye-slash"}var i=app.session.user.preferences(),a=i.notify_newPost_email,c=i.notify_newPost_alert,u=P()(app.translator.trans(a?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),p={className:"Button SubscriptionMenu-button "+e,icon:s,children:r,onclick:this.saveSubscription.bind(this,t,-1===["follow","ignore"].indexOf(n)&&"follow"),title:u};return p.config=(a||c)&&!1===n?function(o){$(o).tooltip({container:".SubscriptionMenu",placement:"bottom",delay:250,title:u})}:function(o){return $(o).tooltip("destroy")},m("div",{className:"Dropdown ButtonGroup SubscriptionMenu"},_.a.component(p),m("button",{className:"Dropdown-toggle Button Button--icon "+e,"data-toggle":"dropdown"},N()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map(function(r){return r.onclick=o.saveSubscription.bind(o,t,r.subscription),r.active=n===r.subscription,m("li",null,D.component(r))})))},n.saveSubscription=function(o,t){o.save({subscription:t}),this.$(".SubscriptionMenu-button").tooltip("hide")},t}(S.a);var B=n(14),I=n.n(B),C=n(15),T=n.n(C),q=n(16),A=n.n(q);var L=n(17),R=n.n(L),G=(n(19),n(7)),z=n.n(G),F=(n(20),n(18)),U=n.n(F),E=(n(21),function(o){function t(){return o.apply(this,arguments)||this}x(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-star"},n.href=function(){var o=this.props.notification,t=o.subject(),n=o.content()||{};return app.route.discussion(t,n.postNumber)},n.content=function(){return app.translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.props.notification.fromUser()})},t}(U.a));e.a.initializers.add("subscriptions",function(){e.a.notificationComponents.newPost=E,u.a.prototype.subscription=a.a.attribute("subscription"),Object(r.extend)(u.a.prototype,"badges",function(o){var t;switch(this.subscription()){case"follow":t=b.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":t=b.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}t&&o.add("subscription",t)}),Object(r.extend)(y.a,"userControls",function(o,t,n){if(app.session.user&&!(n instanceof g.a)){var r={none:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:!1},ignore:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:!1}},s=t.subscription()||"none";o.add("subscription",_.a.component({children:r[s].label,icon:r[s].icon,onclick:t.save.bind(t,{subscription:r[s].save})}))}}),Object(r.extend)(g.a.prototype,"sidebarItems",function(o){if(app.session.user){var t=this.discussion;o.add("subscription",k.component({discussion:t}))}}),Object(r.extend)(T.a.prototype,"navItems",function(o){if(app.session.user){var t=this.stickyParams();t.filter="following",o.add("following",I.a.component({href:app.route("index.filter",t),children:app.translator.trans("flarum-subscriptions.forum.index.following_link"),icon:"fas fa-star"}),50)}}),Object(r.extend)(A.a.prototype,"requestParams",function(o){"following"===this.props.params.filter&&(o.filter.q=(o.filter.q||"")+" is:following")}),Object(r.extend)(R.a.prototype,"notificationsItems",function(o){o.add("followAfterReply",z.a.component({children:app.translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label"),state:this.user.preferences().followAfterReply,onchange:this.preferenceSaver("followAfterReply")})),o.add("followNewDiscussions",z.a.component({children:app.translator.trans("flarum-subscriptions.forum.settings.forum_follow_new_discussions_label"),state:this.user.preferences().followNewDiscussions,onchange:this.preferenceSaver("followNewDiscussions")}))}),Object(r.extend)(l.a.prototype,"notificationTypes",function(o){o.add("newPost",{name:"newPost",icon:"fas fa-star",label:e.a.translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})})})}]);
//# sourceMappingURL=forum.js.map