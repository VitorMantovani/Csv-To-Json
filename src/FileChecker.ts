import { DirectoryChecker } from "./DirectoryChecker";

const fs = require("fs");
const path = require("path");
const BASE_PATH = "src/data";

export class FileChecker {
    private directoryChecker: DirectoryChecker;

    constructor(checker: DirectoryChecker) {
        this.directoryChecker = checker;
    }

    fileReader(index: number): string {
        const files = this.directoryChecker.isFilesCsv();
        const fileRelativePath = path.resolve(BASE_PATH, files[index]);
        const fileData = fs.readFileSync(fileRelativePath).toString()
        if (fileData.length == 0) {
            throw new Error("File is empty!")
        }
        return fileData;
    }

    // getHeaders() {
    //     const data = this.fileReader()
    // }
}