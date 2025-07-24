# Stephen Tyrrell Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a professional design.

## Features

- 🎨 Modern, gradient-based design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🎯 Interactive elements and hover effects
- 📧 Contact form with validation
- 🚀 Optimized for fast loading
- ♿ Accessible design principles

## Tech Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter)

## Project Structure

```
stephentyrrell-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

For development with live reload, you can use:
```bash
# Using Python (if you have Python installed)
python -m http.server 8000

# Using Node.js (if you have Node.js installed)
npx serve .

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

## Deployment Options

### 1. Netlify (Recommended - Free)

1. Create a free account at [netlify.com](https://netlify.com)
2. Drag and drop the entire folder to Netlify
3. Your site will be deployed instantly with a random URL
4. To use your custom domain (stephentyrrell.ie):
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Add "stephentyrrell.ie"
   - Follow the DNS configuration instructions

### 2. Vercel (Free)

1. Create a free account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory
4. Follow the prompts
5. Configure custom domain in the Vercel dashboard

### 3. GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select source branch (usually main/master)
5. Your site will be available at `username.github.io/repository-name`

### 4. Firebase Hosting (Free tier available)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Run `firebase login`
3. Run `firebase init hosting`
4. Select your project directory
5. Run `firebase deploy`

## Custom Domain Setup

For stephentyrrell.ie domain configuration:

### DNS Records (for most hosting providers)
```
Type: CNAME
Name: www
Value: your-site-url (e.g., amazing-site-123.netlify.app)

Type: A (if supported) or CNAME
Name: @
Value: your-hosting-provider-ip or redirect to www
```

### Netlify DNS Configuration
1. In Netlify dashboard, go to Domain Settings
2. Add both `stephentyrrell.ie` and `www.stephentyrrell.ie`
3. Follow the nameserver instructions provided
4. SSL certificate will be automatically generated

## Customization

### Updating Content
- Edit the HTML content in `index.html`
- Update social media links in the contact section
- Replace placeholder project information with your actual projects
- Update the email address and contact information

### Styling Changes
- Modify colors by changing the CSS custom properties
- Update fonts by changing the Google Fonts import
- Adjust animations by modifying CSS transitions and keyframes

### Adding New Sections
- Add new HTML sections in `index.html`
- Create corresponding CSS styles in `styles.css`
- Add navigation links if needed

## Performance Optimizations

- All external resources are loaded from CDNs
- CSS and JS are minified in production builds
- Images are optimized for web
- Lazy loading implemented for better performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal website, but feel free to use it as a template for your own site!

## License

MIT License - feel free to use this code for your own projects.

---

Built with ❤️ by Stephen Tyrrell
