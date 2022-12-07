const fs = require("fs");
const path = require("path");

export class DirectoryHandler {
  constructor(
    private directoryPath: string,
    private jsonDirectoryPath: string
  ) {}

  isDirectoryCreated(): boolean {
    const directoryExists = fs.existsSync(this.directoryPath);
    const createDirectory = () => fs.mkdirSync(this.directoryPath);
    return !directoryExists ? createDirectory() : true;
  }

  getAllFilesFromDirectory(): string[] {
    this.isDirectoryCreated();
    let files: string[] = fs.readdirSync(this.directoryPath);
    const isDirectoryEmpty = files.length === 0;
    try {
      if (isDirectoryEmpty) throw new Error("Directory is empty!");
      return files;
    } catch (error) {
      throw error;
    }
  }

  getCsvFiles(): string[] {
    const files = this.getAllFilesFromDirectory();
    const csvFiles = files.reduce<string[]>((acc, cur) => {
      path.extname(cur).includes(".csv");
      return [...acc, cur];
    }, []);
    const hasCsvFiles = csvFiles.length > 0;
    try {
      if (!hasCsvFiles) throw new Error("Directory has no .csv files!");
      return csvFiles;
    } catch (error) {
      throw error;
    }
  }

  generateJsonDirectory() {
    const directoryExists = fs.existsSync(this.jsonDirectoryPath);
    return !directoryExists && fs.mkdirSync(this.jsonDirectoryPath);
  }
}
