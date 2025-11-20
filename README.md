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