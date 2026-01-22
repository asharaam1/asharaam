# Modern React Portfolio (Vite + React 19)

![Portfolio Preview](https://via.placeholder.com/1200x630/3B82F6/FFFFFF?text=Vite+React+Portfolio)

A lightning-fast portfolio built with **Vite 5** and **React 19** featuring modern animations, responsive design, and GitHub integration.

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/asharaam1/asharaam.git
cd asharaam
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your API keys

# Run dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Tech Stack

- **Vite 5** - Lightning-fast build tool
- **React 19** - Latest React features
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **GitHub API** - Dynamic project fetching
- **EmailJS** - Contact form functionality

## 🛠️ Environment Variables

```env
VITE_GOOGLE_AI_API_KEY=your_google_ai_key
EMAILJS_PUBLIC_KEY=your_key
EMAILJS_SERVICE_ID=your_service
EMAILJS_TEMPLATE_ID=your_template
```

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components (Home, About, etc.)
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── styles/        # Global styles
```

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy to **Vercel**, **Netlify**, or **GitHub Pages**.

Made with ❤️ using Vite + React

