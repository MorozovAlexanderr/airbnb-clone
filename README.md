# 🏠 Airbnb Clone Homepage (UPD)

A stunning, modern homepage for an Airbnb-like website featuring impressive visual effects, smooth animations, and a "WOW" factor that will captivate visitors.

## ✨ Features

### 🎨 Visual Design

- **Hero Section**: Full-screen background with gradient overlays and floating animated elements
- **Modern UI**: Clean, professional design with gradient text and glass-morphism effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Beautiful Typography**: Custom font combinations with gradient text effects

### 🎭 Animations & Effects

- **Framer Motion**: Smooth, performant animations throughout the interface
- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Interactive hover states with scale, shadow, and glow effects
- **Floating Elements**: Subtle background animations that add life to the page
- **Parallax Effects**: Depth and movement in the hero section

### 🔍 Search Functionality

- **Advanced Search Bar**: Location, check-in/out dates, and guest count inputs
- **Interactive States**: Focus animations and hover effects
- **Responsive Design**: Adapts to different screen sizes seamlessly

### 🏡 Featured Listings

- **Property Cards**: Beautiful cards with hover animations and image scaling
- **Rating System**: Star ratings with visual indicators
- **Favorite Buttons**: Interactive heart buttons with smooth animations
- **Grid Layout**: Responsive grid that adapts to screen size

### 📱 User Experience

- **Smooth Scrolling**: Custom scrollbar and smooth page transitions
- **Loading States**: Shimmer effects and loading animations
- **Accessibility**: WCAG compliant with proper ARIA labels and focus states
- **Performance**: Optimized animations running at 60fps

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd airbnb-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage component
├── components/               # Reusable UI components
└── styles/                  # Additional styling utilities
```

## 🎯 Key Components

### Hero Section

- Full-screen background with luxury villa image
- Animated headline with gradient text
- Floating animated elements
- Call-to-action button with hover effects
- Scroll indicator animation

### Search Section

- Floating search bar with shadow effects
- Input fields for location, dates, and guests
- Icon integration with Lucide React
- Focus and hover animations

### Featured Listings

- Responsive grid layout
- Property cards with hover animations
- Image scaling effects on hover
- Rating and favorite functionality
- Smooth entrance animations

### Call-to-Action

- Gradient background section
- Animated text and buttons
- Hover effects and transitions

## 🎨 Custom CSS Classes

The project includes several custom CSS classes for enhanced visual effects:

- `.gradient-text`: Gradient text effects
- `.glass-effect`: Glass-morphism styling
- `.card-hover`: Card hover animations
- `.text-shadow`: Text shadow utilities
- `.animate-float`: Floating animation
- `.glow-blue/purple/white`: Glow effects
- `.hover-lift`: Hover lift animation
- `.shimmer`: Loading shimmer effect

## 🔧 Customization

### Colors

Modify the color scheme by updating the TailwindCSS classes in the components. The current theme uses:

- Primary: Blue (`blue-500`, `blue-600`)
- Secondary: Purple (`purple-600`, `purple-700`)
- Accent: Indigo (`indigo-100`)

### Animations

Adjust animation timing and effects in the Framer Motion components:

- `duration`: Animation length
- `delay`: Staggered animation delays
- `ease`: Animation easing functions

### Images

Replace the Unsplash image URLs with your own images:

- Hero background image
- Featured listing images
- Ensure images are optimized for web

## 📱 Responsive Design

The homepage is fully responsive with breakpoints:

- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column layout
- **Desktop**: `> 1024px` - Three column layout

## 🚀 Performance Features

- **Lazy Loading**: Images load as they come into view
- **Optimized Animations**: 60fps animations with proper easing
- **CSS Transitions**: Hardware-accelerated CSS transitions
- **Minimal JavaScript**: Efficient React rendering

## 🔍 SEO & Accessibility

- **Meta Tags**: Comprehensive OpenGraph and Twitter meta tags
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **ARIA Labels**: Accessible form inputs and interactive elements
- **Alt Text**: Descriptive alt text for all images
- **Focus States**: Visible focus indicators for keyboard navigation

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] More property categories
- [ ] Advanced search filters
- [ ] User authentication
- [ ] Booking system integration
- [ ] Multi-language support
- [ ] PWA capabilities

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using Next.js, TailwindCSS, and Framer Motion**
