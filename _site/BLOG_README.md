# Tech & AI Blog

A simple, professional blog built with Jekyll and GitHub Pages for sharing articles about technology, artificial intelligence, and penetration testing.

## 🚀 Features

- **Simple & Clean**: Just Home, About, and Categories pages
- **Responsive Design**: Mobile-friendly layout that looks great on all devices
- **SEO Optimized**: Built-in SEO tags and meta descriptions
- **Easy Content Management**: Simple blog post creation
- **Professional Design**: Perfect for LinkedIn sharing
- **Fast Loading**: Optimized for performance
- **Syntax Highlighting**: Beautiful code blocks for technical content

## 📝 How to Add New Blog Posts

### Method 1: GitHub Web Interface (Easiest)

1. Go to your repository on GitHub
2. Navigate to the `_posts` folder
3. Click "Add file" → "Create new file"
4. Name your file using this format: `YYYY-MM-DD-your-post-title.md`
5. Add the front matter and content (see template below)
6. Commit the file

### Method 2: Local Development

1. Clone the repository
2. Create a new file in `_posts/` folder
3. Follow the naming convention: `YYYY-MM-DD-your-post-title.md`
4. Add content and commit/push changes

### Blog Post Template

```markdown
---
layout: post
title: "Your Amazing Blog Post Title"
date: 2025-05-29 10:00:00 +0000
categories: [tech, ai, security]  # Choose relevant categories
tags: [javascript, machine-learning, cybersecurity]  # Add relevant tags
author: Your Name
excerpt: "A brief description of your post that appears in previews"
---

# Your Blog Post Content

Write your content here using Markdown syntax.

## Subheadings

Use ## for subheadings.

### Code Examples

```python
def hello_world():
    print("Hello, World!")
```

### Lists

- Bullet point 1
- Bullet point 2
- Bullet point 3

### Links

[Link text](https://example.com)

### Images

![Alt text](path/to/image.jpg)
```

## 🛠️ Deployment

### Automatic Deployment (Recommended)

Your blog automatically deploys when you:

1. Push changes to the `main` branch
2. GitHub Pages builds and publishes your site
3. Site is available at: `https://yourusername.github.io/repository-name`

### Setting Up GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Save settings

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _data/
│   └── navigation.yml   # Navigation menu items
├── _includes/           # Reusable template parts
├── _layouts/            # Page templates
│   ├── default.html     # Base template
│   ├── home.html        # Homepage template
│   ├── page.html        # Static page template
│   └── post.html        # Blog post template
├── _posts/              # Blog posts go here
├── assets/
│   ├── css/
│   │   └── style.scss   # Custom styles
│   └── js/
│       └── main.js      # Custom JavaScript
├── index.md             # Homepage content
├── about.md             # About page
├── categories.md        # Categories page
├── tags.md              # Tags page
└── archive.md           # Archive page
```

## ⚙️ Configuration

### Customize Site Settings

Edit `_config.yml` to update:

- Site title and description
- Your email and social media handles
- SEO settings
- Navigation menu

### Update Personal Information

1. **About Page**: Edit `about.md`
2. **Social Links**: Update `_config.yml`
3. **Author Name**: Update in `_config.yml` defaults section

## 🎨 Customization

### Adding New Pages

1. Create a new `.md` file in the root directory
2. Add front matter with `layout: page`
3. Add to navigation in `_data/navigation.yml`

### Styling Changes

- Edit `assets/css/style.scss` for custom styles
- Colors, fonts, and layouts can be modified
- Responsive design built-in

### Adding New Categories

1. Use categories in your post front matter
2. They automatically appear on the categories page
3. No additional setup required

## 📱 Content Ideas

### Tech Articles
- Programming tutorials
- Framework comparisons
- Development best practices
- Tool reviews

### AI Content
- Machine learning explanations
- AI tool reviews
- Industry trends
- Project showcases

### Penetration Testing
- Security methodologies
- Tool tutorials
- Vulnerability analyses
- Ethical hacking guides

## 🔧 Local Development

### Prerequisites

- Ruby (2.7+)
- Bundler gem

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Making Changes

1. Edit files locally
2. Preview changes at `http://localhost:4000`
3. Commit and push when satisfied

## 📈 SEO Tips

- Use descriptive titles and excerpts
- Add relevant tags and categories
- Include internal links between posts
- Optimize images with alt text
- Write engaging meta descriptions

## 🤝 Contributing

Feel free to:
- Submit issues for bugs or suggestions
- Create pull requests for improvements
- Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to start blogging?** Just create your first post in the `_posts` folder and push to GitHub!

For questions or support, feel free to open an issue in the repository.
