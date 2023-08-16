import * as tools from './tools.js';

const pageName = process.argv[2];

if (!pageName) {
	console.log('EXAMPLE: npm run cp Reports');
	process.exit();
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
	tools.addLineInFile(`./src/Router.ts`, 'switch (', `		case '${pageName.toLowerCase()}':
			return Page${pageName}();`);
	tools.changeLineInFile(`./src/Router.ts`, 'const pageNames =', ']', ` ,'${pageName}'`);
}