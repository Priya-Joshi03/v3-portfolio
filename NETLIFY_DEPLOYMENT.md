# Netlify Deployment Guide

## Option 1: Manual Configuration (Recommended)

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site"  "Deploy manually"
3. Drag the `dist` folder to the deploy area
4. Your site will be live instantly!

### Step 3: Configure Build Settings (for future deployments)
1. Go to Site settings  Build & deploy
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Set **Node version**: 18

## Option 2: Git Integration

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site"  "Import an existing project"
3. Connect your GitHub account
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

## Important Notes

###  What's Already Configured:
- Contact form works with Google Apps Script
- All server-side dependencies removed
- Build process tested and working
- Redirects configured in `public/_redirects`

###  Build Settings:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18

###  Files Ready:
- `dist/` - Built files ready for deployment
- `public/_redirects` - SPA routing configuration
- Contact form configured for Google Apps Script

## Troubleshooting

If you get build errors:
1. Make sure Node version is set to 18
2. Check that build command is `npm run build`
3. Verify publish directory is `dist`
4. Ensure all dependencies are in package.json

## Contact Form
The contact form is already configured to work with your Google Apps Script.
No additional setup required!
