---
layout: page
title: Categories
permalink: /categories/
---

# Categories

Browse posts by category:

{% assign categories = site.categories | sort %}
{% for category in categories %}
  <h3>{{ category[0] | capitalize }}</h3>
  <ul>
    {% for post in category[1] %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
