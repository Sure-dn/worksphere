# Simple Web Starter (HTML + CSS + JS)

This is a minimal starter with separate files that you can upload to GitHub or host anywhere (GitHub Pages, Firebase Hosting, Netlify, Vercel, etc.).

## Files

- `index.html` – main HTML entry
- `styles.css` – styles
- `app.js` – JavaScript (ES modules)
- `.gitignore` – ignores common clutter

## Quick Start

1. Open `index.html` locally (double-click) or serve it with a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 5173
   # then open http://localhost:5173
   ```

2. Edit content as needed. Commit and push to a new GitHub repo.

## GitHub Pages

- Create a repository and push these files.
- In **Settings → Pages**, set the source to `main` (root) and save.
- Your site will be live at `https://<your-username>.github.io/<repo>/` after a minute.

## Optional: Firebase Client SDK

If this project corresponds to your Firebase console link, add your Firebase Web SDK snippet to `app.js` where indicated. You can enable services like Auth, Firestore, or Storage by importing the respective modules from the official CDN.

> Tip: Use the **modular SDK** (v9+) imports in `app.js` for tree-shaking and better performance.

## Deploy to Firebase Hosting (optional)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # choose "Use an existing project" or create a new one
# When asked for "public" directory, enter "." (a single dot) to deploy the root
firebase deploy
```

## License

MIT — feel free to use and modify.
