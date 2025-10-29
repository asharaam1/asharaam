# Modern React Portfolio Website

![Portfolio Preview](https://via.placeholder.com/1200x630/3B82F6/FFFFFF?text=Modern+React+Portfolio)

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases your skills, projects, and contact information with a clean, professional design and smooth animations.

## ✨ Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and effects
- **Dynamic GitHub Projects**: Automatically fetches and displays your GitHub repositories
- **Interactive Map**: Shows your location using React Leaflet
- **Contact Form**: Functional contact form with validation
- **Availability Status**: Display your current hiring availability
- **ChatBot**: Interactive chatbot for visitors

## 🛠️ Technologies Used

### Frontend
- React 19
- React Router v7
- Tailwind CSS
- Framer Motion
- Heroicons
- Headless UI

### APIs & Services
- GitHub API (for projects)
- Leaflet (for maps)
- EmailJS (for contact form)

### Development Tools
- Vite/React Scripts
- PostCSS
- Autoprefixer

## 📋 Pages

- **Home**: Introduction with hero section and tech stack preview
- **About**: Personal information, bio, and downloadable resume
- **Skills**: Categorized skills with proficiency levels and animations
- **Projects**: GitHub projects with descriptions and links
- **Contact**: Contact form, location map, working hours, and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create required directories and files
   ```bash
   mkdir -p public/assets/images/projects
   ```

4. Add your images to the following paths:
   - `public/assets/images/profile.jpg` (for profile picture)
   - `public/assets/images/about-me.jpg` (for about page)
   - `public/assets/images/project-placeholder.jpg` (for projects)

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## ⚙️ Configuration

### Personalization

1. Update personal information in:
   - `src/pages/Home.jsx`
   - `src/pages/About.jsx`
   - `src/pages/Contact.jsx`
   - `src/components/Footer.jsx`

2. Update GitHub username in `src/pages/Projects.jsx`

3. Customize skills in `src/pages/Skills.jsx`

4. Modify theme colors in `tailwind.config.js`

### Contact Form

The contact form uses EmailJS. To make it functional:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the configuration in `src/utils/emailService.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktops
- Large screens

## 🎨 Customization

### Themes

The site includes both light and dark modes that can be toggled by the user. Theme preferences are saved in local storage.

### Colors

The primary color scheme can be customized in `tailwind.config.js`:

```js
colors: {
  primary: '#3B82F6',    // Sky Blue
  secondary: '#9333EA',  // Purple
  darkBg: '#0F172A',     // Very Dark Navy
  lightBg: '#F9FAFB',    // Lightest Gray
  darkText: '#E2E8F0',   // Slate-200
},
```

## 🔍 SEO

To improve SEO for your portfolio:

1. Update the metadata in `public/index.html`
2. Add a sitemap.xml file
3. Include relevant meta tags for social sharing

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

Made with ❤️ by [Your Name](https://github.com/yourusername)

        