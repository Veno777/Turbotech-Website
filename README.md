# TurboTech Cleaners - Next.js Website

A modern, responsive website for TurboTech Cleaners - Premium Condo Cleaning Services across the GTA.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 📁 Project Structure

```
/app
  /components
    - Navbar.tsx
    - Footer.tsx
    - Button.tsx
  /sections
    - Hero.tsx
    - Services.tsx
    - Pricing.tsx
    - About.tsx
    - Testimonials.tsx
    - FAQ.tsx
    - Contact.tsx
  /api
    /contact
      - route.ts
  - layout.tsx
  - page.tsx
  - globals.css
/public
  /images
    - hero.jpg
    - service1.jpg
    - service2.jpg
    - service3.jpg
    - tools.jpg
    - testimonial1.jpg
    - testimonial2.jpg
    - testimonial3.jpg
```

## 🎨 Brand Colors

- **Primary Silver**: `#C0C0C0`
- **Primary Blue**: `#1E3A8A`
- **Secondary White**: `#FFFFFF`

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add placeholder images:**
   Place the following images in `/public/images/`:
   - `hero.jpg` - Clean condo interior (recommended: 1920x1080px)
   - `service1.jpg`, `service2.jpg`, `service3.jpg` - Service images
   - `tools.jpg` - Cleaning tools or cleaner working
   - `testimonial1.jpg`, `testimonial2.jpg`, `testimonial3.jpg` - Testimonial photos

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Sticky navigation bar
- ✅ Smooth scrolling sections
- ✅ Interactive FAQ accordion
- ✅ Contact form with API integration
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ SEO-friendly structure

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TurboTech Cleaners website"
   git branch -M main
   git remote add origin https://github.com/yourusername/turbotech-cleaners.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in minutes!

### Alternative: Deploy to Other Platforms

The project can also be deployed to:
- **Netlify**: Connect your GitHub repo and deploy
- **AWS Amplify**: Connect repository and deploy
- **Railway**: Connect GitHub and deploy

## 🔧 Configuration

### Environment Variables

Currently, no environment variables are required. For production, you may want to add:
- Email service API keys (for contact form notifications)
- Database connection strings (if storing form submissions)

### Customization

- **Colors**: Edit `tailwind.config.js` to change brand colors
- **Content**: Update section components in `/app/sections/`
- **Contact Info**: Update phone number and email in `Footer.tsx` and `Hero.tsx`

## 📧 Contact Form

The contact form currently logs submissions to the console. To enable email notifications:

1. Install an email service (e.g., Resend, SendGrid, Nodemailer)
2. Update `/app/api/contact/route.ts` to send emails
3. Add API keys to environment variables

## 🎯 Next Steps

- [ ] Add real images to `/public/images/`
- [ ] Update contact information (phone, email)
- [ ] Set up email notifications for contact form
- [ ] Add Google Analytics (optional)
- [ ] Set up domain name
- [ ] Add meta tags for social sharing
- [ ] Implement booking calendar integration (optional)

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For questions or support, contact: info@turbotechcleaners.com

---

Built with ❤️ for TurboTech Cleaners

