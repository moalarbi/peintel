# Peintel - Rénovation & Peinture

Marketing website for Peintel, a premium renovation and painting business.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **i18n**: next-intl (FR, EN, AR)
- **Deployment**: Static Export (GitHub Pages)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment to GitHub Pages

This project is configured for static export to GitHub Pages.

1. **Build and Export**:
   ```bash
   npm run build
   ```
   This will generate a `out` directory containing the static site.

2. **Push to GitHub**:
   Ensure your repository is named `peintel-site` as configured in `next.config.js`.

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub.
   - Navigate to **Pages**.
   - Under **Build and deployment**, set **Source** to "Deploy from a branch".
   - Select the branch (usually `main` or `gh-pages`) and the folder (usually `/docs` or the root if you push the `out` content to a separate branch).
   - Alternatively, use a GitHub Action to automate the deployment from the `out` directory.

## Configuration
- **WhatsApp**: +33 7 74 55 53 11
- **Base Path**: `/peintel-site`
- **Primary Locale**: French (`/fr`)
