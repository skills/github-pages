# 🌐 Portfolio Professionnel - Armourdom Suvan

Portfolio moderne et responsive développé pour présenter mes compétences, projets et expériences en réseaux et cybersécurité.

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Sections](#sections)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Personnalisation](#personnalisation)
- [Déploiement](#déploiement)
- [Fonctionnalités](#fonctionnalités)

## 🎯 Aperçu

Ce portfolio est un site web single-page moderne avec une navigation fluide entre les sections. Il présente un design sombre avec des accents néon cyan, optimisé pour tous les appareils (desktop, tablette, mobile).

## 📑 Sections

Le site comporte 5 sections principales :

### 1. **Accueil**
- Présentation personnelle
- Animation de cercle avec initiales
- Boutons d'action vers projets et contact

### 2. **CV**
- Timeline de formation
- Barres de compétences techniques animées
- Carte de téléchargement du CV (PDF)

### 3. **Portfolio**
- Présentation de 5 projets SAE (Situations d'Apprentissage et d'Évaluation)
- Cartes interactives avec icônes et tags
- Effets hover sophistiqués

### 4. **Compétences**
- 4 domaines d'expertise : Programmation, Réseaux, Cybersécurité, Systèmes
- Cartes avec icônes animées
- Liste de technologies maîtrisées

### 5. **Contact**
- Formulaire de contact fonctionnel
- Informations de contact (email, téléphone, localisation)
- Liens vers réseaux sociaux (LinkedIn, GitHub)

## 🛠 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** :
  - Variables CSS personnalisées
  - Flexbox & Grid Layout
  - Animations et transitions
  - Design responsive (Mobile-first)
- **JavaScript (Vanilla)** :
  - Navigation fluide
  - Menu hamburger mobile
  - Intersection Observer API
  - Animations au scroll
  - Gestion du formulaire

## 📦 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/suvan_armourdom.git
cd suvan_armourdom
```

2. **Ouvrir le fichier index.html**
```bash
# Avec un serveur local (recommandé)
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000

# Ou simplement ouvrir index.html dans votre navigateur
```

## 🚀 Utilisation

Le site est entièrement statique et ne nécessite aucune configuration particulière. Il suffit d'ouvrir `index.html` dans un navigateur moderne.

### Structure des fichiers
```
suvan_armourdom/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
├── PORTFOLIO_README.md # Ce fichier
└── images/            # Dossier pour les images (à créer)
    └── cv-image.png   # Votre CV en image
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `styles.css` (lignes 6-12) :

```css
:root {
  --primary-color: #64ffda;    /* Couleur principale (cyan) */
  --secondary-color: #0ef;     /* Couleur secondaire */
  --accent-color: #ff6b6b;     /* Couleur d'accentuation */
  --dark-bg: #0a192f;          /* Fond principal */
  /* ... */
}
```

### Modifier le contenu

1. **Informations personnelles** : Éditez `index.html`, section `#accueil`
2. **Projets** : Modifiez les cartes dans la section `#portfolio`
3. **Compétences** : Ajustez les barres et descriptions dans `#cv` et `#competences`
4. **Contact** : Mettez à jour vos coordonnées dans la section `#contact`

### Ajouter votre CV PDF

1. Créez un dossier `files/` à la racine
2. Ajoutez votre fichier `CV.pdf`
3. Modifiez le lien dans `index.html` ligne ~135 :
```html
<a href="files/CV.pdf" class="download-btn" download>Télécharger PDF</a>
```

## 🌐 Déploiement

### GitHub Pages

1. **Activer GitHub Pages**
   - Allez dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : `main` / `root`
   - Cliquez sur Save

2. **Accéder au site**
   - Votre site sera disponible à : `https://votre-username.github.io/suvan_armourdom/`

### Autres options

- **Netlify** : Drag & drop du dossier
- **Vercel** : Import depuis GitHub
- **Serveur web classique** : Upload via FTP

## ✨ Fonctionnalités

### Navigation
- ✅ Menu de navigation fixe avec effet au scroll
- ✅ Navigation fluide entre sections
- ✅ Menu hamburger responsive (mobile)
- ✅ Indicateur de section active

### Animations
- ✅ Animations d'entrée au scroll (Intersection Observer)
- ✅ Barres de compétences animées
- ✅ Effets hover sur les cartes
- ✅ Parallaxe léger sur la section hero
- ✅ Animation de rotation sur les icônes

### Interactivité
- ✅ Formulaire de contact avec validation
- ✅ Bouton "retour en haut" dynamique
- ✅ Notifications toast
- ✅ Easter egg (Konami Code) 🎮

### Performance
- ✅ CSS optimisé avec variables
- ✅ JavaScript vanilla (pas de framework lourd)
- ✅ Lazy loading des images prêt à l'emploi
- ✅ Code minifiable pour production

### Accessibilité
- ✅ Navigation au clavier
- ✅ Labels pour les formulaires
- ✅ Contraste des couleurs conforme
- ✅ Structure sémantique HTML5

## 📱 Responsive Design

Le site s'adapte à toutes les tailles d'écran :

- **Desktop** (> 968px) : Layout à 2 colonnes
- **Tablette** (768px - 968px) : Layout adapté
- **Mobile** (< 768px) : Menu hamburger, colonnes empilées

## 🔧 Configuration du formulaire

Le formulaire est actuellement en mode "démo" et affiche simplement une notification. Pour le rendre fonctionnel :

### Option 1 : Formspree
```html
<form action="https://formspree.io/f/votre-id" method="POST">
```

### Option 2 : Backend personnalisé
Modifiez `script.js` ligne ~150 pour envoyer à votre API :
```javascript
fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
})
```

## 📝 TODO / Améliorations futures

- [ ] Ajouter une section "Expériences professionnelles"
- [ ] Intégrer un blog avec articles
- [ ] Ajouter un mode clair/sombre (toggle)
- [ ] Multilingue (FR/EN)
- [ ] Animations plus avancées (GSAP, Framer Motion)
- [ ] Analytics (Google Analytics, Plausible)

## 🐛 Bugs connus

Aucun bug majeur identifié. Si vous en trouvez, n'hésitez pas à ouvrir une issue !

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le modifier.

## 👤 Auteur

**Armourdom Suvan**
- Étudiant en BUT Réseaux et Télécommunications
- Spécialisation : Cybersécurité et Réseaux

## 🙏 Remerciements

- Design inspiré des portfolios modernes de développeurs
- Icônes : SVG personnalisés
- Police : Google Fonts (Poppins)

---

Créé avec ❤️ pour mettre en valeur mes compétences et projets

**Version** : 1.0.0
**Dernière mise à jour** : Novembre 2024
