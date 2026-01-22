# Webflow URL to Local Asset Mapping

Use this reference when updating HTML files to point to local assets.

## Base URL Replacement Pattern

Replace these Webflow CDN base URLs with your local path:

| Old Base URL | New Local Path |
|--------------|----------------|
| `https://cdn.prod.website-files.com/5f227eb85766717e3e814aa0/` | `/assets/` |
| `https://cdn.prod.website-files.com/5f3f7a980fa5951c0d6aeddf/` | `/assets/` |
| `https://cdn.prod.website-files.com/6318dc098646f4a4b24bf8a9/` | `/assets/` |
| `https://cdn.prod.website-files.com/6022af993a6b2191db3ed10c/` | `/assets/` |
| `https://d3e54v103j8qbb.cloudfront.net/js/` | `/assets/js/` |

## Special Icon Files

| Old URL | New Local File |
|---------|----------------|
| `.../6318dc098646f479504bf938_menu-2(24x24)%402x.svg` | `icons/menu-2_24x24_2x.svg` |
| `.../6318dc098646f4fb7b4bf922_chevron-down---filled(24x24)%402x%20(2).svg` | `icons/chevron-down-filled_24x24_2x.svg` |

## Directory Structure

\`\`\`
assets/
├── images/    # PNG, JPG, JPEG files (105 files)
├── videos/    # MP4, WebM video files (2 files)  
├── js/        # JavaScript files (9 files)
├── css/       # CSS stylesheets (1 file)
├── icons/     # SVG icon files (6 files)
└── json/      # JSON data files (1 file)
\`\`\`

## Sample sed Commands for Bulk Replacement

```bash
# Replace Webflow CDN URLs with local paths
sed -i 's|https://cdn.prod.website-files.com/[^/]*/|/assets/|g' *.html

# Fix URL-encoded spaces
sed -i 's/%20/_/g' *.html
```
