# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based static resume generator that creates beautiful web resumes. The project uses TypeScript, Bootstrap CSS, and various React components to render professional resumes from structured data.

## Development Commands

```bash
# Development mode (with debug output)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static HTML to docs/ directory
npm run export

# Clean build artifacts
npm run clean

# Lint code and auto-fix issues
npm run lint

# Generate TypeDoc documentation
npm run typedoc
```

## Architecture

### Core Structure
- **`payload/`** - Resume data files (TypeScript interfaces) - modify these files to customize resume content
- **`component/`** - React components organized by section (profile, experience, project, etc.)
- **`pages/`** - Next.js pages (primarily `index.tsx` for main resume page)
- **`docs/`** - Generated static HTML output (created by `npm run export`)
- **`asset/`** - Static assets (images, favicon)

### Key Architectural Patterns
- **Data-driven rendering**: All resume content is defined in `payload/` TypeScript files
- **Component-based sections**: Each resume section (profile, experience, skills, etc.) has its own component
- **TypeScript interfaces**: Strict typing for all payload data structures located alongside components
- **Static generation**: Uses Next.js export to create deployable static HTML
- **Centralized payload**: `payload/index.ts` aggregates all section payloads and defines the complete Payload interface

### Payload System
Resume data is structured in `payload/` directory:
- `_global.ts` - Global settings (SEO, titles, favicon)
- `profile.ts` - Personal information and contact details
- `introduce.ts` - Self-introduction section
- `skill.ts` - Technical skills
- `experience.ts` - Work experience entries
- `project.ts` - Project portfolio entries
- `openSource.ts` - Open source contributions
- `presentation.ts` - Presentation activities
- `article.ts` - Blog posts, articles, SNS posts
- `education.ts` - Educational background
- `etc.ts` - Other achievements (certifications, awards, competitions, etc.)
- `footer.ts` - Footer content
- `index.ts` - Aggregates all payloads and defines the Payload interface

Each payload file exports structured data that feeds into corresponding React components. The TypeScript interfaces for each payload type are defined in the corresponding component directory (e.g., `component/profile/IProfile.ts`).

## Development Notes

- Modify payload files to customize resume content
- Section rendering order is controlled in `pages/index.tsx` by changing the component order
- The project uses Bootstrap 4 (via reactstrap) for styling
- All payload sections (except `_global` and `footer`) support a `disable?: boolean` field to hide sections
- Static export is optimized for GitHub Pages deployment
- Development server requires Node.js legacy OpenSSL provider flag (handled automatically via cross-env)
- Component rendering uses `PreProcessingComponent` to check the `disable` flag before rendering

### Component Structure
- Each section has an `index.tsx` component in `component/<section-name>/`
- Complex sections may have additional subcomponents (e.g., `row.tsx` for rendering individual items)
- Shared components are in `component/common/` (CommonSection, CommonRow, CommonDescription, PreProcessingComponent)
- TypeScript interfaces are co-located with components using the naming pattern `I<ComponentName>.ts`

## Build Process

The export process (`npm run export`):
1. Cleans previous builds (`npm run clean` - removes `docs/` and `.next/`)
2. Runs `prebuild` hook: installs dependencies and lints code
3. Builds the Next.js project with OpenSSL legacy provider flag
4. Exports static HTML to `docs/` directory
5. Runs `postexport` hook: executes `shellwork.js` which:
   - Creates `docs/.nojekyll` file (required for GitHub Pages)
   - Conditionally creates `docs/CNAME` based on `package.json` homepage field:
     - If homepage matches `*.github.io/*` pattern: skips CNAME creation (assumes GitHub Pages subdirectory)
     - Otherwise: creates CNAME with the hostname from homepage URL (assumes custom domain)

## Configuration Files

- `next.config.js` - Next.js configuration with:
  - `next-images` plugin for image imports
  - Dynamic `assetPrefix` based on `package.json` homepage pathname (for subdirectory hosting)
- `tsconfig.json` - TypeScript strict mode configuration with:
  - Target: ES2017
  - JSX: preserve (handled by Next.js)
  - TypeDoc output to `docs/typedoc/`
- `package.json` - Contains:
  - `homepage` field: controls deployment URL and asset prefix behavior
  - Build scripts with OpenSSL legacy provider flags
- `shellwork.js` - Post-export script for GitHub Pages setup (.nojekyll, CNAME)
- `.eslintrc.js` - ESLint configuration with Airbnb TypeScript preset

## GitHub Pages Deployment

To deploy to GitHub Pages:
1. Set repository settings: Options → GitHub Pages → Source → master branch /docs folder
2. Update `package.json` `homepage` field to match your deployment URL:
   - For `username.github.io/repo`: `https://username.github.io/repo`
   - For custom domain: `https://yourdomain.com`
3. Run `npm run export` to generate static files
4. Commit and push the `docs/` directory
5. Access your resume at the configured URL