# cisc480portfolio

GitHub Pages site for CISC 480. Stack: Vite, React, TypeScript.

```bash
npm install
npm run dev
```

## Deploy (GitHub Pages)

1. Push to `main` (or run **Deploy site to GitHub Pages** in Actions).
2. In the repo go to **Settings → Pages**.
3. Set **Source** to **Deploy from a branch** (not GitHub Actions).
4. Branch: **`main`**
5. Folder: **`/docs`**
6. Save and wait 1–2 minutes.
7. Open: `https://23877293749823749823874.github.io/cisc480portfolio/`

If the page is blank, hard refresh (`Cmd+Shift+R`) and confirm Pages is using **`main` + `/docs`**, not `gh-pages` or GitHub Actions.

Edit copy in `src/data/site.ts` and the reflection in `src/data/reflection.ts`. Replace `public/resume.png` to update the resume modal.
