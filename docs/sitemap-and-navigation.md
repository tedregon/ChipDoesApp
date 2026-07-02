# Site map and navigation

This document reflects the current site structure, global navigation behavior, and all HTML entry points.

## Global navigation

The navbar is injected on pages that include `<div id="nav-placeholder"></div>` and load `js/nav.js`.

| Label | Visible in bar | Destination | Notes |
|--------|----------------|-------------|--------|
| **design with chip** | Yes (brand) | `/` | Bold, lowercase label |
| **Train** | Yes | `/train/` | Active on `/train/` and `/portfolioreviewer/` |
| **Portfolio** | Yes | `/portfolio/` | Active for `/portfolio/` and product routes under `/make/` |
| **About** | Yes | `/about/` | Active on `/about/` |
| **Get in contact** | Yes (CTA) | [LinkedIn profile](https://www.linkedin.com/in/chip-rian/) | Opens in new tab |

### Active state rules

| Active key | When |
|------------|------|
| `train` | `/train/` and `portfolioreviewer` routes |
| `portfolio` | First path segment is `portfolio` or `make` |
| `about` | First path segment is `about` |
| *(none)* | Other routes like `/sudoku/` and `/privacy/` |

## URLs in `sitemap.xml`

| URL | Priority | Change frequency |
|-----|----------|------------------|
| https://designwithchip.com/ | 1.0 | weekly |
| https://designwithchip.com/train/ | 0.9 | weekly |
| https://designwithchip.com/portfolio/ | 0.9 | weekly |
| https://designwithchip.com/make/drafts/ | 0.75 | monthly |
| https://designwithchip.com/make/mobile/ | 0.75 | monthly |
| https://designwithchip.com/make/vigor/ | 0.8 | monthly |
| https://designwithchip.com/make/acting-coach/ | 0.8 | monthly |
| https://designwithchip.com/make/wordjam/ | 0.85 | monthly |
| https://designwithchip.com/make/wordjam/playwordjam/ | 0.9 | weekly |
| https://designwithchip.com/portfolioreviewer/ | 0.85 | monthly |
| https://designwithchip.com/sudoku/ | 0.6 | monthly |
| https://designwithchip.com/privacy/ | 0.3 | yearly |
| https://designwithchip.com/about/ | 0.7 | monthly |

## All `index.html` pages in this project

| Repository path | Public URL | Status |
|-------------------|------------|--------|
| `index.html` | https://designwithchip.com/ | Canonical |
| `portfolio/index.html` | https://designwithchip.com/portfolio/ | Canonical |
| `make/drafts/index.html` | https://designwithchip.com/make/drafts/ | Canonical |
| `make/mobile/index.html` | https://designwithchip.com/make/mobile/ | Canonical |
| `make/vigor/index.html` | https://designwithchip.com/make/vigor/ | Canonical |
| `make/acting-coach/index.html` | https://designwithchip.com/make/acting-coach/ | Canonical |
| `make/wordjam/index.html` | https://designwithchip.com/make/wordjam/ | Canonical |
| `make/wordjam/playwordjam/index.html` | https://designwithchip.com/make/wordjam/playwordjam/ | Canonical |
| `portfolioreviewer/index.html` | https://designwithchip.com/portfolioreviewer/ | Canonical |
| `sudoku/index.html` | https://designwithchip.com/sudoku/ | Canonical |
| `privacy/index.html` | https://designwithchip.com/privacy/ | Canonical (non-nav legal page) |
| `about/index.html` | https://designwithchip.com/about/ | Canonical |
| `make/index.html` | https://designwithchip.com/make/ | Legacy redirect to `/portfolio/` |
| `make/mycommunity/index.html` | https://designwithchip.com/make/mycommunity/ | Draft page |
| `make/saas-reviewer/index.html` | https://designwithchip.com/make/saas-reviewer/ | Draft page |
| `archive/make/index.html` | https://designwithchip.com/archive/make/ | Archived |
| `archive/work/index.html` | https://designwithchip.com/archive/work/ | Archived |
| `archive/coaching/index.html` | https://designwithchip.com/archive/coaching/ | Archived |
| `portfolio/drafts/index.html` | https://designwithchip.com/portfolio/drafts/ | Legacy redirect to `/make/drafts/` |
| `portfolio/mobile/index.html` | https://designwithchip.com/portfolio/mobile/ | Legacy redirect to `/make/mobile/` |

## Notes

- Product and case study pages remain under `/make/` for now; the portfolio hub lives at `/portfolio/`.
- `/make/` redirects to `/portfolio/` for legacy links.
- `privacy/index.html` remains intentionally unlinked from primary nav.
