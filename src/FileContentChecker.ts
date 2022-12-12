import fs from "fs";
import path from "path";
const BASE_PATH = "src/data";

export class FileContentChecker {
  constructor(private csvFile: string) {}

  fileReader(): string {
    const fileRelativePath = path.resolve(BASE_PATH, this.csvFile);
    let data = fs.readFileSync(fileRelativePath, 'utf8');
    const hasData = data.length > 0;
    try {
      if (!hasData) throw new Error("File is empty!");
      return data;
    } catch (error) {
      throw error;
    }
  }

  getHeaders(): string[] {
    const content = this.fileReader().split("\n");
    return content[0].split(",");
  }

  getCsvContent(): Array<string[]> {
    const content = this.fileReader().split("\n");
    content.shift();
    const csvContent: Array<string[]> = [];
    content.filter(Boolean).forEach((row) => {
      csvContent.push(row.split(","));
    });
    return csvContent;
  }
}
