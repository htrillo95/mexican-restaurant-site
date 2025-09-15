# El Corazón Restaurant Website

A beautiful, responsive website template for Mexican restaurants with CMS integration.

## 🚀 Quick Start

1. **View the website**: Open `index.html` in your browser
2. **Run locally**: `python3 -m http.server 8000` then visit `http://localhost:8000`
3. **Test admin locally**: Visit `http://localhost:8000/admin` (demo interface)

## ✏️ How to Edit Content

### Option 1: Direct Editing (Easiest)
- Edit `index.html` directly - all customizable content is marked with `<!-- TODO: -->` comments
- Change colors in `style.css` by modifying the CSS variables in `:root`

### Option 2: NetlifyCMS (User-Friendly)
1. Deploy to Netlify
2. Enable Git Gateway
3. Visit `/admin` to access the content management interface
4. Edit content through a user-friendly interface

### Option 3: Other CMS Options
- **WordPress**: Convert to a WordPress theme
- **Strapi**: Use as a headless CMS
- **Contentful**: Integrate with Contentful API
- **Sanity**: Use Sanity Studio

## 📁 File Structure

```
mexican-restaurant-site/
├── index.html              # Main website file
├── style.css              # All styling and responsive design
├── script.js              # Interactive functionality
├── admin/                 # NetlifyCMS admin interface
│   ├── index.html         # Demo admin (local) / Real CMS (live)
│   └── config.yml         # CMS configuration
├── content/               # CMS content files
│   ├── restaurant.md      # Restaurant info
│   ├── contact.md         # Contact details
│   ├── social.md          # Social media links
│   └── menu/              # Individual menu items
│       ├── guacamole.md
│       └── pollo-mole.md
└── images/               # Upload images here
```

## 🎨 Customization Guide

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-red: #C41E3A;        /* Your brand red */
    --primary-orange: #FF6B35;     /* Your accent orange */
    --secondary-green: #2D5016;    /* Your green */
}
```

### Content
- **Restaurant Name**: Search for "El Corazón" and replace
- **Menu Items**: Edit the menu section in `index.html`
- **Images**: Replace placeholder images with your photos
- **Contact Info**: Update address, phone, hours in contact section

### Images
- **Hero Background**: Replace the Unsplash URL in CSS
- **About Images**: Add your restaurant photos
- **Gallery**: Add your food photos
- **Menu Icons**: Replace Font Awesome icons with food photos

## 🔧 Technical Features

- **Responsive Design**: Works on all devices
- **Mobile Menu**: Hamburger menu for mobile
- **Smooth Scrolling**: Navigation with smooth scroll
- **SEO Ready**: Semantic HTML structure
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **Accessibility**: Keyboard navigation and screen reader friendly

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment Options

1. **Netlify** (Recommended for CMS)
2. **GitHub Pages**
3. **Vercel**
4. **Any web hosting service**

## 📞 Support

For customization help or questions, refer to the TODO comments in the code or contact your web developer.