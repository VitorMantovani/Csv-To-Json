
import { FileChecker } from "./FileChecker";

const fs = require("fs");

export class FileConverter {
    
    private outputPath = "src/json/";

    constructor(private devsArray: string[]) {
        this.devsArray = devsArray;
    }

    generateObject(): string {
        let array = new Array()
        for (let dev of this.devsArray) {
            let devData: any = {}
            devData["name"] = dev[0]
            devData["stack"] = dev[1]
            array.push(devData)
        }
        let json = JSON.stringify(array);
        return json;
    }

    generateDirectory() {
        fs.mkdirSync(this.outputPath)
    }

    generateFile() {
        const json = this.generateObject();
        fs.writeFileSync(`${this.outputPath}`, json)
    }
}