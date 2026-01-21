# Deployment Instructions for old.betterthanunicorns.com

This guide will help you deploy the "Old Better Than Unicorns" site to a hosting provider and set up the subdomain.

## Prerequisites

*   A GitHub, GitLab, or Bitbucket account.
*   Access to your domain registrar (where you bought `betterthanunicorns.com`).

## Option 1: Deploying to Netlify (Recommended)

1.  **Push this repository** to your GitHub/GitLab/Bitbucket account.
2.  Log in to [Netlify](https://www.netlify.com/).
3.  Click **"Add new site"** -> **"Import an existing project"**.
4.  Select your Git provider and choose this repository.
5.  Netlify should automatically detect the settings from `netlify.toml`:
    *   **Base directory:** `old.betterthanunicorns.com`
    *   **Publish directory:** `.` (relative to base)
6.  Click **"Deploy site"**.

### Setting up the Subdomain on Netlify

1.  Once deployed, go to **"Domain settings"** > **"Custom domains"**.
2.  Click **"Add custom domain"**.
3.  Enter `old.betterthanunicorns.com`.
4.  Netlify will provide you with DNS instructions.

## Option 2: Deploying to Vercel

1.  **Push this repository** to your Git provider.
2.  Log in to [Vercel](https://vercel.com/).
3.  Click **"Add New..."** -> **"Project"**.
4.  Import this repository.
5.  In the "Configure Project" screen:
    *   **Root Directory:** Click "Edit" and select `old.betterthanunicorns.com`.
    *   **Framework Preset:** Select "Other" (or let it auto-detect).
6.  Click **"Deploy"**.

### Setting up the Subdomain on Vercel

1.  Go to the **Settings** tab of your project.
2.  Click **"Domains"**.
3.  Enter `old.betterthanunicorns.com` and click **"Add"**.
4.  Vercel will show the required DNS records (usually a CNAME or A record).

## DNS Configuration (Moving the Domain)

To make `old.betterthanunicorns.com` work, you need to add a record to your domain's DNS settings.

1.  Log in to your domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
2.  Navigate to the **DNS Management** or **Name Server** settings for `betterthanunicorns.com`.
3.  Add a new record:
    *   **Type:** `CNAME`
    *   **Name/Host:** `old` (this represents `old.betterthanunicorns.com`)
    *   **Value/Target:**
        *   If using **Netlify**: `[your-site-name].netlify.app`
        *   If using **Vercel**: `cname.vercel-dns.com`
4.  Save the changes. It may take up to 24-48 hours for propagation, but usually happens within minutes.

## Notes

*   The site was previously a Webflow export. Ensure you keep the files in `old.betterthanunicorns.com` as they are, especially the asset paths.
*   The `robots.txt` has been updated to avoid pointing to the main site's sitemap.
