const fs = require('fs').promises;
const path = require('path');
const fileSys = require('fs');
const { parse } = require('csv-parse/sync');

async function writeDataToFile(filename, data, encoding = 'utf8') {
    try {
        const filepath = path.join(process.cwd(), 'testdata', filename);
        await fs.writeFile(filepath, data, encoding);
        console.log(`File written successfully ${filename}`);
    }
    catch (error) {
        console.log(`Error in file writing ${filename}`);
    }
}

async function readDataToFile(filename, encoding = 'utf8') {
    try {
        const filepath = path.join(process.cwd(), 'testdata', filename);
        const data = fileSys.readFileSync(filepath, encoding);
        console.log(`File read successfully ${filename}`);
        return data;
    }
    catch (error) {
        console.log(`Error in file reading ${filename}`);
    }
}

function readCSV(filename, encoding = 'utf8') {
    try {
        const filepath = path.join(process.cwd(), 'testdata', filename);
        const csvdata = fileSys.readFileSync(filepath, encoding);
        return parse(csvdata, {
            columns: true,
            skip_empty_lines: true
        });
    }
    catch (error) {
        console.log(`Error in file reading ${filename},error`);
        return [];
    }
}

module.exports = { writeDataToFile, readDataToFile, readCSV };