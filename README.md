# Personal Site

A modern, responsive personal website built with Vite, React, and Material UI.

## Features

- 🎨 Beautiful Material UI design
- 📱 Fully responsive layout
- ⚡ Fast development with Vite
- 🎯 Smooth scrolling navigation
- 📧 Contact form
- 🚀 Easy to customize

## Tech Stack

- **Vite** - Build tool and dev server
- **React** - UI library
- **Material UI** - Component library
- **JavaScript** - Programming language

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your site when you push to the `main` branch
   - You can also manually trigger it from the **Actions** tab

3. **Your site will be available at:**
   - `https://[your-username].github.io/personal-site/`

### Manual Deployment

If you prefer to deploy manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update base path (if needed):**
   - If your repository name is different from `personal-site`, update the `base` path in `vite.config.js`
   - For a custom domain, set `base: '/'`

3. **Deploy:**
   ```bash
   npm run deploy
   ```

   This will build your site and push it to the `gh-pages` branch.

### Important Notes

- **Base Path**: The `vite.config.js` is configured with base path `/personal-site/` for GitHub Pages. If your repository has a different name, update it accordingly.
- **Custom Domain**: If you're using a custom domain, change the base path to `/` in `vite.config.js`
- **First Deployment**: After the first deployment, it may take a few minutes for GitHub Pages to become available

## Customization

1. **Update Personal Information**: Edit the components in `src/components/` to add your own information:
   - `Header.jsx` - Update your name
   - `About.jsx` - Update bio, skills, and title
   - `Projects.jsx` - Add your projects
   - `Contact.jsx` - Update contact information and social links
   - `Footer.jsx` - Update social links

2. **Customize Theme**: Edit the theme in `src/App.jsx` to change colors, typography, and other design tokens.

3. **Add Your Image**: Replace the Avatar component in `About.jsx` with your own image.

## Project Structure

```
personal-site/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT