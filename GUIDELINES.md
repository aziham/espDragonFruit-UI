# Project Guidelines

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Constraints

- Bundle size limit: 3MB total for the frontend

## Architecture

- Feature-based structure in `src/features/`
- Layout components in `src/features/layout/`
- Shared UI components in `src/features/ui/`
- Route components in `src/pages/`
- Global API fetching in `src/api/`
- Feature-specific services in `src/features/*/services/` (not api/)

## File Naming

- Use lowercase-lowercase.extension (kebab-case) for all files
- Example: `dashboard-page.tsx`, `user-service.ts`

## State Management

- Local state: `useState` hooks
- Global state: Zustand stores
- Data fetching: SWR

## Code Style

- Use Preact with TypeScript
- Write React code that will be handled by Preact/compat layer
- Import alias: `@/` for `src/` directory
- Component exports: `export function ComponentName()`
- Type definitions: Use `type` declarations on top of component, not inline
- Use SWR for data fetching, Zustand for state management
- Tailwind CSS + DaisyUI for styling
- No comments unless explicitly requested
- Follow existing naming conventions (PascalCase components, camelCase functions)

## Commit Style

- Format: `type: Description` (always uppercase after colon)
- Types: chore, feat, refactor, fix, etc.
- Example: `refactor: Migrate to feature-based project architecture`
- Always check previous commits to match style when generating commit messages
