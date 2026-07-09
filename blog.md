---
layout: page
title: Blog
permalink: /blog/
---

# My Blog

Welcome to my blog! Here are all my posts:

{% for post in site.posts %}
  * [{{ post.title }}]({{ post.url }}) - {{ post.date | date_to_string }}
{% endfor %}
