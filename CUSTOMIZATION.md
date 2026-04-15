# Easy Customization Guide

This guide shows you exactly where to make common changes.

## 🎨 Changing Colors

**File**: `css/styles.css` (lines 16-20)

```css
:root {
    /* Change these values to your brand colors */
    --primary-color: #1a4d7a;      /* Main blue color */
    --accent-color: #ff6b35;       /* Orange/call-to-action color */
    --text-dark: #2c3e50;          /* Dark text color */
}
```

**Preview your colors:**
- Primary color: Used in navbar, buttons, headings
- Accent color: Used in CTAs, hover effects, highlights

## 📞 Changing Contact Information

**File**: `index.html`

### Phone Number (Multiple locations):
Search for: `073 225 4809` and replace all instances

**Line 21**: Navigation bar
```html
<a href="tel:0732254809" class="phone-btn">073 225 4809</a>
```

**Line 449**: Contact section
```html
<p><a href="tel:0732254809">073 225 4809</a></p>
```

### Address:
**Lines 443-445**: Contact section
```html
<p>373 Jan Smuts Ave<br>
   Craighall Park, Randburg<br>
   2196</p>
```

### Email:
**Line 511**: Footer
```html
<li><a href="mailto:info@prototypeglass.co.za">info@prototypeglass.co.za</a></li>
```

### Business Hours:
**Lines 457-459**: Contact section
```html
<p>Mon - Fri: 8:00am - 5:00pm<br>
   Saturday: 8:00am - 1:00pm<br>
   Sunday: Closed</p>
```

## 🏢 Changing Business Name

Search for: `Prototype Glass Windscreen` and replace

**Key locations:**
- Line 7: Page title
- Line 19: Logo alt text
- Line 486: Footer
- Line 518: Copyright

## 🗺️ Adding Your Google Maps Location

**File**: `index.html` (Line 473-481)

1. Go to Google Maps
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in the HTML

```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## ⭐ Changing Star Rating

**File**: `index.html` (Line 466)

```html
<span class="rating-number">4.5</span>  <!-- Change this number -->
```

**Line 467:**
```html
<p class="rating-text">Based on 4,517 Google reviews</p>  <!-- Change count -->
```

## 📝 Changing Hero Section

**File**: `index.html` (Lines 40-41)

```html
<h1 class="hero-title">Professional Windscreen Replacement in Randburg</h1>
<p class="hero-subtitle">Trusted Auto Glass Specialists Since 1995</p>
```

Change to your messaging.

## 🏷️ Adding/Removing Services

**File**: `js/main.js` (Lines 66-98)

Add new services to the `servicesData` object:

```javascript
const servicesData = {
    windscreens: [
        {
            title: 'Your Service Title',
            description: 'Your service description',
            features: ['Feature 1', 'Feature 2', 'Feature 3'],
            image: 'your-image.jpg'
        }
        // Add more services here
    ]
};
```

## 🚗 Adding/Removing Vehicle Brands

**File**: `index.html` (Lines 318-369)

Copy this template for each brand:

```html
<div class="brand-card">
    <div class="brand-image">
        <img src="images/brands/BRANDNAME.png" alt="Brand Name">
        <div class="brand-placeholder" style="display:none;">BRAND</div>
    </div>
    <h3>Brand Name</h3>
    <p>Model 1, Model 2, Model 3</p>
    <a href="#quote" class="btn-outline">Get Quote</a>
</div>
```

## 📱 Social Media Links

**File**: `index.html` (Lines 493-505)

```html
<a href="YOUR_FACEBOOK_URL" aria-label="Facebook">
    <!-- Facebook SVG icon -->
</a>
<a href="YOUR_INSTAGRAM_URL" aria-label="Instagram">
    <!-- Instagram SVG icon -->
</a>
```

Replace `#` with your actual social media URLs.

## 🖼️ Adding Your Logo

1. Save your logo as `logo.png`
2. Place it in the `images/` folder
3. Recommended size: 200x60 pixels
4. Format: PNG with transparent background

The HTML already references it:
```html
<img src="images/logo.png" alt="Prototype Glass Windscreen">
```

## 🎨 Adding Background Image

1. Save your image as `hero-bg.jpg`
2. Place it in the `images/` folder
3. Recommended size: 1920x1080 pixels
4. The CSS already references it

## 📋 Customizing the Quote Form

**File**: `index.html` (Lines 387-425)

### Adding a New Field:

```html
<div class="form-group">
    <label for="fieldname">Field Label *</label>
    <input type="text" id="fieldname" name="fieldname" required>
</div>
```

### Changing Dropdown Options:

**Lines 408-415**: Glass Type dropdown
```html
<select id="glassType" name="glassType" required>
    <option value="">Select glass type</option>
    <option value="windscreen">Windscreen</option>
    <!-- Add your options here -->
</select>
```

## 🎯 What to Do When Form is Submitted

**File**: `js/main.js` (Line 195)

Currently shows an alert. To send to email or database:

```javascript
// Replace this section with your backend API call
fetch('/api/quote-request', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Thank you! Your quote request has been received.');
    quoteForm.reset();
});
```

## 📊 Adding Google Analytics

**File**: `index.html` (Add before `</head>` tag, around line 13)

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

## 🔍 Customizing Meta Tags for SEO

**File**: `index.html` (Lines 5-7)

```html
<meta name="description" content="Your business description here">
<meta name="keywords" content="your, keywords, here">
<title>Your Page Title | Your Business Name</title>
```

## 💡 Quick Tips

### Finding Specific Lines:
Most code editors allow you to:
- Press `Ctrl + F` to search
- Press `Ctrl + G` to go to a specific line number

### Making Safe Changes:
1. Always make a backup before editing
2. Test changes locally before uploading
3. Change one thing at a time
4. Clear browser cache after changes (Ctrl + F5)

### Common Mistakes to Avoid:
- Don't delete closing tags (`</div>`, `</section>`)
- Keep quotes matching (" " or ' ')
- Don't change file paths unless you move the files
- Keep the file structure intact

## 🆘 Need to Undo?

If something breaks:
1. Use `Ctrl + Z` to undo in your editor
2. Or restore from your backup
3. Check browser console (F12) for errors

## ✅ Testing Your Changes

After making changes:
1. Save all files
2. Refresh browser (Ctrl + F5)
3. Test on mobile view (F12 → Toggle device toolbar)
4. Check console for errors (F12 → Console tab)

---

**Remember**: Start with small changes and test frequently! 🎨
