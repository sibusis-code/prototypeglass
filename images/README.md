# Image Assets Guide

## Required Images

### Logo
- **File**: `logo.png`
- **Recommended Size**: 200x60px
- **Format**: PNG with transparent background
- **Description**: Prototype Glass Windscreen company logo

### Hero Section
- **File**: `hero-bg.jpg`
- **Recommended Size**: 1920x1080px
- **Format**: JPG
- **Description**: Background image showing windscreen installation or glass work

### Brand Logos
Location: `brands/`

Required brand logo files:
- `toyota.png` (150x100px)
- `vw.png` (150x100px)
- `bmw.png` (150x100px)
- `mercedes.png` (150x100px)
- `ford.png` (150x100px)
- `hyundai.png` (150x100px)

**Format**: PNG with transparent background

### Service Images
Location: `services/`

Required service images:
- `windscreen-placeholder.jpg` (600x400px)
- `chip-repair.jpg` (600x400px)
- `rear-screen.jpg` (600x400px)
- `door-glass.jpg` (600x400px)
- `quarter-glass.jpg` (600x400px)

**Format**: JPG, optimized for web

## Free Stock Photo Resources

- **Unsplash**: https://unsplash.com/ (search: "car windscreen", "auto glass")
- **Pexels**: https://www.pexels.com/ (search: "windshield", "car repair")
- **Pixabay**: https://pixabay.com/ (search: "windscreen replacement")

## Image Optimization

Before adding images, optimize them:

### Online Tools
- **TinyPNG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **Compressor.io**: https://compressor.io/

### Command Line (if using build tools)
```bash
# Install imagemin
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant

# Optimize images
imagemin images/*.{jpg,png} --out-dir=images/optimized --plugin=mozjpeg --plugin=pngquant
```

## Image Guidelines

1. **Logo**: Clean, professional, high contrast
2. **Hero**: High-quality, professional photo showing your service
3. **Brands**: Official brand logos (ensure you have rights to use)
4. **Services**: Clear, well-lit photos of actual work or stock photos
5. **File Size**: Keep under 200KB for logos, under 500KB for photos
6. **Dimensions**: Use recommended sizes for best quality

## Current Status

The website uses fallback SVG placeholders when images are missing. Replace placeholder images with actual files when available.
