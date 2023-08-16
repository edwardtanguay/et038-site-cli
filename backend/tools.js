import fs from 'fs';

export const createFile = (pathAndFileName, content) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

export const addLineInFile = (pathAndFileName, marker, additionalLine) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines = qstr.convertStringBlockToLines(content);
	let newLines = [];
	let lineNumber = 1;
	for (const line of lines) {
		if (lineNumber === 1 && marker === '@@FIRSTLINE') {
			newLines.push(additionalLine);
		}
		const newLine = line;
		newLines.push(newLine);
		if (newLine.includes(marker)) {
			newLines.push(additionalLine);
		}
		lineNumber++;
	}
	const newContent = qstr.convertLinesToStringBlock(newLines);
	qfil.createFile(pathAndFileName, newContent);
};