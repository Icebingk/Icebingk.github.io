---
layout: default
title: "项目作品"
permalink: /projects/
---

<header class="page-intro">
  <p class="section-kicker">PROJECT ARCHIVE</p>
  <h1 class="page-title">项目作品</h1>
  <p>记录从 FPGA、数字 IC 到嵌入式系统的工程实践。点击项目查看设计目标、技术亮点和实现细节。</p>
</header>

<div class="project-grid project-grid-wide">
  {% assign sorted_projects = site.projects | sort: "title" %}
  {% for project in sorted_projects %}
  <article class="project-card project-card-rich">
    <a href="{{ project.url | relative_url }}" class="project-card-main">
      <div class="project-card-header">
        <h3>{{ project.title }}</h3>
        {% if project.status %}<span class="project-status {{ project.status }}">{{ project.status }}</span>{% endif %}
      </div>
      <p>{{ project.excerpt | strip_html | truncate: 116 }}</p>
    </a>
    <div class="project-card-actions">
      <a href="{{ project.url | relative_url }}">查看详情</a>
      {% if project.demo %}<a href="{{ project.demo }}" target="_blank" rel="noopener">在线演示 ↗</a>{% endif %}
      {% if project.github %}<a href="{{ project.github }}" target="_blank" rel="noopener">GitHub ↗</a>{% endif %}
    </div>
  </article>
  {% endfor %}
</div>
