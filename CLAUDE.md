# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal website hosted at liqiangding.com. The site is built using MkDocs and deployed via GitHub Pages to the `docs/` directory.

## Build Commands

```bash
# Build the MkDocs site (requires mkdocs to be installed)
mkdocs build

# Copy built site to docs directory for GitHub Pages
cd ..
cp -r ./mkdoc_sources/site/* docs/
```

Note: MkDocs must be installed separately. The source files for MkDocs are expected to be in `../mkdoc_sources/`.

## Architecture

### Directory Structure
- `docs/` - The deployed static website served by GitHub Pages
  - Contains the compiled HTML, CSS, and assets
  - Should not be edited directly; regenerate from MkDocs sources
- `.vscode/` - VSCode settings (Live Server on port 5501)
- `CNAME` - GitHub Pages custom domain configuration

### Content Organization
- `docs/index.html` - Main landing page with personal blog layout
- `docs/projects/` - Project portfolio pages
- `docs/research/` - Research-related content
- `docs/blogs/` - Blog posts
- `docs/professional/` - Professional content
- `docs/entrepreneurship/` - Entrepreneurship-related content
- `docs/fun/` - Miscellaneous content

## Development Workflow

1. For local preview: Use VSCode Live Server extension (configured for port 5501)
2. Content updates should be made in the MkDocs source files (not directly in `docs/`)
3. After editing MkDocs sources, rebuild and copy to `docs/` using the build commands above
4. Commit changes to both source and built files

## Deployment

The site is automatically deployed via GitHub Pages from the `docs/` directory on the `master` branch.