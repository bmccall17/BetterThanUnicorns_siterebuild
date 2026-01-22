# Better Than Unicorns - Old Site

## Deployment

This site is deployed on Render.com as a Static Site.

### Configuration

The configuration is defined in `render.yaml`.

- **Root Directory:** `.` (Repository Root)
- **Publish Directory:** `public`
- **Build Command:** `echo 'no build'` (or empty)

**Important:** If you are configuring the service manually in the Render Dashboard, ensure the settings match the above.

- If you set **Root Directory** to `public` in the dashboard, you must set **Publish Directory** to `.` (dot) or leave it empty.
- If you set **Root Directory** to `.` (or leave it empty/default), you must set **Publish Directory** to `public`.

Do **not** set Publish Directory to `assets` or `public/assets`, as this will cause the site to fail to load `index.html`.
