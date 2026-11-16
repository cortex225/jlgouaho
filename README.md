# jlgouaho

Source of [jlgouaho.com](https://www.jlgouaho.com), the bilingual (FR/EN) portfolio and blog of Jean-Luc Gouaho.

## Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS, shadcn/ui, Framer Motion
- next-international for the French and English routes
- MDX blog posts in `content/`, rendered with unified and rehype-pretty-code
- three.js for the background scene
- Deployed on Vercel

## Run locally

Requires Node.js and pnpm.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm start    # serve the build
```

No environment variables are needed to run the site.

## Where the content lives

- `src/data/resume.tsx`: profile, work history, education, projects, links
- `src/app/locales/fr.tsx` and `src/app/locales/en.tsx`: all translated text
- `content/`: blog posts, one file per language (`<slug>.fr.mdx`, `<slug>.en.mdx`)

## Credits

Started from [Dillion Verma's portfolio template](https://github.com/dillionverma/portfolio).

## License

MIT, see [LICENSE](./LICENSE).
