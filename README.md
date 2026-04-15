# Prototype Glass Windscreen Website

A modern, responsive website for Prototype Glass Windscreen - Professional auto glass services in Randburg, South Africa.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design inspired by industry best practices
- **Service Showcase**: Display windscreen replacement and repair services
- **Quote Request Form**: Easy-to-use form for customers to request quotes
- **Brand Coverage**: Showcasing all major vehicle brands serviced
- **Google Reviews Integration**: Display 4.5-star rating with 4,517 reviews
- **Interactive Elements**: Smooth scrolling, animations, and hover effects
- **SEO Optimized**: Semantic HTML with proper meta tags

## 📁 Project Structure

```
Prototype glass company/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Images folder
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── brands/             # Brand logos
│   └── services/           # Service images
├── php/                    # PHP backend files (for Laravel integration)
└── README.md               # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Deep blue (#1a4d7a) - Trust and professionalism
- **Accent**: Orange (#ff6b35) - Energy and action
- **Background**: Light gray (#f8f9fa) - Clean and modern
- **Text**: Charcoal (#2c3e50) - Readability

### Key Sections
1. **Navigation Bar**: Sticky navigation with phone number and CTA button
2. **Hero Section**: Eye-catching banner with rotating trust badges
3. **Service Highlights**: Icon-based cards showcasing key services
4. **4-Step Process**: Visual guide showing how the service works
5. **Services Section**: Tabbed interface for different glass types
6. **Brands Section**: Showcase of vehicle brands serviced
7. **Quote Form**: Lead generation form with validation
8. **Contact Section**: Location info with Google Maps integration
9. **Footer**: Complete site navigation and contact details

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid
- **JavaScript (ES6)**: Interactive functionality
- **Google Fonts**: Poppins font family
- **SVG Icons**: Scalable vector graphics for icons

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Getting Started

### Option 1: Static HTML (Current)
1. Open `index.html` in a web browser
2. All functionality works client-side

### Option 2: Local Development Server
```bash
# Using Python
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (with http-server)
npx http-server
```

### Option 3: Laravel Integration (Future)
```bash
# Install Laravel
composer create-project laravel/laravel prototype-glass

# Copy files to Laravel public directory
# Set up routes in routes/web.php
# Create controllers for form handling
```

## 📝 Todo List

### Immediate Tasks
- [ ] Add actual logo image
- [ ] Add high-quality hero background image
- [ ] Add brand logos (Toyota, VW, BMW, Mercedes, etc.)
- [ ] Add service images
- [ ] Update Google Maps embed with actual location coordinates

### Backend Integration (Laravel)
- [ ] Set up Laravel project
- [ ] Create database schema for quotes
- [ ] Build API endpoint for quote submissions
- [ ] Email notification system
- [ ] Admin panel for managing quotes
- [ ] Product catalog management
- [ ] Pricing system

### Additional Features
- [ ] Online booking system
- [ ] Before/after gallery
- [ ] Customer testimonials section
- [ ] Blog section for SEO
- [ ] Live chat integration
- [ ] Payment gateway integration
- [ ] Social media feed integration

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #1a4d7a;
    --accent-color: #ff6b35;
    /* etc. */
}
```

### Adding New Services
Update the `servicesData` object in `js/main.js`:
```javascript
const servicesData = {
    serviceName: [
        {
            title: 'Service Title',
            description: 'Service description',
            features: ['Feature 1', 'Feature 2'],
            image: 'image.jpg'
        }
    ]
};
```

## 📞 Contact Information

**Prototype Glass Windscreen**
- Address: 373 Jan Smuts Ave, Craighall Park, Randburg, 2196
- Phone: 073 225 4809
- Hours: Mon-Fri 8:00am-5:00pm, Sat 8:00am-1:00pm

## 📄 License

Copyright © 2026 Prototype Glass Windscreen. All rights reserved.

## 🤝 Contributing

This is a client project. For changes or suggestions, please contact the development team.

## 📈 Performance Optimization

- Lazy loading for images
- Minified CSS and JavaScript (in production)
- Optimized images
- Intersection Observer for animations
- Debounced scroll events

## 🔐 Security Notes

When integrating with Laravel:
- Use CSRF protection for all forms
- Validate and sanitize all user inputs
- Use environment variables for sensitive data
- Implement rate limiting for form submissions
- Use HTTPS in production

## 🌟 Credits

Design inspired by Glass on Demand (glassondemand.co.za)
Developed for Prototype Glass Windscreen
