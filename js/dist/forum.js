module.exports=function(t){var o={};function n(r){if(o[r])return o[r].exports;var s=o[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=o,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)n.d(r,s,function(o){return t[o]}.bind(null,s));return r},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=23)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,o){t.exports=flarum.core.compat["utils/classList"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,o){t.exports=flarum.core.compat["utils/extractText"]},function(t,o){t.exports=flarum.core.compat.Component},function(t,o){t.exports=flarum.core.compat["components/LinkButton"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["states/GlobalSearchState"]},function(t,o){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,o){t.exports=flarum.core.compat["components/Switch"]},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o){t.exports=flarum.core.compat["helpers/username"]},function(t,o,n){"use strict";n.r(o);var r=n(0),s=n(3),e=n.n(s),a=n(9),i=n.n(a),c=n(4),u=n.n(c),l=n(1),p=n.n(l),f=n(10),b=n.n(f),d=n(6),g=n.n(d);var _=n(5),w=n.n(_),y=n(7),h=n.n(y),x=n(11),v=n.n(x);function O(){return(O=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function j(t,o){return(j=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function S(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,j(t,o)}var P=n(12),N=n.n(P),M=n(13),k=n.n(M),B=n(2),D=n.n(B),I=n(14),T=n.n(I),A=n(8),L=n.n(A),R=n(15),C=function(t){function o(){return t.apply(this,arguments)||this}return S(o,t),o.prototype.view=function(){return m("button",{className:"SubscriptionMenuItem hasIcon",onclick:this.attrs.onclick},this.attrs.active?D()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},D()(this.attrs.icon,{className:"Button-icon"}),m("strong",null,this.attrs.label),m("span",{className:"SubscriptionMenuItem-description"},this.attrs.description)))},o}(n.n(R).a),G=function(t){function o(){return t.apply(this,arguments)||this}S(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.options=[{subscription:null,icon:"far fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]},n.view=function(){var t=this,o=this.attrs.discussion,n=o.subscription(),r=app.translator.trans("flarum-subscriptions.forum.sub_controls.follow_button"),s="far fa-star",e="SubscriptionMenu-button--"+n;switch(n){case"follow":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),s="fas fa-star";break;case"ignore":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),s="far fa-eye-slash"}var a=app.session.user.preferences(),i=a.notify_newPost_email,c=a.notify_newPost_alert,u=T()(app.translator.trans(i?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),l=(i||c)&&null===n,p=m(w.a,{className:L()("Button","SubscriptionMenu-button",e),icon:s,onclick:this.saveSubscription.bind(this,o,-1!==["follow","ignore"].indexOf(n)?null:"follow")},r);return m("div",{className:"Dropdown ButtonGroup SubscriptionMenu"},l?m(k.a,{text:u,position:"bottom"},p):p,m("button",{className:L()("Dropdown-toggle Button Button--icon",e),"data-toggle":"dropdown"},D()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(r){return m("li",null,C.component(O({},r,{onclick:t.saveSubscription.bind(t,o,r.subscription),active:n===r.subscription})))}))))},n.saveSubscription=function(t,o){t.save({subscription:o}),this.$(".SubscriptionMenu-button").tooltip("hide")},o}(N.a);var F=n(16),q=n.n(F),z=n(17),U=n.n(z),$=n(18),E=n.n($);var H=n(19),J=n.n(H),K=n(20),Q=n.n(K),V=n(21),W=n.n(V),X=(n(22),function(t){function o(){return t.apply(this,arguments)||this}S(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-star"},n.href=function(){var t=this.attrs.notification,o=t.subject(),n=t.content()||{};return app.route.discussion(o,n.postNumber)},n.content=function(){return app.translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},o}(W.a));e.a.initializers.add("subscriptions",(function(){e.a.routes.following={path:"/following",component:p.a},e.a.notificationComponents.newPost=X,u.a.prototype.subscription=i.a.attribute("subscription"),Object(r.extend)(u.a.prototype,"badges",(function(t){var o;switch(this.subscription()){case"follow":o=g.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":o=g.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}o&&t.add("subscription",o)})),Object(r.extend)(v.a,"userControls",(function(t,o,n){if(app.session.user&&!(n instanceof h.a)){var r={none:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:null},ignore:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:null}},s=o.subscription()||"none";t.add("subscription",w.a.component({icon:r[s].icon,onclick:o.save.bind(o,{subscription:r[s].save})},r[s].label))}})),Object(r.extend)(h.a.prototype,"sidebarItems",(function(t){if(app.session.user){var o=this.discussion;t.add("subscription",G.component({discussion:o}))}})),Object(r.extend)(p.a.prototype,"navItems",(function(t){if(app.session.user){var o=app.search.stickyParams();t.add("following",q.a.component({href:app.route("following",o),icon:"fas fa-star"},app.translator.trans("flarum-subscriptions.forum.index.following_link")),50)}})),Object(r.extend)(p.a.prototype,"setTitle",(function(){"following"===app.current.get("routeName")&&app.setTitle(app.translator.trans("flarum-subscriptions.forum.following.meta_title_text"))})),Object(r.extend)(E.a.prototype,"params",(function(t){t.onFollowing="following"===app.current.get("routeName")})),Object(r.extend)(U.a.prototype,"requestParams",(function(t){this.params.onFollowing&&(t.filter.subscription="following")})),Object(r.extend)(J.a.prototype,"notificationsItems",(function(t){var o=this;t.add("followAfterReply",Q.a.component({state:this.user.preferences().followAfterReply,onchange:function(t){o.followAfterReplyLoading=!0,o.user.savePreferences({followAfterReply:t}).then((function(){o.followAfterReplyLoading=!1,m.redraw()}))},loading:this.followAfterReplyLoading},app.translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label")))})),Object(r.extend)(b.a.prototype,"notificationTypes",(function(t){t.add("newPost",{name:"newPost",icon:"fas fa-star",label:e.a.translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})}))}))}]);
//# sourceMappingURL=forum.js.map