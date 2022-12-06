
import { FileChecker } from "./FileContentChecker";

const fs = require("fs");

export class CsvToJson {
    

    constructor(private devsArray: string[][]) {
        this.devsArray = devsArray;
    }

    generateObject(): string {
        let array = [];
        for (let dev of this.devsArray) {
            let devData: any = {}
            devData["name"] = dev[0]
            devData["stack"] = dev[1]
            array.push(devData)
        }
        let json = JSON.stringify(array);
        return json;
    }

    generateFile() {
        const json = this.generateObject();
        fs.writeFileSync("src/json/exemplo.json", json)
    }
}