import { createPage } from './siteManager.js';
import readlineSync from 'readline-sync';

let pageName = process.argv[2];

if (!pageName) {
	pageName = readlineSync.question('Page name to create (e.g. "About"): ');
	createPage(pageName);
} else {
	createPage(pageName)
}
