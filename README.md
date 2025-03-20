<header>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sécurité sur les réseaux sociaux</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #444;
            padding: 0.5rem;
        }
        nav a {
            color: white;
            margin: 0 1rem;
            text-decoration: none;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 10px 0;
        }
        a {
            color: blue;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>Sécurité sur les réseaux sociaux</h1>
    </header>
    <nav>
        <a href="#presentation">Présentation du sujet</a>
        <a href="#nous">Qui sommes-nous ?</a>
        <a href="#protection">Protection des données</a>
        <a href="#cyberharcelement">Prévention du cyberharcèlement</a>
        <a href="#proteger">Protéger son compte</a>
        <a href="#naviguer">Naviguer en sécurité</a>
        <a href="#sources">Bibliographie & Sitographie</a>
        <a href="#contact">Contact</a>
    </nav>
    <div class="container" id="presentation">
        <h2>Présentation du sujet</h2>
        <p>Ce site a pour but de sensibiliser les utilisateurs aux dangers des réseaux sociaux et de proposer des solutions pour naviguer en toute sécurité.</p>
        <p>Les réseaux sociaux sont omniprésents dans notre quotidien. Toutefois, ils exposent les utilisateurs à des risques tels que l'usurpation d'identité, la collecte abusive de données personnelles ou encore le cyberharcèlement. Nous vous proposons ici des conseils pratiques et des ressources pour utiliser ces plateformes en toute sécurité.</p>
        <img src="https://via.placeholder.com/800x400" alt="Image de sensibilisation aux réseaux sociaux">
    </div>
    <div class="container" id="sources">
        <h2>Bibliographie & Sitographie</h2>
        <p>Nous avons utilisé plusieurs sources fiables pour construire ce site et vous fournir des informations précises sur la sécurité en ligne.</p>
        <ul>
            <li><a href="https://www.cnil.fr/">CNIL - Commission nationale de l'informatique et des libertés</a></li>
            <li><a href="https://www.e-enfance.org/">E-Enfance - Protection des jeunes en ligne</a></li>
            <li><a href="https://www.service-public.fr/">Service Public - Sécurité numérique</a></li>
        </ul>
    </div>
    <div class="container" id="contact">
        <h2>Contact</h2>
        <p>Vous avez des questions ou souhaitez en savoir plus ? Contactez-nous :</p>
        <form>
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="message">Message :</label>
            <textarea id="message" name="message" required></textarea>
            <br>
            <button type="submit">Envoyer</button>
        </form>
    </div>
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
