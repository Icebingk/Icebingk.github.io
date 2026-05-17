---
layout: default
title: "项目作品"
permalink: /projects/
---

<h1 class="page-title">🛠️ 项目作品</h1>

<div class="project-grid">
  {% for project in site.projects %}
  <a href="{{ project.url | relative_url }}" class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
  </a>
  {% endfor %}
</div>

{% if site.projects.size == 0 %}
<p style="text-align:center; color: var(--c-text-muted); padding: 3rem 0;">
  暂无项目展示，敬请期待。
</p>
{% endif %}
