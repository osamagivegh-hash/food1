# Classic American Restaurant Landing Page

A modern and elegant landing page for a classic American-style restaurant built with React and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, elegant design with smooth animations
- **Interactive Components**: 
  - Animated hero slider with auto-rotation
  - Interactive menu section with category filtering
  - Reservation booking form with validation
  - Newsletter subscription
- **Accessibility**: Built with accessibility standards in mind
- **Performance**: Optimized for fast loading and smooth interactions

## Sections

1. **Header**: Fixed navigation with smooth scroll behavior
2. **Hero Slider**: Full-width animated slider showcasing restaurant highlights
3. **Menu**: Categorized food items with high-quality images
4. **About**: Restaurant story, chef profiles, and achievements
5. **Booking**: Reservation form with contact information
6. **Footer**: Contact details, social links, and newsletter signup

## Technology Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library for UI elements

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd classic-american-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/classic-american-restaurant.git
   git push -u origin main
   ```

2. **Deploy via Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect and deploy your React app

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## Customization

### Colors
The color palette can be customized in `tailwind.config.js`:
- `warm-red`: Primary brand color
- `deep-red`: Darker shade for hover states
- `gold`: Accent color
- `cream`: Light background
- `charcoal`: Dark text
- `warm-gray`: Secondary text

### Images
Replace placeholder images in the components with your own high-quality restaurant photos:
- Hero slider images
- Menu item photos
- Chef profile pictures
- Restaurant interior shots

### Content
Update the following in the components:
- Restaurant name and branding
- Menu items and descriptions
- Contact information
- Social media links
- About section content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team.
