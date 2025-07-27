# Madad FinTech - Invoice Discounting Platform

A modern, responsive website for Madad FinTech, Qatar's first invoice discounting platform for MSMEs, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive SEO with structured data and meta tags
- **Analytics Integration**: Google Analytics
- **Performance Optimized**: Fast loading with Next.js optimizations
- **Type Safe**: Full TypeScript implementation
- **Accessible**: WCAG compliant design

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **Analytics**: Google Analytics
- **Email Service**: EmailJS
- **Fonts**: Google Fonts (Nunito)
- **Deployment**: Vercel/Netlify ready

## 🏗️ **Project Structure**

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── summit/            # Summit page
├── components/             # Reusable React components
│   ├── home/              # Home page specific components
│   ├── about/             # About page specific components
│   ├── contact/           # Contact page specific components
│   └── shared/            # Shared components (Header, Footer, etc.)
├── hooks/                  # Custom React hooks
├── lib/                    # External library configurations
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions and constants
└── styles/                 # Global styles and Tailwind config
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/madad-fintech.git
   cd madad-fintech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # EmailJS Configuration
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id

   # Google Analytics
   NEXT_PUBLIC_GA_TRACKING_ID=your_ga_tracking_id
   GA_API_SECRET=your_ga_api_secret

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://madadfintech.com
   NEXT_PUBLIC_WAITLIST_FORM_URL=https://forms.gle/your_form_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── summit/            # Summit page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt generator
│   └── sitemap.ts         # Sitemap generator
├── components/            # Reusable React components
├── hooks/                 # Custom React hooks
├── lib/                   # Library configurations
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🎨 Key Components

- **Header**: Navigation with mobile menu and sandbox banner
- **Footer**: Company information and social links
- **FeatureCard**: Showcase platform features
- **ProcessStep**: Interactive process visualization
- **Accordion**: FAQ section with analytics tracking
- **EmailForm**: Waitlist signup with validation
- **ContactSection**: Contact information display

## 📱 Pages

1. **Home** (`/`): Main landing page with features and process
2. **About** (`/about`): Company information and team
3. **Summit** (`/summit`): Web Summit 2025 showcase

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

## 📊 Analytics & Tracking

The application includes comprehensive analytics tracking:

- **Page Views**: Automatic tracking on route changes
- **User Interactions**: Button clicks, form submissions
- **Custom Events**: Waitlist signups, external link clicks
- **Performance**: Core Web Vitals and user engagement

## 🔒 Environment Variables

All sensitive configuration is handled through environment variables. See `.env.local` for required variables.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by Madad Financial Technologies.

## 📞 Support

For support and questions:
- Email: contactus@madadfintech.com
- Phone: +974 3039 0833
- Address: 201-42, Kate Business Center, Al Bustan Building, Al Sadd, Doha, Qatar

## 🔄 Migration Notes

This project was migrated from a static HTML/CSS/JS website to a modern Next.js application with:

- ✅ Full TypeScript implementation
- ✅ Component-based architecture
- ✅ Modern build pipeline
- ✅ Enhanced SEO and performance
- ✅ Comprehensive analytics
- ✅ Responsive design improvements
- ✅ Accessibility enhancements

---

Built with ❤️ by the Madad FinTech team
