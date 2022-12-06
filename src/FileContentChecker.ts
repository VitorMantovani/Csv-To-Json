import { ContinueStatement } from "typescript";
import { DirectoryHandler } from "./DirectoryHandler";

const fs = require("fs");
const path = require("path");
const BASE_PATH = "src/data";

export class FileChecker {

    constructor(private csvFile: string) {
    }


    fileReader(): string {
        const fileRelativePath = path.resolve(BASE_PATH, this.csvFile);
        let data = fs.readFileSync(fileRelativePath).toString();
        if (data.length == 0) {
            throw new Error("File is empty!")
        }
        return data;
    }


    getHeaders(): string[] {
        const content = this.fileReader().split("\n");
        return content[0].split(",");
    }

    getCsvContent(): string[][] {
        const content = this.fileReader().split("\n");
        const csvContent = [];
        for (let i = 1; i < content.length - 1; i++) {
            csvContent.push(content[i].split(","))
        }
        return csvContent;
    }









    
}