Hey {!! $user->display_name !!}!

{!! $blueprint->post->user->display_name !!} {!! $translator->trans('flarum-subscriptions.forum.notifications.made_new_post') !!}: {!! $blueprint->post->discussion->title !!}

To view the new activity, check out the following link:
{!! app()->url() !!}/d/{!! $blueprint->post->discussion_id !!}/{!! $blueprint->post->number !!}

---

{!! strip_tags($blueprint->post->contentHtml) !!}

---

{!! $translator->trans('flarum-subscriptions.forum.notifications.receive_notifications') !!}
