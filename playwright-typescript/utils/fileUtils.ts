import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

async function writeDataToFile(
    filename: string,
    data: string,
    encoding: BufferEncoding = "utf8"
): Promise<void> {
    try {
        const filepath = path.join(process.cwd(), "testdata", filename);
        await fsPromises.writeFile(filepath, data, encoding);
        console.log(`File written successfully ${filename}`);
    } catch (error) {
        console.log(`Error in file writing ${filename}`);
    }
}

async function readDataToFile(
    filename: string,
    encoding: BufferEncoding = "utf8"
): Promise<string | undefined> {
    try {
        const filepath = path.join(process.cwd(), "testdata", filename);
        const data = fs.readFileSync(filepath, encoding);
        console.log(`File read successfully ${filename}`);
        return data;
    } catch (error) {
        console.log(`Error in file reading ${filename}`);
        return undefined;
    }
}

function readCSV(
    filename: string,
    encoding: BufferEncoding = "utf8"
): Record<string, string>[] {
    try {
        const filepath = path.join(process.cwd(), "testdata", filename);
        const csvdata = fs.readFileSync(filepath, encoding);
        return parse(csvdata, {
            columns: true,
            skip_empty_lines: true
        }) as Record<string, string>[];
    } catch (error) {
        console.log(`Error in file reading ${filename}`);
        return [];
    }
}

export { writeDataToFile, readDataToFile, readCSV };