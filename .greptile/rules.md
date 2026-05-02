# Greptile Review Rules

This is a Next.js 16.2.4 App Router project using React 19, TypeScript strict mode, Tailwind CSS, shadcn-style UI components, and pnpm.

## Project-specific requirements

- Follow `AGENTS.md`: before suggesting or writing Next.js code, check the relevant guide in `node_modules/next/dist/docs/` because this Next.js version may differ from older conventions.
- Prefer existing project patterns, aliases, and component structure over adding new abstractions.
- Keep product data changes in `src/data/products.ts` compatible with `src/types/product.ts`.
- When using `next/image` with external URLs, make sure `next.config.ts` allows the remote source through `images.remotePatterns`.
- Preserve strict TypeScript compatibility and avoid `any` unless there is a clear reason.
- Keep UI changes consistent with the existing component style and Tailwind utility usage.

## Review focus

- Flag real bugs, runtime failures, invalid Next.js APIs, broken remote image configuration, unsafe data assumptions, and missing type coverage.
- Mention style issues only when they hurt maintainability, accessibility, or consistency with the existing app.
- Avoid noisy comments about preferences that do not affect correctness or maintainability.
