import * as tools from './tools.js';
import readlineSync from 'readline-sync';

let pageName = process.argv[2];

if (!pageName) {
	pageName = readlineSync.question('Page name to create: ');
	console.log(`creating page "${pageName}"...`);
} else {

	// create code file
	tools.createFile(`./src/pages/Page${pageName}.ts`, `export const Page${pageName} = () => {
	return /*html*/\`
<div class="page page${pageName}">
	<p>This is the ${pageName} page.</p>
</div>
\`; 
}`);

	// add page to router
	tools.addLineInFile(`./src/Router.ts`, '@@FIRSTLINE', `import { Page${pageName} } from './pages/Page${pageName}';`);
	tools.addLineInFile(`./src/Router.ts`, 'switch (', `case '${pageName.toLowerCase()}':\nreturn Page${pageName}();`);
	tools.changeLineInFile(`./src/Router.ts`, 'const pageNames =', ']', ` ,'${pageName}'`);
}