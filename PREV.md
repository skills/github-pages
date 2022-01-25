# GitHub Pages

_Learn how to create a site or blog from your GitHub repositories with GitHub Pages._

![](https://repository-images.githubusercontent.com/139185178/e16dc080-586c-11ea-8483-f28caf36a352)

**Tags**: GitHub, GitHub Pages

---

Did you know you can host your personal, organization, and project sites on GitHub? With GitHub Pages, you can quickly create a site from your GitHub repositories—a great way to share static content related to your repository like resumes, portfolios, and project blogs. 

If you're new to GitHub Pages, or you want to learn how to build and host a GitHub Pages site, you're in the right place. With GitHub Pages, you can host content like documentation, resumes, or any other static content that you’d like.

## What you'll learn

In this course, you’ll learn how to:

- Enable GitHub Pages
- Choose a theme with Jekyll
- Use YAML front matter
- Customize your site
- Create and edit blog posts

You'll know the answers to questions like:

- What is GitHub pages?
- How do I make sites with GitHub Pages?
- How do I create my own blog?

## What you'll build

In this course, you'll build a simple personal blog site with GitHub Pages. You'll be able to add posts and share your blog with anyone.

![Screenshot_2021-04-07 Welcome to my blog](https://user-images.githubusercontent.com/29868089/113876198-76721580-97f2-11eb-89eb-e6c7375ad7cc.png)

## Prerequisites

For this course, you'll need to know how to create a branch on GitHub, commit changes using Git, and open a pull request on GitHub. If you need a refresher on the GitHub flow, check out the [Introduction to GitHub course](https://lab.github.com/githubtraining/introduction-to-github). We'll assume you know what [blogs](https://en.wikipedia.org/wiki/Blog) are and how they work.

## Projects used

- [Jekyll](https://jekyllrb.com), a static site generator
- [Jekyll minima theme](https://github.com/jekyll/minima), a one-size-fits-all Jekyll theme for writers

## Audience

This is a great beginner course. If you're wanting to run your own blog, personal site, project site, or portfolio, this is the best course for you. This is a wonderful course for students, project maintainers, and small businesses.


---

## Step 1: Enable GitHub Pages

Welcome to GitHub Pages and Jekyll :tada:!

If you're new to GitHub Pages, or you want to learn how to build and host a [GitHub Pages](https://pages.github.com) site, you're in the right place. With GitHub Pages, you can host content like [documentation](https://flight-manual.atom.io/), [resumes](https://github.com/jglovier/resume-template), or any other static content that you’d like.

In this course, you'll create a blog hosted on GitHub Pages and learn how to:

- Enable GitHub Pages
- Use [Jekyll](https://jekyllrb.com/), a static site generator
- Customize Jekyll sites with a theme and content

### New to GitHub?

For this course, you'll need to know how to create a branch on GitHub, commit changes using Git, and open a pull request on GitHub. If you need a refresher on the GitHub flow, check out the [Introduction to GitHub course]({{ host }}/courses/introduction-to-github).

### :keyboard: Activity: Generate a GitHub Pages site

The first step to publishing your blog to the web is to enable GitHub Pages on this repository <sup>[:book:](https://help.github.com/articles/github-glossary/#repository)</sup>. When you enable GitHub Pages on a repository, GitHub takes the content that's on the main branch and publishes a website based on its contents.

1. Under your repository name, click [**Settings**]({{ repoUrl }}/settings).
1. In the "GitHub Pages" section, in the Source drop-down, select **main branch**.

After GitHub Pages is enabled and the site is started, we'll be ready to create some more content. 

> Turning on GitHub Pages creates a deployment of your repository. I may take up to a minute to respond as I await the deployment.

<hr>
<h3 align="center">Return to this issue for my next comment.</h3>

> _Sometimes I respond too fast for the page to update! If you perform an expected action and don't see a response from me, wait a few seconds and refresh the page for your next steps._


## Step 2: Customize your homepage

Great job! Now that GitHub Pages is enabled, you can view your website here: {{ deploymentUrl }}

You can customize your homepage by adding content to either an `index` file or the `README.md` file. GitHub Pages first looks for an `index` file. If an `index` file is found, GitHub Pages uses the content in the file to create the homepage. If an `index` file isn’t found, it uses the `README.md` to create the homepage.

Your repository has an `index.md` file so we can update it to include your personalized content.

### :keyboard: Activity: Create your homepage

1. Navigate to the **Code** tab of this repository, and browse to the `index.md` file, or click this link [here]({{ repoUrl }}/blob/main/index.md)
2. In the upper right corner, click the ![octicon-pencil] icon to edit the `index.md` file
3. Type the content you want on your homepage. You can also modify `title:` or just ignore it for now. We'll discuss it later in this course.
4. Scroll to the bottom, type a commit message, and click **Create a new branch for this commit and start a pull request**
5. Open a pull request

> Once you have created your pull request, I will move over there to discuss next steps.

<hr>
<h3 align="center">Look for my next response in your pull request.</h3>

[octicon-pencil]: https://unpkg.com/octicons/build/svg/pencil.svg


It looks like your pull request description is empty, @{{ user.username }}. 

**Did you know?** By adding keywords to your pull request, you can automatically close issues.

For example, if you type `closes #2` in your pull request description, the open issue will close when this exercise is complete! For more keywords that you can use to close issues, see “[Closing issues with keywords](https://help.github.com/articles/closing-issues-using-keywords/)".


If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">Check below for next steps.</h3>


## Step 3: Merge your pull request

You can merge<sup>[:book:](https://help.github.com/articles/github-glossary/#merge)</sup> your pull request now @{{ user.username }}! :ship: 

### :keyboard: Activity: Merge your pull request

1. Click **Merge pull request** below.
1. Click **Confirm merge**.
1. Click **Delete branch**.

<hr>
<h3 align="center">Watch below for my response.</h3>


## Step 4: Customize Site Details

Great work! You can see your published page [here]({{ deploymentUrl }}). If you don't see your changes right away, refresh the page.

### Getting your page blog ready

Jekyll uses a file titled `_config.yml` to store settings for your site, your theme, and reusable content like your site title and GitHub handle.

You can check out the `_config.yml` file on the **Code** tab of your repository.

### :keyboard: Activity: Modify the config file

Let's change the `_config.yml` so it's a perfect fit for your new blog. First, we need to use a blog-ready theme. For this activity, we will use a theme named `minima`.

1. Navigate to the **Code** tab of this repository, and browse to the `_config.yml` file, or click this link [here]({{ repoUrl }}/blob/main/_config.yml).
2. In the upper right corner, click :pencil2: to open the file editor.
3. Add a `theme:` set to **minima** so it shows in the `_config.yml` file as below:
    ```
    theme: minima
    ```
4. Modify the other configuration variables such as `title:`, `author:`, and `description:` to customize your site.
5. Click **Create a new branch for this commit and start a pull request**.
6. Open a pull request.

<hr>
<h3 align="center">Look for my next response in your pull request.</h3>


Good work @{{ user.username }}! This pull request is all finished up. Find your next task [here]({{ url }}).

I'm going to go ahead and close our first issue <sup>[:book:](https://help.github.com/articles/github-glossary/#issue)</sup> now that you have updated your `index.md` file.


It looks like your pull request description is empty, @{{ user.username }}. 

**Did you know?** By adding keywords to your pull request, you can automatically close issues.

For example, if you type `closes #2` in your pull request description, the open issue will close when this exercise is complete! For more keywords that you can use to close issues, see “[Closing issues with keywords](https://help.github.com/articles/closing-issues-using-keywords/)".


If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">Check below for next steps.</h3>


It looks like you changed your theme, but for this activity we want to use `minima`.

### :keyboard: Activity: Change the theme to minima

Let's change the theme to `minima`:

1. At the top of this Pull Request, click the **Files changed** tab.
2. Click the icon to enter edit mode and change the  `theme:` to **minima**.
3. Scroll to the bottom of the window to create a commit.
4. Enter a commit message then click **Commit changes**.

> Don't worry, if you don't like this theme you can always change it later.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">Watch below for my next comment.</h3>


## Step 5: Create a blog post

:warning: Do not merge yet! :warning:

This pull request looks great so far. :sparkles: You've just edited the `_config.yml` file! We have some more work to do to create your blog site. You can continue to make commits on your `{{ branch }}` branch and the pull request will update automatically.

### :keyboard: Activity: Add some content to your blog

**Shortcut Note**: Click [this link]({{ repoUrl }}/new/{{ branch }}/?filename=_posts/{{ date | date: "%Y-%m-%d" }}-my-first-blog-post.md) to automatically complete steps 1-4.

1. On the "Code" tab, select your `{{ branch }}` branch.
1. Click **Create new file**.
1. Name the file `_posts/YYYY-MM-DD-title.md`.
1. Replace the `YYYY-MM-DD` with today's date, and change the `title` of your first blog post if you'd like. _Note:_ If you do edit the title, make sure there are hyphens between your words.

   - If your blog post date doesn't follow the correct date convention, you'll receive an error and your site won't build. For more information, see "[Page build failed: Invalid post date](https://help.github.com/articles/page-build-failed-invalid-post-date/)".

1. Type a quick draft of your blog post. Remember, you can always edit it later.
1. Commit your changes to your branch.

<hr>
<h3 align="center">Watch below for my response.</h3>


## Checking your post

@{{ user.username }} I see you created a file, but there are a few things we need to address!

Take a look at your file and make sure it meets the following requirements:

- [{% if directory %}x{% else %} {%endif%}] It is in the `_posts` directory
- [{% if filenumber %}x{% else %} {%endif%}] The filename starts with the correct date formatting: YYYY-MM-DD
- [{% if post %}x{% else %} {%endif%}] The filename includes a post title
- [{% if extension %}x{% else %} {%endif%}] The filename uses the `.md` extension
- [{% if filename %}x{% else %} {%endif%}] The filename follows Jekyll's [specific filename requirements](https://jekyllrb.com/docs/posts/#creating-post-files).

### :keyboard: Activity: Edit your file

1. Click the "Files Changed" tab in this pull request.
1. Click on the pencil icon on the right side of the screen.
1. Make adjustments based on the above errors.
1. Scroll to the bottom, and commit your changes.

If you would like assistance troubleshooting the issue you are encountering, create a post on the [GitHub Community]({{ communityBoard }}) board. You might also want to search for your issue to see if other people have resolved it in the past.

<hr>
<h3 align="center">Watch below for my response.</h3>

## Step 6: Add blog post metadata

Now that you've created your Jekyll blog post file, we can add syntax to it. The syntax Jekyll files use is called YAML front matter. It goes at the top of your file and looks something like this:

```yml
---
title: "Welcome to my blog"
date: 2019-01-20
---
```

This example adds a title and date to your blog post. There are other useful things you could add here in the future like layouts, categories, or any other logic that is useful to you. For more information about configuring front matter, see the [Jekyll front matter documentation](https://jekyllrb.com/docs/frontmatter/).

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

<hr>
<h3 align="center">Watch below for my response.</h3>


## Step 7: Merge your first post

Nice work @{{ user.username }} :tada:! Users will be reading your blog in no time!

### :keyboard: Activity: Merge your pull request

1. If satisfied with your post, click **Merge pull request**.
1. Click **Confirm merge**.
1. Click **Delete branch**.

<hr>
<h3 align="center">Watch below for my response.</h3>


## Nice work

![celebrate](https://octodex.github.com/images/constructocat2.jpg)

Congratulations @{{ user.username }}, you've completed this course!

Your blog is now live and has been deployed [here]({{ deploymentUrl }})!

Before we finish, let's recap everything you completed in this repository

- You used the GitHub Flow like a natural
- You enabled GitHub Pages
- You selected a theme using the config file
- You learned about proper directory format and file naming conventions in Jekyll
- You added and modified Jekyll front matter


## What's next?
There's so much more you can do with GitHub Pages, and you have a solid start. Now...[what will you learn next]({{ host }}/courses)?

