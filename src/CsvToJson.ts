
import { FileContentChecker } from "./FileContentChecker";

const fs = require("fs");

export class CsvToJson {
    
    constructor(private headers: string[], private content: string[][]) {
    }

    generateObject(): string {
        let arrayOfObjects = [];
        for(let i in this.content) {
            let object: any = {};
            for (let j in this.headers) {
                object[this.headers[j]] = this.content[i][j]
            }
            arrayOfObjects.push(object)
        } 
        return JSON.stringify(arrayOfObjects);
    }

    generateFile() {
        const json = this.generateObject();
        fs.writeFileSync("src/json/exemplo.json", json)
    }
}