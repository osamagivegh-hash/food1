# Deployment Guide for Vercel

This guide will help you deploy your Classic American Restaurant website to Vercel.

## Prerequisites

1. **GitHub Account**: You'll need a GitHub account to connect your repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Project Repository**: Your project should be pushed to GitHub

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Classic American Restaurant"
   git branch -M main
   git remote add origin https://github.com/yourusername/classic-american-restaurant.git
   git push -u origin main
   ```

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**:
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a React app

3. **Configure Build Settings**:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Environment Variables** (Optional):
   - Add any environment variables from `env.example`
   - Click "Add" for each variable

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm build settings
   - Deploy

### 3. Custom Domain (Optional)

1. **Add Domain**:
   - Go to your project dashboard
   - Click "Domains" tab
   - Add your custom domain

2. **Configure DNS**:
   - Follow Vercel's DNS configuration instructions
   - Update your domain's nameservers or DNS records

## Post-Deployment Checklist

### ✅ Update Configuration Files

1. **Update URLs**:
   - Replace `https://your-domain.vercel.app` in:
     - `public/sitemap.xml`
     - `public/index.html` (Open Graph meta tags)
     - `vercel.json`

2. **Add Real Images**:
   - Replace placeholder images with actual restaurant photos
   - Optimize images for web (use tools like TinyPNG)
   - Add proper alt text for accessibility

3. **Update Content**:
   - Replace placeholder text with actual restaurant information
   - Update contact details, hours, and menu items
   - Add real social media links

### ✅ SEO Optimization

1. **Google Analytics**:
   - Add your Google Analytics ID to environment variables
   - Update tracking code in components if needed

2. **Google My Business**:
   - Claim and optimize your Google My Business listing
   - Add your website URL

3. **Local SEO**:
   - Submit sitemap to Google Search Console
   - Add structured data for restaurant information

### ✅ Performance Optimization

1. **Image Optimization**:
   - Use WebP format for images
   - Implement lazy loading
   - Add proper image dimensions

2. **Caching**:
   - Vercel automatically handles caching
   - Static assets are cached for 1 year

## Environment Variables

Create a `.env.local` file with your actual values:

```env
REACT_APP_RESTAURANT_NAME=Your Restaurant Name
REACT_APP_RESTAURANT_PHONE=(555) 123-4567
REACT_APP_RESTAURANT_EMAIL=info@yourrestaurant.com
REACT_APP_RESTAURANT_ADDRESS=Your Address
REACT_APP_GOOGLE_MAPS_URL=https://maps.google.com/?q=Your+Address
```

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check that all dependencies are in `package.json`
   - Ensure no TypeScript errors
   - Verify all imports are correct

2. **404 Errors**:
   - Check `vercel.json` routing configuration
   - Ensure all routes redirect to `index.html`

3. **Environment Variables**:
   - Make sure all variables start with `REACT_APP_`
   - Check variable names match exactly

### Support:

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **React Deployment**: [create-react-app.dev/docs/deployment](https://create-react-app.dev/docs/deployment)

## Performance Monitoring

After deployment, monitor your site's performance:

1. **Vercel Analytics**: Built-in performance monitoring
2. **Google PageSpeed Insights**: Test your site's speed
3. **Lighthouse**: Audit accessibility, SEO, and performance

Your restaurant website is now ready to serve customers online! 🎉
