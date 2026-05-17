---
layout: default
title: "技术博客"
permalink: /blog/
---

<h1 class="page-title">📝 技术博客</h1>

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <div class="post-date">{{ post.date | date: "%Y 年 %m 月 %d 日" }}</div>
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
  </li>
  {% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p style="text-align:center; color: var(--c-text-muted); padding: 3rem 0;">
  还没有文章，第一篇正在路上……
</p>
{% endif %}
