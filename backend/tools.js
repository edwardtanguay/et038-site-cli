import fs from 'fs';
import * as tools from './tools.js';

/**
 * Creates a file with content
 * 
 * tools.createFile('../logs/log.txt', 'added item');
 * 
 * (file is created)
 */
export const createFile = (pathAndFileName, content) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

/**
 * Adds a line to a specific point in a file
 * 
 * tools.addLineInFile(`./src/main.ts`, '@@FIRSTLINE', `import { ${idCodeSnakeCase} } from './examples/${idCodeSnakeCase}';`);
 * tools.addLineInFile(`./src/Router.ts`, 'switch (', `case '${pageName.toLowerCase()}':\nreturn Page${pageName}();`);
 * 
 * (line is added)
 */
export const addLineInFile = (pathAndFileName, marker, additionalLine) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines = tools.convertStringBlockToLines(content);
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
	const newContent = tools.convertLinesToStringBlock(newLines);
	tools.createFile(pathAndFileName, newContent);
};

export const convertLinesToStringBlock = (lines) => {
	let r = '';
	let index = 0;
	for (const line of lines) {
		r += line;
		if (index != lines.length - 1) {
			r += '\n';
		}
		index++;
	}
	return r;
};

export const convertStringBlockToLines = (stringBlock, trimLines = true) => {
	let roughLines = [];

	if (tools.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split('\n');
	if (trimLines) {
		roughLines = tools.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = tools.removeEmptyLinesFromLinesAtBeginningAndEnd(roughLines);
	return roughLines;
};

export const trimAllLinesInLinesArray = (lines) => {
	const newLines = [];
	lines.forEach(function (line) {
		let newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
};

export const removeEmptyLinesFromLinesAtBeginningAndEnd = (lines) => {
	lines = tools.trimAllLinesInLinesArray(lines);
	lines = tools.removeBlankLinesFromBeginning(lines);
	lines = lines.reverse();
	lines = tools.removeBlankLinesFromBeginning(lines);
	lines = lines.reverse();
	return lines;
};

export const removeBlankLinesFromBeginning = (lines) => {
	const newLines = [];
	let trimmingBlanks = true;
	lines.forEach(function (line) {
		let newLine = line;
		if (trimmingBlanks && line == "") {
			//skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
};

export const isEmpty = (line) => {
	if (line === undefined || line === null) {
		return true;
	} else {
		line = line.toString();
		if (line.trim() == '') {
			return true;
		} else {
			return false;
		}
	}
};

export const insertStringAfterMarkerInString = (line, marker, textToInsert) => {
	const parts = line.split(marker); 
	const firstPart = parts[0];
	const secondPart = parts[1];
	return firstPart + textToInsert + marker + secondPart;
}

export const changeLineInFile = (pathAndFileName, marker, lineMarker, textToInsert) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines = tools.convertStringBlockToLines(content);
	let newLines = [];
	for (const line of lines) {
		let newLine = line;
		if (newLine.includes(marker)) {
			newLine = insertStringAfterMarkerInString(line, lineMarker, textToInsert);
			newLines.push(newLine);
		} else {
			newLines.push(line);
		}
	}
	const newContent = tools.convertLinesToStringBlock(newLines);
	tools.createFile(pathAndFileName, newContent);

};