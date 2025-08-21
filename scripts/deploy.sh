#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete!"
echo "Your site should be available at: https://[your-username].github.io/palestine-watch-ca"
