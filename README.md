# Vite Vanilla site with TypeScript backend and frontend in same folder with  CLI and  unit testing

This is a multi-page HTML/CSS/JavaScript site created with Vite Vanilla option. In the project there is a backend and a frontent, both written in TypeScript, which can be started with one `npm run dev` command. There is a `share` directory which has functions in TypeScript which both front and backend use. These functions are unit tested with Vitest (basically Jest for TypeScript). There is also a CLI command which can create new example items for the website. This is a good starter project for a local app where all data is produced on the backend and delivers the data to the frontend, and where you can make CLI commands to automate any repetitive tasks. This is also an actual site that I use to create and store HTML/CSS/JavaScript examples for e.g. animations, interactive components, etc. for JavaScript-DOM sites.

![grafik](https://starters.tanguay.eu/images/starters/viteVanillaTestingBackendFrontendTypeScript.png)

## features

- built with **Vite** (Vanilla/TypeScript)
- **multi-page** menu, editable in `Router.ts`
- dark layout
- TypeScript in both backend and frontend
- start backend and frontend with one command: `npm run dev`
- frontend uses **Sass**
- testing with Vitest: `npm run test` and `npm run testcov` (coverage)
- CLI which runs a script on the backend that creates new components: `npm run ce`

## install

- download zip
- copy all files to new directory, e.g. `/home/yourname/projects/site001`
- open VSCode in that directory (`code .`)
- `npm i`
- `npm run dev`

## testing

- `npm run test` (run all unit tests)
- `npm run testcov` (show test coverage)

## CLI

- `npm run ce`

## more starters, templates and frameworks

https://starters.tanguay.eu
