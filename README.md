# Mynul Islam - Portfolio Website

A modern, responsive portfolio website showcasing my skills and experience as a Full Stack Developer. Built with Next.js 15, TypeScript, and Tailwind CSS with advanced email functionality and interactive components.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices with mobile-first approach
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Interactive Elements**: Dynamic typing animation, smooth scrolling, interactive skills showcase
- **Dark Mode Ready**: Built with comprehensive dark mode support throughout
- **Email Integration**: Fully functional contact form with Nodemailer email sending
- **Performance Optimized**: Fast loading times with Next.js 15 and Turbopack optimization
- **SEO Friendly**: Proper meta tags, structured data, and accessibility features
- **Professional Certifications**: Real certificate links and achievements showcase
- **Social Media Integration**: Connected profiles (GitHub, LinkedIn, Facebook)

## 🚀 Sections

1. **Hero Section**: Dynamic typing animation showcasing different roles with call-to-action
2. **About Me**: Personal introduction with detailed background and contact information
3. **Skills**: Interactive skills showcase with proficiency levels and technology categories
4. **Experience**: Professional experience timeline with detailed achievements and technologies
5. **Projects**: Featured projects with live demos, GitHub links, and technology stacks
6. **Certifications**: Professional certifications with downloadable certificates and course details
7. **Contact**: Fully functional contact form with email sending and social media links
8. **Stats**: Dynamic statistics and achievements counters
9. **Testimonials**: Client feedback and recommendations (if applicable)

## ✨ Recent Updates & Improvements

### 📧 **Email Functionality** (Latest)
- **Real Contact Form**: Integrated Nodemailer for actual email sending
- **Auto-Reply System**: Professional auto-reply emails to form submitters
- **Notification Emails**: Instant notifications when someone contacts you
- **HTML Email Templates**: Beautiful, responsive email designs with branding
- **Form Validation**: Server-side validation with user-friendly error messages
- **Security Features**: Input sanitization and rate limiting protection

### 🏆 **Certifications Section** (Updated)
- **Real Certificates**: Added actual certification links and details
- **Interactive Cards**: Hover effects and smooth animations
- **Certificate Viewing**: Direct links to download/view certificates
- **Skills Mapping**: Each certification shows relevant technologies learned
- **Achievement Stats**: Updated certification counts and completion rates

### 🔗 **Social Media Integration** (Enhanced)
- **Facebook Integration**: Added Facebook profile link
- **LinkedIn Connection**: Professional networking profile
- **GitHub Portfolio**: Code repository showcase
- **Contact Information**: Multiple ways to connect (email, phone, WhatsApp)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with PostCSS
- **Font**: Geist (Modern, clean typography)
- **Icons**: Heroicons (SVG-based icons)
- **Animations**: Custom CSS animations and transitions

### Backend & Email
- **API Routes**: Next.js API routes for server-side functionality
- **Email Service**: Nodemailer with Gmail integration
- **Environment Config**: Secure environment variable management
- **Validation**: Server-side form validation and sanitization

### Development Tools
- **ESLint**: Code quality and consistency
- **TypeScript**: Static type checking
- **Hot Reload**: Fast development with Turbopack

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/mynul-sakil/portfolio-mynul-3.git
cd portfolio-mynul-3
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration (Required for Email)
1. Copy the environment example file:
```bash
cp .env.example .env.local
```

2. Set up Gmail for contact form (see detailed instructions in `EMAIL_SETUP.md`):
   - Enable 2-Factor Authentication in your Google Account
   - Generate an App Password for Gmail
   - Update `.env.local` with your credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## 🏗️ Project Structure

