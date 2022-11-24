const fs = require("fs");

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
            if (files.length == 0) {
                throw new Error("Directory is empty!")
            }
        }
        return files;
       }
}