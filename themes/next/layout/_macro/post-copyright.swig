{% if theme.post_copyright.enable %}
{% if page.copyright %}
  <ul class="post-copyright">
    <li class="post-copyright-author">
      <strong>{{ __('post.copyright.author') + __('symbol.colon') }}</strong>
      {{ config.author }}
    </li>
    <li class="post-copyright-link">
      <strong>{{ __('post.copyright.link') + __('symbol.colon') }}</strong>
      <a href="{{ config.url }}{{ config.root }}{{ post.path }}" title="{{ post.title }}">{{ config.url }}{{ config.root }}{{ post.path }}</a>
    </li>
    <li class="post-copyright-license">
      <strong>{{ __('post.copyright.license_title') + __('symbol.colon') }} </strong>
      {{ __('post.copyright.license_content', theme.post_copyright.license_url, theme.post_copyright.license) }}
    </li>
  </ul>
{% endif %}
{% endif %}
