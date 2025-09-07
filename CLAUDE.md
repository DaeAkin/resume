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

### Key Architectural Patterns
- **Data-driven rendering**: All resume content is defined in `payload/` TypeScript files
- **Component-based sections**: Each resume section (profile, experience, skills, etc.) has its own component
- **TypeScript interfaces**: Strict typing for all payload data structures
- **Static generation**: Uses Next.js export to create deployable static HTML

### Payload System
Resume data is structured in `payload/` directory:
- `_global.ts` - Global settings (SEO, titles, favicon)
- `profile.ts` - Personal information and contact details  
- `experience.ts` - Work experience entries
- `project.ts` - Project portfolio entries
- `skill.ts` - Technical skills
- `education.ts` - Educational background
- `etc.ts` - Other achievements (certifications, awards, etc.)
- And additional sections as needed

Each payload file exports structured data that feeds into corresponding React components.

## Development Notes

- Modify payload files to customize resume content
- Section rendering order is controlled in `pages/index.tsx`
- The project uses Bootstrap 4 for styling
- All payload sections support a `disable?: boolean` field to hide sections
- Static export is optimized for GitHub Pages deployment
- Development server requires Node.js legacy OpenSSL provider flag (handled automatically)

## Build Process

The export process (`npm run export`):
1. Runs linting and builds the project
2. Generates static HTML files in `docs/` directory  
3. Automatically creates `docs/CNAME` for custom domains (based on package.json homepage field)
4. Optimizes assets for static hosting

## Configuration Files

- `next.config.js` - Next.js configuration with asset prefix handling
- `tsconfig.json` - TypeScript configuration with strict settings
- `package.json` - Contains homepage field for deployment configuration