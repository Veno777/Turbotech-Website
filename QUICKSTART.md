# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Images (Optional for Development)
Place images in `/public/images/`:
- `hero.jpg` - For hero section
- `tools.jpg` - For about section  
- `testimonial1.jpg`, `testimonial2.jpg`, `testimonial3.jpg` - For testimonials

**Note:** The site will work without images, but they'll show as broken image placeholders. You can use placeholder services like:
- [Unsplash](https://unsplash.com) - Free photos
- [Placeholder.com](https://placeholder.com) - Quick placeholders

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live.

## ✨ What's Included

- ✅ All 9 sections (Navbar, Hero, Services, Pricing, About, Testimonials, FAQ, Contact, Footer)
- ✅ Responsive design (mobile-first)
- ✅ Contact form API endpoint
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Brand colors configured
- ✅ SEO-friendly structure

## 🎨 Customize

- **Colors**: Edit `tailwind.config.js`
- **Content**: Edit files in `/app/sections/`
- **Contact Info**: Update `Footer.tsx` and `Hero.tsx`

## 📝 Next Steps

1. Add real images
2. Update contact information
3. Set up email notifications (update `/app/api/contact/route.ts`)
4. Deploy to production

Happy coding! 🎉

