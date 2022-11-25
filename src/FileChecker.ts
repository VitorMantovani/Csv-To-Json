import { DirectoryChecker } from "./DirectoryChecker";

const fs = require("fs");

export class FileChecker {
    private directoryChecker: DirectoryChecker;

    constructor(checker: DirectoryChecker) {
        this.directoryChecker = checker;
    }

    fileReader(fileName: string): string {
        const fileData = fs.readFileSync(fileName).toString()
        if (fileData.length == 0) {
            throw new Error("File is empty!")
        }
        return fileData;
    }
}