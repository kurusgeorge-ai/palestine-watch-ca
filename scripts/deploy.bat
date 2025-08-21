@echo off

echo Building project...
call npm run build

echo Deploying to GitHub Pages...
call npx gh-pages -d dist

echo Deployment complete!
echo Your site should be available at: https://[your-username].github.io/palestine-watch-ca

pause
