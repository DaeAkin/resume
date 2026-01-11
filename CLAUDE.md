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

## Resume Content Guidelines

When updating resume content in payload files (especially `experience.ts`, `project.ts`, `openSource.ts`), follow these guidelines to create effective, professional descriptions.

### Writing Framework: Problem → Solution → Result

Use a **bulleted structure** to describe each experience or project:

```
• [Problem context]: What situation or challenge existed
• [Solution/Action]: What you did to address it (technologies, approaches)
• [Result/Impact]: Quantifiable outcomes and business impact
```

### Good Example

```
• 서비스 성장으로 트래픽 10배 증가, 서버 응답 지연 문제 발생 (평균 3초)
• Redis 캐싱 레이어 설계 및 도입, N+1 쿼리 문제 해결
• 응답시간 85% 단축 (3초→0.5초), 인프라 비용 40% 절감
```

### Key Principles

1. **Include the problem context**: Without context, achievements lack meaning
   - ❌ "Redis 도입" → Why? So what?
   - ✅ "트래픽 증가로 인한 응답 지연 문제를 Redis 캐싱으로 해결"

2. **Use quantifiable results**: Numbers make impact concrete
   - Performance metrics: "응답시간 70% 개선", "처리량 3배 증가"
   - Business metrics: "사용자 10만 → 50만 증가", "이탈률 30% 감소"
   - Efficiency metrics: "배포 시간 2시간 → 15분", "개발 속도 40% 향상"
   - Cost metrics: "서버 비용 40% 절감", "인프라 비용 월 500만원 절감"

3. **Write naturally without labels**: Don't use brackets like [문제], [해결], [성과]
   - ❌ "[문제] 응답 지연 발생 [해결] Redis 도입 [성과] 85% 개선"
   - ✅ Use natural bullet points with clear flow (see example above)

4. **Show problem-solving ability**: Demonstrate technical judgment and decision-making
   - Not just "what you did" but "why it mattered" and "what impact it had"
   - Position yourself as a problem solver, not just a task executor

### Template Variations

**For major achievements** (3 bullets):
```
• [Context/Problem with specific metrics]
• [Technical solution with key technologies/approaches]
• [Quantified results and business impact]
```

**For smaller items** (1-2 bullets):
```
• [Solution] to [problem], achieving [quantified result]
```

**For technical implementations**:
```
• [Technology/System] 설계 및 구축하여 [business outcome]
  - [Technical detail 1]
  - [Technical detail 2]
  - [Quantified result]
```

### What to Avoid

- ❌ Labels in brackets: [문제], [해결], [성과] - too formal and disrupts reading flow
- ❌ Vague statements: "성능 개선", "사용자 경험 향상" without numbers
- ❌ Technology lists without context: "React, TypeScript, AWS 사용"
- ❌ Tasks without outcomes: "API 개발", "테스트 코드 작성"

### What to Emphasize

- ✅ Problem context that shows why work mattered
- ✅ Specific, quantifiable results (%, numbers, time saved)
- ✅ Business impact beyond technical metrics
- ✅ Scale indicators (users, traffic, data volume)
- ✅ Technical decisions and their rationale