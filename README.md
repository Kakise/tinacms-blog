This is a [Tina CMS](https://tina.io/) project.

## Local Development

Install the project's dependencies:

> [!NOTE]  
> [Do you know the best package manager for Node.js?](https://www.ssw.com.au/rules/best-package-manager-for-node/) Using the right package manager can greatly enhance your development workflow. We recommend using pnpm for its speed and efficient handling of dependencies. Learn more about why pnpm might be the best choice for your projects by checking out this rule from SSW.

```
pnpm install
```

Run the project locally:

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
pnpm build
```

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting started](https://tina.io/docs/setup-overview/)

You can check out [Tina Github repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!

## [Deploy on Vercel](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/deployment/)

## Static export and FTP deploy

- Build the static site locally:

```
pnpm run build:static
```

This will generate a static site in the `out/` directory (index.html, assets, JS, CSS). You can upload the contents of `out/` to any static host or an FTP server.

- Optional: To customize fonts used by the new style, add these files under `public/fonts/`:
  - `space-mono-v17-latin-regular.woff2`
  - `space-mono-v17-latin-700.woff2`

## GitHub Pages deployment

A workflow is included at `.github/workflows/gh-pages.yml` which builds the static site and publishes it to a `gh-pages` branch on every push to `main` (and on manual dispatch).

Required repository secrets for Tina CMS content fetching at build time:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `NEXT_PUBLIC_TINA_BRANCH` (optional, defaults to `main`)

After the first successful run, enable GitHub Pages in the repository settings and point it to the `gh-pages` branch (root).
