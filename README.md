# Audiocoustics Website

Modern, professional website for Audiocoustics - Cape Town's premier mobile audio and video installation service.

![Status](https://img.shields.io/badge/status-ready-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Overview

Professional website redesign featuring:
- **Modern, clean design** with professional blue color palette
- **Mobile-first responsive** design for all devices
- **Fast loading** times with optimized assets
- **WhatsApp integration** for instant customer contact
- **Interactive service cards** with category filtering
- **Animated speaker component** for visual appeal
- **SEO optimized** with proper meta tags and semantic HTML

## 🚀 Features

### Design
- Professional blue color scheme (#1565C0 primary)
- Clean typography using Inter font family
- Smooth animations and transitions
- Responsive grid layouts
- Accessibility-friendly contrast ratios

### Functionality
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced navigation experience
- **Service Filtering**: Filter by Automotive, Residential, or Commercial
- **Contact Form**: Integrated with WhatsApp for instant communication
- **Floating WhatsApp Button**: Always accessible contact option
- **Scroll Animations**: Elements animate into view as you scroll

### Performance
- No external dependencies (pure vanilla JavaScript)
- Optimized CSS with CSS variables
- Lazy loading ready
- Print-friendly styles

## 📁 Project Structure

```
audiocoustics/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # All styles with CSS variables
├── js/
│   └── main.js          # Interactive functionality
├── images/              # Images and assets (add your images here)
└── README.md            # This file
```

## 🛠️ Setup

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd audiocoustics
   ```

2. **Open in a browser**

   Simply open `index.html` in your web browser:
   ```bash
   # Using Python's built-in server (recommended)
   python3 -m http.server 8000

   # Or using Node.js
   npx serve

   # Or just open the file
   open index.html  # macOS
   start index.html # Windows
   ```

3. **View the site**

   Navigate to `http://localhost:8000` (if using a server) or just open the HTML file directly.

### Adding Images

Replace placeholder images in the `/images/` directory:

- `favicon.ico` - Browser tab icon
- Add service photos
- Add installation photos
- Add before/after photos
- Add team photos (optional)

### Customization

#### Update Contact Information

Edit these values in `index.html`:
- WhatsApp number: `https://wa.me/27815987961`
- Phone: `081 598 7961`
- Email: `info@audiocoustics.co.za`

#### Modify Services

Edit the `services` array in `js/main.js` to add, remove, or modify services.

#### Change Colors

Update CSS variables in `css/styles.css`:
```css
:root {
    --primary-blue: #1565C0;
    --secondary-blue: #2196F3;
    /* ... other colors */
}
```

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. **Sign up at [Netlify](https://www.netlify.com)**

2. **Deploy via Git**
   ```bash
   # Push to your repository
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

3. **Connect repository in Netlify**
   - Click "New site from Git"
   - Choose your repository
   - Deploy!

4. **Or deploy via Drag & Drop**
   - Drag the entire project folder to Netlify
   - Site goes live instantly

**Custom domain**: Configure in Netlify dashboard under Domain Settings.

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** to complete deployment

### Option 3: GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch (main) and root directory
   - Save

3. **Access site** at `https://yourusername.github.io/audiocoustics/`

### Option 4: Traditional Hosting (cPanel, etc.)

1. **Connect via FTP/SFTP**
2. **Upload all files** to your web root directory (usually `public_html/`)
3. **Ensure file permissions** are correct (644 for files, 755 for directories)
4. **Access via your domain**

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1565C0` | Main brand color, buttons, links |
| Secondary Blue | `#2196F3` | Accents, hover states |
| Dark Blue | `#0D47A1` | Headings, emphasis |
| WhatsApp Green | `#25D366` | WhatsApp buttons |
| Gray Scale | `#F8F9FA` - `#212529` | Text, backgrounds |

### Typography

- **Font Family**: Inter (via Google Fonts)
- **Headings**: 800 weight, blue gradient
- **Body**: 400 weight, gray-800
- **Line Height**: 1.6 for body text, 1.1 for headings

### Spacing

Using 8px base unit:
- XS: 8px
- SM: 16px
- MD: 24px
- LG: 32px
- XL: 48px
- 2XL: 64px
- 3XL: 96px

## 📝 Content Management

### Updating Services

To add or modify services, edit the `services` array in `js/main.js`:

```javascript
{
    id: 21,
    title: 'Your New Service',
    description: 'Detailed description of the service',
    category: 'automotive', // or 'residential' or 'commercial'
    icon: 'SVG_PATH_HERE' // Material Design icon path
}
```

### Adding Testimonials

The HTML structure supports testimonials. Add them in the About section or create a new section.

### Updating Service Areas

Edit the service areas section in `index.html` to add or remove Cape Town areas served.

## 🔧 Troubleshooting

### Fonts not loading
- Check internet connection (Google Fonts requires internet)
- Verify the Google Fonts link in `index.html`

### WhatsApp link not working
- Ensure phone number format: `27815987961` (country code + number, no spaces)
- Test on mobile device for best results

### Mobile menu not working
- Check JavaScript console for errors
- Ensure `js/main.js` is loading correctly

### Form not submitting
- Form currently redirects to WhatsApp
- For email submission, you'll need to add a backend API

## 📈 SEO Optimization

### Included
- ✅ Semantic HTML5 elements
- ✅ Meta descriptions and keywords
- ✅ Proper heading hierarchy
- ✅ Alt text for images (add to your images)
- ✅ Mobile-friendly viewport settings
- ✅ Fast loading times

### Recommended Additions
- [ ] Add `robots.txt`
- [ ] Add `sitemap.xml`
- [ ] Set up Google Analytics
- [ ] Register with Google Search Console
- [ ] Create Google My Business listing
- [ ] Add Open Graph tags for social sharing
- [ ] Add Schema.org structured data

## 🔐 Security

- ✅ No sensitive data in frontend code
- ✅ No inline JavaScript (using external file)
- ✅ HTTPS ready
- ⚠️ Form submissions go via WhatsApp (no backend required)
- 💡 For production: Consider adding a backend API for form submissions

## 📞 Contact Information

**Audiocoustics**
- **Phone**: 081 598 7961
- **WhatsApp**: +27 81 598 7961
- **Email**: info@audiocoustics.co.za
- **Website**: www.audiocoustics.co.za
- **Location**: Cape Town, South Africa

## 📄 License

Copyright © 2024 Audiocoustics. All rights reserved.

## 🙏 Credits

- **Design & Development**: Custom built
- **Icons**: Material Design Icons (embedded as SVG paths)
- **Fonts**: Inter by Rasmus Andersson (Google Fonts)
- **Colors**: Professional blue palette inspired by trust and technology

---

**Built with ❤️ for Audiocoustics**

For support or questions, contact via WhatsApp or email above.
