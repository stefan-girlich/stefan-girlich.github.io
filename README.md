# stefan-girlich.github.io

Hi, I'm Stefan and this project contains the codebase for my website [stefan-girlich.github.io](https://stefan-girlich.github.io/). Feel free to fork and customize it for your own purposes under [GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Purpose

The website represents my CV including previous jobs in my career, current skills and my professional goals and motivation.

## Features

- Responsive layout with breakpoints for desktop, tablet and mobile viewports
- Customizable theme and content
- Optimized for performance, SEO and accessibility via [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- Tested on latest desktop and mobile versions of Chrome, Firefox and Safari (as of April 2022)

## Core tech stack

- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org), [Create React App](https://create-react-app.dev)
- [styled-components](https://styled-components.com)
- [Font Awesome](https://fontawesome.com/icons)
- [gh-pages](https://www.npmjs.com/package/gh-pages)

## Installation

_If you plan to use this codebase for your own website, please first read "Customization" below._

1. Make sure you have [Node.js](https://nodejs.org/en) (>=v16.14.2) installed. Installation via [nvm](https://github.com/nvm-sh/nvm) is recommended
1. Make sure you have [Yarn](https://yarnpkg.com) (>=v1.22.18) installed
1. Clone this repository to a local machine and `cd` into the local working copy
1. Run `yarn install` to install all dependencies
1. You may now
   - run `yarn start` to run a local development server
   - run `yarn deploy` to build the website and deploy it to GitHub pages
   - run `yarn build` to create a bundle for manual deployment

## Customization

_This section describes the standard approach to using this codebase as a template. Feel free to modify and re-use the codebase in any way you like under the given license._

1. Prepare the following assets:
   - a font from [Fontsource](https://fontsource.org/fonts)
   - icons for the "motivation" section from [Font Awesome Free](https://fontawesome.com/icons)
   - a color palette, e.g. from [coolors](https://coolors.co/)
   - a full set of favicon files, e.g. via [favicon.io](https://favicon.ioØ)
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this GitHub project to create a new project named `<your-github-user-name>.github.io`
1. In [`package.json`](package.json), update the value of `homepage` to `https://<your-github-user-name>.github.io`
1. Follow the _Installation_ steps above using your own fork
1. Install your own web font
   1. In [`package.json`](package.json), replace the dependency starting with `@fontsource` with the package name of your chosen font
   1. In [`index.css`](src/index.css), update the value for `font-family` to your chosen font
   1. In [`index.tsx`](src/index.tsx), update the import starting with `@fontsource` to reflect the package for your chosen font
1. Install your own icons
   1. Search for files containing an import from `'@fortawesome/fontawesome-svg-core/import.macro'`, e.g. importing the `solid` function
   1. In each file, apply your own icon's names (e.g. `solid('camera')`). Icon names are defined by [Font Awesome](https://fontawesome.com/icons)
   1. In the [`public`](public/) directory, replace all `.png`, `.ico` and `.svg` files with your own favicon files
1. Apply your own theme
   1. In [`theme.ts`](src/config/theme.ts), insert your own colors and contrast text colors
   1. Optionally, adjust font sizes, spacing and breakpoints in [`theme.ts`](src/config/theme.ts)
1. Apply your own text content
   1. In [`index.html`](public/index.html), apply your own texts for the `<title>` and `<meta name="description">` tags
   1. In [`manifest.json`](public/manifest.json), update `name` and `short_name`
   1. In [`data.json`](src/config/data.json), apply your own CV information and general UI labels
1. Run `yarn install` to update changed dependencies
1. Run `yarn start` to see the changes in a local web browser or proceed with one of the other final steps from the _Installation_ section

## Known issues

- Most text values in [`data.json`](src/config/data.json) require special characters to be provided as [Unicode characters](https://flaviocopes.com/javascript-unicode/#using-unicode-in-a-string), but some may contain [HTML entities](https://dev.w3.org/html5/html-author/charref) since they currently contain e.g. `<a>` tags
- Some information (e.g. page title) needs to be defined in [`index.html`](public/index.html) and [`manifest.json`](public/manifest.json) rather than in [`data.json`](src/config/data.json)
- Font Awesome icons cannot be defined via [`data.json`](src/config/data.json) since [Dynamic Icon Importing](https://fontawesome.com/docs/web/use-with/react/add-icons#dynamic-icon-importing) requires string literals to be used
- The website has not been tested with right-to-left (RTL) layouts
- The website does not yet comply with the [JSON Resume](https://jsonresume.org) standard
