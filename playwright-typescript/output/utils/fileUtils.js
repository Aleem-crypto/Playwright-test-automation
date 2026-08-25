"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataToFile = writeDataToFile;
exports.readDataToFile = readDataToFile;
exports.readCSV = readCSV;
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const sync_1 = require("csv-parse/sync");
async function writeDataToFile(filename, data, encoding = "utf8") {
    try {
        const filepath = path_1.default.join(process.cwd(), "testdata", filename);
        await promises_1.default.writeFile(filepath, data, encoding);
        console.log(`File written successfully ${filename}`);
    }
    catch (error) {
        console.log(`Error in file writing ${filename}`);
    }
}
async function readDataToFile(filename, encoding = "utf8") {
    try {
        const filepath = path_1.default.join(process.cwd(), "testdata", filename);
        const data = fs_1.default.readFileSync(filepath, encoding);
        console.log(`File read successfully ${filename}`);
        return data;
    }
    catch (error) {
        console.log(`Error in file reading ${filename}`);
        return undefined;
    }
}
function readCSV(filename, encoding = "utf8") {
    try {
        const filepath = path_1.default.join(process.cwd(), "testdata", filename);
        const csvdata = fs_1.default.readFileSync(filepath, encoding);
        return (0, sync_1.parse)(csvdata, {
            columns: true,
            skip_empty_lines: true
        });
    }
    catch (error) {
        console.log(`Error in file reading ${filename}`);
        return [];
    }
}
//# sourceMappingURL=fileUtils.js.map