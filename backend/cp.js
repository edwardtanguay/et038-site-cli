import readlineSync from 'readline-sync';
import { createPage } from './siteManager.js';

let pageName = process.argv[2];

if (!pageName) {
	pageName = readlineSync.question('Page name to create (e.g. "About"): ');
	let introLine = `This is the ${pageName} page.`;
	introLine = readlineSync.question('Intro line on page: ');
	createPage(pageName);
} else {
	createPage(pageName)
}
