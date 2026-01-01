# 🚀 Modern Portfolio Website

A beautiful, responsive portfolio website built with modern web technologies.

## 📁 Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **State Management**: TanStack Query
- **Deployment**: Netlify / Vercel / GitHub Pages

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended)
Your site is already configured for Netlify deployment!

1. **Sign up/Login**: [netlify.com](https://netlify.com)
2. **Drag & Drop**: Drag the `dist/public` folder to Netlify dashboard
3. **GitHub Integration**: Connect your GitHub repo for automatic deployments

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. The included GitHub Action will auto-deploy

---

## 🔧 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/portfolio-site.git
cd portfolio-site
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

Your site will be available at `http://localhost:5173`

### 4️⃣ Build for Production
```bash
npm run build
```

### 5️⃣ Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure
```
PortfolioSite/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities
│   │   └── main.tsx       # Entry point
│   └── index.html
├── shared/
│   └── schema.ts          # Validation schemas
├── attached_assets/        # Images and files
├── dist/                  # Build output
└── package.json
```

---

## 🎨 Features

### ✨ Modern Design
- Responsive design for all devices
- Dark/light theme support
- Smooth animations with Framer Motion
- Modern UI components with shadcn/ui

### 📱 Pages
- **Home**: Hero section with animated text
- **About**: Personal information and skills
- **Portfolio**: Project showcase
- **Services**: Offered services
- **Skills**: Technical skills display
- **Contact**: Contact form with validation

### 🔧 Technical Features
- TypeScript for type safety
- Tailwind CSS for styling
- Form validation with Zod
- Responsive navigation
- SEO optimized
- Fast loading with Vite

---

## 🚀 Deployment

### Netlify (Recommended)
1. **Manual Upload**:
   - Build: `npm run build`
   - Upload `dist/public` folder to Netlify

2. **GitHub Integration**:
   - Connect your GitHub repo to Netlify
   - Automatic deployments on push

3. **Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --dir=dist/public --prod
   ```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. The included GitHub Action will auto-deploy

---

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys:
```env
VITE_API_URL=your_api_url
```

### Customization
- **Colors**: Edit `tailwind.config.ts`
- **Content**: Update components in `client/src/pages/`
- **Assets**: Replace files in `attached_assets/`

---

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # TypeScript type checking
```

---

## 🎯 Customization Guide

### 1. Personal Information
Edit these files to update your information:
- `client/src/pages/About.tsx` - Personal details
- `client/src/pages/Contact.tsx` - Contact information
- `client/src/pages/Portfolio.tsx` - Your projects

### 2. Styling
- **Colors**: `tailwind.config.ts`
- **Components**: `client/src/components/`
- **Global styles**: `client/src/index.css`

### 3. Assets
- **Images**: Replace files in `attached_assets/`
- **Icons**: Use Lucide React icons
- **Fonts**: Configure in `tailwind.config.ts`

---

## 🔗 Links

- **Live Demo**: [https://shubham-portfolio12.netlify.app/]
- **GitHub**: [Your repository]
- **Netlify Dashboard**: [https://app.netlify.com/projects/effervescent-klepon-74e8d1/overview](https://app.netlify.com/projects/effervescent-klepon-74e8d1/overview)

---

## 📞 Support

If you need help with deployment or customization:
- Check the `DEPLOYMENT.md` file for detailed instructions
- Review the component structure in `client/src/`
- Refer to the Tailwind CSS documentation

---

## 🎉 Success!

Your portfolio website is now ready to showcase your skills and projects to the world! 

**Next Steps:**
1. Deploy to your preferred platform
2. Add your custom domain
3. Set up analytics
4. Share your portfolio URL

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS* 
