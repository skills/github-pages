<header>

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
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Llar d'Infants El Petit Príncep</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Pàgina d'inici -->
    <header>
        <h1>Llar d'Infants El Petit Príncep</h1>
        <p>Benvinguts a la nostra llar d'infants, on els somriures creixen i els nens aprenen jugant!</p>
        <img src="https://via.placeholder.com/400x200.png?text=Imatge+de+Benvinguda" alt="Llar d'Infants" />
    </header>

    <!-- Menú de navegació -->
    <nav>
        <ul>
            <li><a href="#qui-som">Qui Som</a></li>
            <li><a href="#projecte-educatiu">Projecte Educatiu</a></li>
            <li><a href="#aules">Aules</a></li>
            <li><a href="#activitats">Activitats</a></li>
            <li><a href="#contacte">Contacte</a></li>
        </ul>
    </nav>

    <!-- Qui Som -->
    <section id="qui-som">
        <h2>Qui Som</h2>
        <p>L'equip educatiu de la nostra llar està format per professionals apassionats de l'educació infantil. Ens dediquem a fomentar l'aprenentatge i el creixement personal de cada nen i nena.</p>
        <p>Valors i línia pedagògica: Respecte, creativitat, autonomia i aprenentatge basat en el joc.</p>
    </section>

    <!-- Projecte Educatiu -->
    <section id="projecte-educatiu">
        <h2>Projecte Educatiu</h2>
        <p>Les nostres activitats estan dissenyades per afavorir el desenvolupament global dels infants. Treballem amb una metodologia activa i participativa.</p>
        <h3>Etapes i metodologia de treball</h3>
        <p>Treballant en tres etapes: infants de 0-3 anys, 3-4 anys, i 4-6 anys. Cada etapa té una metodologia adaptada al seu desenvolupament cognitiu i emocional.</p>
    </section>

    <!-- Aules -->
    <section id="aules">
        <h2>Aules</h2>
        <div class="aula">
            <h3>Aula de Petits (0-3 anys)</h3>
            <p>Els més petits exploren el món a través del joc sensorial i les primeres relacions socials.</p>
            <img src="https://via.placeholder.com/300x200.png?text=Aula+Petits" alt="Aula Petits">
        </div>
        <div class="aula">
            <h3>Aula Mitjana (3-4 anys)</h3>
            <p>Desenvolupen la seva creativitat i habilitats comunicatives mitjançant activitats artístiques i lingüístiques.</p>
            <img src="https://via.placeholder.com/300x200.png?text=Aula+Mitjana" alt="Aula Mitjana">
        </div>
        <div class="aula">
            <h3>Aula de Grans (4-6 anys)</h3>
            <p>Comencen a aprendre conceptes més abstractes i a desenvolupar la seva autonomia en tasques individuals i en grup.</p>
            <img src="https://via.placeholder.com/300x200.png?text=Aula+Grans" alt="Aula Grans">
        </div>
    </section>

    <!-- Activitats -->
    <section id="activitats">
        <h2>Activitats</h2>

        <!-- Entrada d'activitat per a una UF -->
        <article class="activitat">
            <h3>Explorant els colors a través de la pintura</h3>
            <p>Aquesta activitat va permetre als infants de l'aula mitjana explorar els colors primaris amb pintura i mànegues de colors per crear les seves pròpies obres d'art.</p>
            <p><strong>Objectius:</strong> Fomentar la creativitat, reconèixer els colors i desenvolupar la coordinació motriu fina.</p>
            <p><strong>Materials:</strong> Pintures de colors, pinzells, papers grans.</p>
            <p><strong>Metodologia:</strong> Activitat en grups petits on els infants poden experimentar lliurement amb els colors.</p>
            <img src="https://via.placeholder.com/400x300.png?text=Activitat+Pintura" alt="Activitat de pintura">
        </article>

    </section>

    <!-- Contacte -->
    <section id="contacte">
        <h2>Contacte</h2>
        <p>Si tens alguna pregunta, no dubtis a posar-te en contacte amb nosaltres a través del correu electrònic: <a href="mailto:info@petitprincep.com">info@petitprincep.com</a>.</p>
        <p><strong>Adreça:</strong> Carrer del Petit Príncep, 12, 08022 Barcelona</p>
        <p><strong>Telèfon:</strong> +34 123 456 789</p>
        <p><strong>Segueix-nos a les nostres xarxes socials:</strong></p>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
    </section>

    <!-- Peu de pàgina -->
    <footer>
        <p>&copy; 2025 Llar d'Infants El Petit Príncep</p>
    </footer>
</body>
</html>
/* Estils generals */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

header {
    background-color: #ffcc00;
    text-align: center;
    padding: 30px;
    color: #fff;
}

h1 {
    font-size: 3em;
}

nav {
    background-color: #333;
    padding: 10px;
}

nav ul {
    list-style-type: none;
    text-align: center;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

section {
    padding: 30px;
    margin: 20px;
}

h2 {
    color: #333;
}

.aula {
    margin-bottom: 30px;
}

.aula img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.activitat {
    margin-bottom: 30px;
}

.activitat img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

footer {
    background-color: #333;
    text-align: center;
    color: #fff;
    padding: 10px;
}

/* Enllaços de contacte i xarxes socials */
a {
    color: #ffcc00;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
