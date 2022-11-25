import { ContinueStatement } from "typescript";
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

    getHeaders(index: number): string[] {
        const content = this.fileReader(index).split("\n");
        return content[0].split(",");
    }

    getHeadersContent(index: number): string[] {
        const content = this.fileReader(index).split("\n");
        const headersContent = new Array;
        for (let i = 1; i < content.length - 1; i++) {
            headersContent.push(content[i].split(","))
        }
        return headersContent;
    }
}