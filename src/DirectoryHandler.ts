const fs = require("fs");
const path = require("path");

export class DirectoryHandler {

    constructor(private directoryPath: string, private jsonDirectoryPath: string) {
    }

    isDirectoryCreated(): boolean{
        const directoryExists = fs.existsSync(this.directoryPath);
        const createDirectory = () => fs.mkdirSync(this.directoryPath);
        return !directoryExists ? createDirectory() : true
    }

    getAllFilesFromDirectory(): string[]{
    this.isDirectoryCreated();
    let files: string[] = fs.readdirSync(this.directoryPath)
    const isDirectoryEmpty = files.length === 0
    if (isDirectoryEmpty) throw new Error("Directory is empty!")
    
    return files;
    }

    getCsvFiles(): string[] {
        const files = this.getAllFilesFromDirectory();
        const csvFiles = files.reduce((acc, cur): any  => {
            path.extname(cur).includes(".csv");
            return [...acc, cur];
        }, []);
        const hasCsvFiles = csvFiles.length > 0
        if (!hasCsvFiles) throw new Error("Directory has no .csv files!")
        return csvFiles;
    }

    generateJsonDirectory() {
        if (!fs.existsSync(this.jsonDirectoryPath)) {
            fs.mkdirSync(this.jsonDirectoryPath)
        }
    }
}