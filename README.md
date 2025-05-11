<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MORA - Le Village de la Terreur</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #0a0a0a;
      color: #eaeaea;
    }
    header {
      background: #1a1a1a;
      padding: 2rem;
      text-align: center;
    }
    header h1 {
      font-size: 2.5rem;
      color: #ff1e1e;
    }
    header p {
      font-style: italic;
      color: #ccc;
    }
    main {
      padding: 2rem;
      max-width: 800px;
      margin: auto;
    }
    .cover {
      width: 100%;
      max-width: 400px;
      display: block;
      margin: 1rem auto;
    }
    .section {
      margin-bottom: 2rem;
    }
    .button {
      display: inline-block;
      background: #ff1e1e;
      color: white;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 5px;
    }
    footer {
      background: #111;
      text-align: center;
      padding: 1rem;
      font-size: 0.9rem;
      color: #777;
    }
  </style>
</head>
<body>
  <header>
    <h1>MORA</h1>
    <p>Le Village de la Terreur</p>
  </header>
  <main>
    <img src="cover.jpg" alt="Couverture du roman Mora" class="cover">
    <div class="section">
      <h2>Synopsis</h2>
      <p>Mora est un village effacé des cartes, noyé dans une brume éternelle. Quatre garçons s'y aventurent, curieux... mais un à un, ils disparaissent. Ce qu'ils vont découvrir dépasse l'horreur. Entre mystère, créatures et souvenirs mutilés, le danger n'est pas ce que l'on croit...</p>
    </div>
    <div class="section">
      <a href="#chapitres" class="button">Lire les chapitres</a>
    </div>
    <div class="section">
      <h2>À propos de l’auteur</h2>
      <p>Écrivain passionné par les histoires sombres et les mystères, l’auteur de MORA vous plonge dans un univers où la peur est plus réelle que jamais. Ce roman est son hommage aux légendes oubliées et à la terreur psychologique.</p>
    </div>
  </main>
  <footer>
    &copy; 2025 MORA - Tous droits réservés
  </footer>
</body>
</html>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# GitHub Pages

_Create a site or blog from your GitHub repositories with GitHub Pages._

</header>

<!--
  <<< Author notes: Course start >>>
  Include start button, a note about Actions minutes,
  and tell the learner why they should take the course.
-->

## Welcome

With GitHub Pages, you can host project blogs, documentation, resumes, portfolios, or any other static content you'd like. Your GitHub repository can easily become its own website. In this course, we'll show you how to set up your own site or blog using GitHub Pages.

- **Who is this for**: Beginners, students, project maintainers, small businesses.
- **What you'll learn**: How to build a GitHub Pages site.
- **What you'll build**: We'll build a simple GitHub Pages site with a blog. We'll use [Jekyll](https://jekyllrb.com), a static site generator.
- **Prerequisites**: If you need to learn about branches, commits, and pull requests, take [Introduction to GitHub](https://github.com/skills/introduction-to-github) first.
- **How long**: This course takes less than one hour to complete.

In this course, you will:

1. Enable GitHub Pages
2. Configure your site
3. Customize your home page
4. Create a blog post
5. Merge your pull request

### How to start this course

<!-- For start course, run in JavaScript:
'https://github.com/new?' + new URLSearchParams({
  template_owner: 'skills',
  template_name: 'github-pages',
  owner: '@me',
  name: 'skills-github-pages',
  description: 'My clone repository',
  visibility: 'public',
}).toString()
-->

[![start-course](https://user-images.githubusercontent.com/1221423/235727646-4a590299-ffe5-480d-8cd5-8194ea184546.svg)](https://github.com/new?template_owner=skills&template_name=github-pages&owner=%40me&name=skills-github-pages&description=My+clone+repository&visibility=public)

1. Right-click **Start course** and open the link in a new tab.
2. In the new tab, most of the prompts will automatically fill in for you.
   - For owner, choose your personal account or an organization to host the repository.
   - We recommend creating a public repository, as private repositories will [use Actions minutes](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
   - Scroll down and click the **Create repository** button at the bottom of the form.
3. After your new repository is created, wait about 20 seconds, then refresh the page. Follow the step-by-step instructions in the new repository's README.

<footer>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

Get help: [Post in our discussion board](https://github.com/orgs/skills/discussions/categories/github-pages) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2023 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
