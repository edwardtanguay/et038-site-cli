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
}