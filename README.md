# cisc480portfolio

GitHub Pages site for CISC 480. Stack: Vite, React, TypeScript.

```bash
npm install
npm run dev
```

Deploy:

1. Push to `main` (or run the **Deploy site to GitHub Pages** workflow manually).
2. In repo **Settings → Pages**, set **Source** to **Deploy from a branch**.
3. Choose branch **`gh-pages`**, folder **`/ (root)`**.
4. Live URL: `https://<your-github-username>.github.io/cisc480portfolio/`

If the site is blank, make sure Pages is **not** still serving the repo root `index.html` from `main`. It must use the built files on `gh-pages`.

Edit copy in `src/data/site.ts` and the reflection string in `src/data/reflection.ts`. Replace `public/resume.png` to update the resume modal. Swap images under `public/screenshots/`.
