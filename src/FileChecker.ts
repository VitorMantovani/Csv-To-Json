import { ContinueStatement } from "typescript";
import { DirectoryChecker } from "./DirectoryChecker";

const fs = require("fs");
const path = require("path");
const BASE_PATH = "src/data";

export class FileChecker {

    private csvFiles: string[];

    constructor(files: string[]) {
        this.csvFiles = files;
    }

    fileReader(): string {
        const files = this.csvFiles;
        let fileData = ""
        for (let i = 0; i < files.length; i++) {
            const fileRelativePath = path.resolve(BASE_PATH, files[i]);
            let data = fs.readFileSync(fileRelativePath).toString()
            if (data.length == 0) {
                throw new Error("File is empty!")
            }
            fileData = data
        }
        return fileData;
    }


    getHeaders(): string[] {
        const content = this.fileReader().split("\n");
        return content[0].split(",");
    }

    getHeadersContent(): string[] {
        const content = this.fileReader().split("\n");
        const headersContent = new Array;
        for (let i = 1; i < content.length - 1; i++) {
            headersContent.push(content[i].split(","))
        }
        return headersContent;
    }
}