```
portfolio-mynul-3/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Email API endpoint
│   ├── components/
│   │   ├── About.tsx             # About section
│   │   ├── Certifications.tsx    # Certifications showcase
│   │   ├── ClientOnly.tsx        # Client-side rendering wrapper
│   │   ├── Contact.tsx           # Contact form with email
│   │   ├── Experience.tsx        # Work experience timeline
│   │   ├── FloatingActionButton.tsx
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── LoadingScreen.tsx     # Loading animation
│   │   ├── Navigation.tsx        # Navigation header
│   │   ├── Projects.tsx          # Projects showcase
│   │   ├── Skills.tsx            # Skills and technologies
│   │   ├── Stats.tsx             # Achievement statistics
│   │   └── Testimonials.tsx      # Client testimonials
│   ├── assets/                   # Static assets
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Main page component
├── public/                       # Public static files
│   ├── project-images/           # Project screenshots
│   └── ...                       # Other static assets
├── .env.local                    # Environment variables (not in git)
├── .env.example                  # Environment template
├── EMAIL_SETUP.md                # Email setup instructions
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## 📧 Email Functionality

### Contact Form Features
- **Real Email Sending**: Uses Nodemailer with Gmail integration
- **Auto-Reply System**: Sends professional thank you emails to form submitters
- **Notification Emails**: Instant notifications when someone contacts you
- **Form Validation**: Client and server-side validation with error handling
- **Security**: Input sanitization and spam protection

### Email Templates
- **Professional Design**: HTML templates with responsive design
- **Branding**: Includes your contact information and social media links
- **User Experience**: Clear response time expectations and next steps

### Setup Requirements
1. Gmail account with 2-Factor Authentication enabled
2. Gmail App Password generated (see `EMAIL_SETUP.md` for detailed instructions)
3. Environment variables configured in `.env.local`

For complete setup instructions, see the `EMAIL_SETUP.md` file.

## 🎨 Customization

### Personal Information
Update the following files to customize content:
- **Personal details**: `components/About.tsx` and `components/Contact.tsx`
- **Skills & technologies**: `components/Skills.tsx`
- **Work experience**: `components/Experience.tsx`
- **Projects portfolio**: `components/Projects.tsx`
- **Certifications**: `components/Certifications.tsx`
- **Email templates**: `app/api/contact/route.ts`

### Design & Styling
- **Colors**: Modify Tailwind classes throughout components
- **Animations**: Custom animations in `globals.css`
- **Typography**: Update font settings in `layout.tsx`
- **Layout**: Responsive breakpoints and spacing in component files

### Branding
- **Logo/Images**: Replace images in `public/` directory
- **Social Media**: Update links in `components/Contact.tsx`
- **Contact Information**: Update across multiple components
- **Meta Tags**: Update SEO information in `layout.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Environment Variables Setup (Important!)
Before deploying, make sure to set up environment variables on your hosting platform:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard (Settings > Environment Variables)
4. Deploy automatically on push

### Other Platforms (Netlify, Railway, etc.)
1. Build the project:
```bash
npm run build
```

2. Add environment variables to your hosting platform
3. Start the production server:
```bash
npm start
```

### Important Notes
- ⚠️ **Never commit `.env.local`** - it's already in `.gitignore`
- ✅ **Test email functionality** after deployment
- 🔒 **Use App Passwords** for Gmail, not regular passwords
- 📧 **Check spam folders** when testing email functionality

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with optimizations
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 📊 Performance Features

- **Next.js 15**: Latest framework with improved performance
- **Turbopack**: Ultra-fast bundler for development
- **Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **SEO Optimization**: Meta tags, structured data, and accessibility
- **Responsive Images**: Adaptive images for different screen sizes

## 🔒 Security Features

- **Input Validation**: Server-side form validation and sanitization
- **Environment Variables**: Secure credential management
- **Rate Limiting**: Built-in protection against spam and abuse
- **HTTPS Ready**: Production deployment with SSL/TLS
- **CSP Headers**: Content Security Policy for enhanced security

## 📞 Contact & Social Media

- **Email**: mynul.sakil@gmail.com
- **Phone/WhatsApp**: (+880) 1581477504
- **Location**: Dhaka, Bangladesh
- **GitHub**: [github.com/mynul-sakil](https://github.com/mynul-sakil)
- **LinkedIn**: [linkedin.com/in/mynul-sakil](https://linkedin.com/in/mynul-sakil)
- **Facebook**: [facebook.com/sakil470004](https://www.facebook.com/sakil470004)

## 📝 Changelog

### Version 3.0 (Latest)
- ✅ **Added real email functionality** with Nodemailer integration
- ✅ **Professional email templates** for notifications and auto-replies
- ✅ **Updated certifications section** with real certificate links
- ✅ **Enhanced social media integration** (added Facebook)
- ✅ **Improved form validation** with server-side security
- ✅ **Added comprehensive documentation** (EMAIL_SETUP.md)
- ✅ **Enhanced project structure** with API routes and better organization
- ✅ **Updated dependencies** to latest versions (Next.js 15, Tailwind CSS v4)

### Key Improvements
- � **Contact Form**: Now sends real emails instead of simulation
- 🏆 **Certifications**: Interactive cards with downloadable certificates
- 🔒 **Security**: Added input validation and spam protection
- 📱 **Responsive**: Enhanced mobile experience across all sections
- 🎨 **UI/UX**: Improved animations and user feedback

## �📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Email powered by [Nodemailer](https://nodemailer.com/)

---

**Made with ❤️ by Mynul Islam**

*A modern, responsive portfolio showcasing full-stack development skills with real-world functionality and professional design.*
