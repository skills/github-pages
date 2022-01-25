

### :keyboard: Activity: Add some content to your blog


1. On the "Code" tab, select your `{{ branch }}` branch.
1. Click **Create new file**.
1. Name the file `_posts/YYYY-MM-DD-title.md`.
1. Replace the `YYYY-MM-DD` with today's date, and change the `title` of your first blog post if you'd like. _Note:_ If you do edit the title, make sure there are hyphens between your words.

   - If your blog post date doesn't follow the correct date convention, you'll receive an error and your site won't build. For more information, see "[Page build failed: Invalid post date](https://help.github.com/articles/page-build-failed-invalid-post-date/)".

1. Type a quick draft of your blog post. Remember, you can always edit it later.
1. Commit your changes to your branch.



### :keyboard: Activity: Add Front Matter to your Blog Post

1. Click the "Files Changed" tab in this pull request.
1. There are two files in the "Files Changed" tab, the `_config.yml` file and the `_posts/YYYY-MM-DD-title.md` file. Make sure to edit the file in the `_posts` folder. 
2. Click on the icon to edit on the right side of the screen.
3. Type the following content at the top of your blog post:

       ---
       title: "YOUR-TITLE"
       date: YYYY-MM-DD
       ---

4. Replace YOUR-TITLE with the title for your blog post.
5. Replace YYYY-MM-DD with today's date.
6. Commit your changes to your branch.

<hr>
<h3 align="center">Watch below for my response.</h3>


## Checking your front matter

It looks like there may be some errors in your front matter. Take a look at your front matter and make sure the following is true:

- [{% if dashes %}x{% else %} {% endif %}] You used dashes on the first and final line
- [{% if title %}x{% else %} {% endif %}] You added a page title surrounded in quotes
- [{% if date %}x{% else %} {% endif %}] You added a date using the correct format

The YAML front matter should be at the top of your blog post file and should look something like this:

```yaml
---
title: "Your blog post title"
date: YYYY-MM-DD
---
```

### :keyboard: Activity: Edit your blog post

1. Click the "Files Changed" tab in this pull request.
1. Scroll past the config file, and find the file that you created.
1. Click on the pencil icon on the right side of the screen.
1. Make adjustments based on the above errors.
1. Scroll to the bottom, and commit your changes.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.










