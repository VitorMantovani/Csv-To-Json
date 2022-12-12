
import { FileContentChecker } from "./FileContentChecker";

import fs from "fs";

type JsonObject = Record<string, unknown>

export class CsvToJson {
    
    constructor(private headers: string[], private content: string[][]) {
    }

    generateJson(): string{
        const json = this.content.reduce<JsonObject[]>((acc, row) => {
            const object = row.reduce<JsonObject>((acc, cur, idx) => {
                acc[this.headers[idx]] = cur;
                return acc;
            }, {});
            return [...acc, object];
        }, []); 
        return JSON.stringify(json, null, 2);
    }

    generateFile(jsonDirectoryPath: string, fileName: string) {
        const json = this.generateJson();
        fs.writeFileSync(`${jsonDirectoryPath}/${fileName}.json`, json)
    }
}