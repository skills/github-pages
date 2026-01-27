## Step 4: Create a blog post

Your home page is looking great! :cowboy_hat_face:

### 📖 Theory: Jekyll blog posts and frontmatter



Jekyll uses specially named files and frontmatter to create blog posts. The files must be named `_posts/YYYY-MM-DD-title.md` and must include `title` and `date` in the **front matter**.

**Front matter** is a yaml section at the **top** of your file that looks like this:

```yaml
---
title: "Welcome to my blog"
date: 2025-05-15
---
```

> [!NOTE]
> Learn more in the [Jekyll frontmatter documentation](https://jekyllrb.com/docs/front-matter/).


### ⌨️ Activity: Create a blog post

1. Browse to the `main` branch.
1. Click the `Add file` dropdown menu and then on `Create new file`.
1. Name the file following the `_posts/YYYY-MM-DD-title.md` format.
1. Replace the `YYYY-MM-DD` with today's date, and change the `title` of your first blog post if you'd like.
   > If you do edit the title, make sure there are hyphens (-) between your words.
   > If your blog post date doesn't follow the correct date convention, you'll receive an error and your site won't build. For more information, see "[Page build failed: Invalid post date](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)".
1. Type the following content at the top of your blog post:

   ```yaml
   ---
   title: "YOUR-TITLE"
   date: YYYY-MM-DD
   ---
   ```

   1. Replace `YOUR-TITLE` with the title for your blog post.
   1. Replace `YYYY-MM-DD` with today's date.
1. Type a quick draft of your blog post. Remember, you can always edit it later.
1. Commit your changes to the `main` branch.
1. As you commit your changes Mona will prepare the next step in this exercise!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Double-check your file name and date format.
- Make sure your frontmatter is at the very top of the file and formatted correctly.

</details>
