Palestine Watch CA – React SPA (Vite + TypeScript)

Frontend-only single-page app tracking Canadian MPs' positions on Palestine-related issues.

## Dev

```bash
npm i
npm run dev
```

Then open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages.

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch**: The GitHub Actions workflow will automatically build and deploy your site.

### Manual Deployment

If you prefer manual deployment:

```bash
# Install dependencies (including gh-pages)
npm install

# Deploy to GitHub Pages
npm run deploy
```

Or use the provided scripts:
```bash
# Windows
scripts/deploy.bat

# Linux/Mac
scripts/deploy.sh
```

### Site URL

After deployment, your site will be available at:
`https://[your-username].github.io/palestine-watch-ca`

**Note**: Replace `[your-username]` with your actual GitHub username in the `package.json` homepage field.