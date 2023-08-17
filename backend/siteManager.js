import * as tools from './tools.js';

export const createPage = (pageName, introLine = '') => {

	introLine = introLine.trim() === '' ? `This is the ${pageName} page.` : introLine;

	// create code file
	tools.createFile(`./src/pages/Page${pageName}.ts`, `export const Page${pageName} = () => {
	return /*html*/\`
<div class="page page${pageName}">
	<p>${introLine}</p>
</div>
\`; 
}`);

	// add page to router
	tools.addLineInFile(`./src/Router.ts`, '@@FIRSTLINE', `import { Page${pageName} } from './pages/Page${pageName}';`);
	tools.addLineInFile(`./src/Router.ts`, 'switch (', `case '${pageName.toLowerCase()}':\nreturn Page${pageName}();`);
	tools.changeLineInFile(`./src/Router.ts`, 'const pageNames =', ']', ` ,'${pageName}'`);
};