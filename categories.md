---
layout: page
title: Categories
permalink: /categories/
---

---
layout: page
title: Categories
permalink: /categories/
---

# Categories

*No articles posted yet. Categories will appear here once you start publishing content.*

Browse posts by category when available:

{% assign categories = site.categories | sort %}
{% if categories.size > 0 %}
  {% for category in categories %}
    <div class="category-section">
      <h3>{{ category[0] | capitalize }}</h3>
      <ul>
        {% for post in category[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%B %d, %Y" }}</span>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
{% endif %}
