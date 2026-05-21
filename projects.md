---
layout: default
title: "项目作品"
permalink: /projects/
---

<h1 class="page-title">🛠️ 项目作品</h1>

<p style="text-align:center; color: var(--c-text-muted); margin-bottom: 2rem;">
  以下是我在 GitHub 上维护的项目，涵盖嵌入式、FPGA、电子设计等领域。
</p>

<div class="project-grid">
  {% for project in site.projects %}
  <a href="{{ project.url | relative_url }}" class="project-card">
    <div class="project-card-header">
      <h3>{{ project.title }}</h3>
      {% if project.status %}
      <span class="project-status {{ project.status }}">{{ project.status }}</span>
      {% endif %}
    </div>
    <p>{{ project.excerpt | strip_html | truncate: 100 }}</p>
    {% if project.github %}
    <span class="project-card-link" onclick="event.stopPropagation(); window.open('{{ project.github }}', '_blank')">🔗 GitHub</span>
    {% endif %}
  </a>
  {% endfor %}
</div>

{% if site.projects.size == 0 %}
<p style="text-align:center; color: var(--c-text-muted); padding: 3rem 0;">
  暂无项目展示，敬请期待。
</p>
{% endif %}

