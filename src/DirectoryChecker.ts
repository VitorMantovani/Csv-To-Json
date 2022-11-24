const fs = require("fs");
const path = require("path");

export class DirectoryChecker {

    private directoryPath: string;

    constructor(dirPath: string) {
        this.directoryPath = dirPath;
    }

    isDirectoryCreated(): Boolean{
        if (!fs.existsSync(this.directoryPath)) throw new Error("Directory does not exists")
        return true
       }

       isDirectoryWithFiles(): string[]{
        const files = fs.readdirSync(this.directoryPath)
        if (this.isDirectoryCreated()) {
            if (files.length == 0) throw new Error("Directory is empty!")
        }
        return files;
       }

       isFilesCsv(): string[] {
        const files = this.isDirectoryWithFiles();
        const csvFiles = new Array();
        for (let file of files) {
            if(path.extname(file).includes(".csv")) csvFiles.push(file)
                if (csvFiles.length == 0) throw new Error("Directory has no .csv files!")
         }
        return csvFiles;
       }
}