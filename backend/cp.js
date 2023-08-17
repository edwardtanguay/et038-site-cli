import readlineSync from 'readline-sync';
import { createPage } from './siteManager.js';

let pageName = process.argv[2];

if (!pageName) {
	pageName = readlineSync.question('Page name to create (e.g. "About"): ');
	const customIntroLine = readlineSync.question(`Custom intro line on page (press ENTER for default text): `);
	createPage(pageName, customIntroLine);
} else {
	createPage(pageName)
}
