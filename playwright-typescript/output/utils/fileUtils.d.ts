declare function writeDataToFile(filename: string, data: string, encoding?: BufferEncoding): Promise<void>;
declare function readDataToFile(filename: string, encoding?: BufferEncoding): Promise<string | undefined>;
declare function readCSV(filename: string, encoding?: BufferEncoding): Record<string, string>[];
export { writeDataToFile, readDataToFile, readCSV };
//# sourceMappingURL=fileUtils.d.ts.map