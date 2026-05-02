# Mascots Bracelets Frontend

Frontend for Mascots Bracelets, a minimal e-commerce experience for handcrafted rune bracelets.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/radix-nova components
- pnpm

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm lint
pnpm build
```

## Project Notes

- Product data currently lives in `src/data/products.ts`.
- Shared UI primitives live in `src/components/ui`.
- Before changing Next.js APIs or conventions, read the relevant local docs in `node_modules/next/dist/docs/` as required by `AGENTS.md`.
