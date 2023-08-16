// import * as tools from './tools.js';

const pageName = process.argv[2];

if (!pageName) {
	console.log('EXAMPLE: npm run cp Reports');
	process.exit();
} else {
	console.log(`building page "${pageName}"...`);
}