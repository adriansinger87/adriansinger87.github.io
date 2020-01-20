---
layout: page
description: "A list of Joe's blog posts organized by tags"
permalink: /tags
---

<h1 class="page-title">All tags on this blog</h1>

> Click on one of the tags to jump to the entry or discover the list on your own.

<div>
{% for tag in site.tags %}
  {% assign t = tag | first %}
    <div class="chip"><a href="#{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></div>
{% endfor %}
</div>
<a href="{{ site.baseurl }}/articles/" class="btn btn-flat">
  <i class="mdi mdi-book-open-page-variant left"></i> back to articles
</a>

---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}

<h4><a class="section scrollspy" id="{{t | downcase | replace:" ","-" }}">{{ t | downcase }}</a></h4>
<ul>
{% for post in posts %}
  {% if post.tags contains t %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </li>
  {% endif %}
{% endfor %}
</ul>

---

{% endfor %}
