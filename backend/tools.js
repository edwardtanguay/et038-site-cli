import fs from 'fs';
import * as tools from './tools.js';

export const createFile = (pathAndFileName, content) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

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

export const changeLineInFile = (pathAndFileName, marker, lineMarker, textToInsert) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines = tools.convertStringBlockToLines(content);
	let newLines = [];
	for (const line of lines) {
		if (newLine.includes(marker)) {
			let newLine = line;
			newLine = newLine + ' // this is a change';
			newLines.push(newLine);
		} else {
			newLines.push(line);
		}
		lineNumber++;
	}
	const newContent = tools.convertLinesToStringBlock(newLines);
	tools.createFile(pathAndFileName, newContent);

};