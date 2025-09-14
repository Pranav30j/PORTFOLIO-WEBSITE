# Pranav Bopche - Portfolio Website

A modern, visually stunning portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Perfect on mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **SEO Optimized**: Meta tags, Open Graph, and accessibility features
- **Contact Form**: Integrated with Formspree for easy communication

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Form Handling**: Formspree integration

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
└── lib/
```

## 🎨 Sections

1. **Hero Section**: Eye-catching introduction with CTA buttons
2. **About**: Personal information and highlights
3. **Skills**: Interactive skills showcase with filtering
4. **Projects**: Portfolio with modal details
5. **Experience**: Timeline of professional experience
6. **Education**: Academic background and achievements
7. **Achievements**: Recognition and awards
8. **Contact**: Contact form and social links
9. **Footer**: Additional links and scroll-to-top

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pranav-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section
- `src/components/Experience.tsx` - Work experience
- `src/components/Education.tsx` - Education details
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Achievements.tsx` - Awards and recognition

### Styling
- Colors: Update `tailwind.config.js` for custom color schemes
- Fonts: Modify font imports in `src/app/layout.tsx`
- Animations: Adjust Framer Motion animations in components

### Contact Form
Update the Formspree endpoint in `src/components/Contact.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ... rest of the code
})
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Any static hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Pranav Bopche - [@pranavbopche](https://github.com/pranavbopche)

Project Link: [https://github.com/pranavbopche/portfolio](https://github.com/pranavbopche/portfolio)

---

Made with ❤️ by Pranav Bopche


