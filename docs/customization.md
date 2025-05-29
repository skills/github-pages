# 🎨 Customizing Your Pentesting & AI Blog

## Changing the Blog Name and Description

### Update Site Title
Edit `_config.yml` in your repository root:

```yaml
# Site settings
title: "Pentesting & AI Hub"  # Change this line
email: your-email@example.com
description: >-
  Expert insights on penetration testing, cybersecurity, and artificial intelligence.
  Sharing practical tutorials, tool reviews, and industry analysis.
```

### Suggested Blog Names
- **"Pentesting & AI Hub"**
- **"CyberAI Insights"** 
- **"Security & Intelligence Blog"**
- **"The Ethical Hacker's AI Lab"**
- **"PentestAI Chronicles"**
- **"Cyber Intelligence Hub"**

### Update Description
Make it compelling and SEO-friendly:

```yaml
description: >-
  Your new description here. Keep it under 160 characters for better SEO.
  Focus on your unique value proposition.
```

Examples:
```yaml
description: >-
  Advanced penetration testing techniques and AI-powered cybersecurity insights. 
  Practical tutorials, tool reviews, and industry analysis for security professionals.

description: >-
  Bridging cybersecurity and artificial intelligence. Expert tutorials on ethical hacking,
  AI threat detection, and cutting-edge security automation.
```

## Personal Information Setup

### Update Author Information
In `_config.yml`, update the defaults section:

```yaml
# Defaults
defaults:
  - scope:
      path: ""
      type: "posts"
    values:
      layout: "post"
      author: "Your Real Name"  # Change this
      comments: true
```

### Add Social Media Links
Update these in `_config.yml`:

```yaml
# Social media handles
email: your-email@example.com
twitter_username: your_twitter_handle
github_username: your_github_username
linkedin_username: your_linkedin_username  # Add this line
```

### Customize About Page
Edit `about.md` to tell your story:

```markdown
---
layout: page
title: About
permalink: /about/
---

# About Me

Welcome! I'm [Your Name], a [Your Title/Role] specializing in penetration testing and artificial intelligence applications in cybersecurity.

## My Background

- **🔐 Cybersecurity Experience**: [X] years in penetration testing and vulnerability assessment
- **🤖 AI Expertise**: Specialized in machine learning for threat detection and security automation
- **📜 Certifications**: [OSCP, CEH, CISSP, etc.]
- **🏢 Current Role**: [Your current position]

## What Drives Me

I'm passionate about bridging the gap between traditional penetration testing and modern AI capabilities. This blog serves as a platform to share:

- Advanced penetration testing methodologies
- AI-powered security tools and techniques
- Industry insights and emerging threats
- Practical tutorials and hands-on guides

## My Mission

To help security professionals leverage artificial intelligence in their penetration testing workflows while maintaining the highest ethical standards.

## Connect With Me

- **LinkedIn**: [Your LinkedIn Profile]
- **Twitter**: [@your_handle]
- **GitHub**: [Your GitHub Profile]
- **Email**: [your.email@domain.com]

---

*Always happy to connect with fellow security professionals and AI enthusiasts!*
```

## Color Scheme and Design

### Customize Colors
Edit `assets/css/style.scss` to change colors:

```scss
// Custom color variables
:root {
  --primary-color: #1e40af;     // Main blue
  --secondary-color: #dc2626;   // Red accent
  --text-color: #1f2937;        // Dark gray text
  --background-color: #ffffff;  // White background
  --accent-color: #059669;      // Green for success/highlights
}

// Apply custom colors
.site-header {
  background: var(--primary-color);
}

.btn-primary {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
}

.post-category {
  background: var(--accent-color);
}
```

### Suggested Color Schemes

**Professional Blue & Red:**
```scss
:root {
  --primary-color: #1e40af;    // Professional blue
  --secondary-color: #dc2626;  // Security red
  --accent-color: #059669;     // Success green
}
```

**Dark Cyber Theme:**
```scss
:root {
  --primary-color: #0f172a;    // Dark navy
  --secondary-color: #ef4444;  // Bright red
  --accent-color: #10b981;     // Matrix green
  --background-color: #f8fafc; // Light gray
}
```

**AI Purple Theme:**
```scss
:root {
  --primary-color: #7c3aed;    // AI purple
  --secondary-color: #f59e0b;  // Warning orange
  --accent-color: #06b6d4;     // Cyan
}
```

## Navigation Customization

### Add New Pages
To add a new page (like "Tools" or "Resources"):

1. **Create the page file**: `tools.md`
```markdown
---
layout: page
title: Tools
permalink: /tools/
---

# Recommended Tools

My curated list of penetration testing and AI security tools...
```

2. **Add to navigation** in `_data/navigation.yml`:
```yaml
---
main:
  - title: "Home"
    url: /
  - title: "About"
    url: /about/
  - title: "Categories"
    url: /categories/
  - title: "Tools"      # New page
    url: /tools/
```

### Reorder Navigation
Simply change the order in `_data/navigation.yml`:

```yaml
---
main:
  - title: "Home"
    url: /
  - title: "Tools"      # Moved up
    url: /tools/
  - title: "About"
    url: /about/
  - title: "Categories"
    url: /categories/
```

## Advanced Customizations

### Add Your Photo
1. **Create images folder**: `assets/images/`
2. **Upload your photo**: `assets/images/profile.jpg`
3. **Add to about page**:
```markdown
![Your Name](assets/images/profile.jpg)
# About Me
...
```

### Custom Favicon
1. **Create a favicon.ico file** (16x16 or 32x32 pixels)
2. **Place it in the root directory** of your repository
3. **It will automatically be used** by browsers

### Google Analytics (Optional)
Add to `_config.yml`:

```yaml
# Analytics
google_analytics: UA-XXXXXXXXX-X  # Your Google Analytics ID
```

### SEO Optimization
Ensure each post has good SEO:

```markdown
---
layout: post
title: "SEO-Optimized Title with Keywords"
date: 2025-05-29 10:00:00 +0000
categories: [pentesting, ai]
tags: [specific, relevant, keywords]
author: Your Name
excerpt: "Compelling description under 160 characters that includes your main keywords."
image: assets/images/post-thumbnail.jpg  # Optional featured image
---
```

## Testing Your Changes

### Local Testing (Optional)
If you want to preview changes locally:

```bash
# Install Jekyll locally
gem install bundler jekyll

# Clone and run your blog
git clone https://github.com/yourusername/your-repo.git
cd your-repo
bundle install
bundle exec jekyll serve

# View at http://localhost:4000
```

### Live Testing
1. **Make changes** in GitHub
2. **Wait 2-3 minutes** for build
3. **Check your live site**
4. **Clear browser cache** if changes don't appear

## ✅ Customization Checklist

- [ ] Updated blog title and description
- [ ] Personalized about page with your background
- [ ] Added social media links
- [ ] Customized author information
- [ ] Chosen and applied color scheme
- [ ] Added professional photo (optional)
- [ ] Configured navigation menu
- [ ] Tested changes on live site

## 🎯 Branding Tips

### Professional Positioning
Position yourself as an expert by emphasizing:
- Years of experience
- Relevant certifications
- Notable projects or achievements
- Speaking engagements or publications

### Content Consistency
Maintain consistent branding across:
- Blog design and colors
- Writing tone and style
- Social media profiles
- Professional networks

### Visual Identity
Consider creating:
- A simple logo or wordmark
- Consistent color scheme
- Professional headshot
- Branded social media headers

---

**Next Step**: Once customized, head to [url-setup.md](url-setup.md) to set up your professional domain!
