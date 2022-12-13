import { DirectoryHandler } from "./DirectoryHandler";
import { FileContentChecker } from "./FileContentChecker";
import { CsvToJson } from "./CsvToJson";
import path from "path";
import fs from "fs";

const DIR_PATH = path.join(__dirname, "data");

const JSON_PATH = path.join(__dirname, "json");

const directoryHandler = new DirectoryHandler(DIR_PATH, JSON_PATH);

const files = directoryHandler.getCsvFiles();

files.forEach((file: string) => {
    const fileContentChecker = new FileContentChecker(file);
    const headers = fileContentChecker.getHeaders();
    const content = fileContentChecker.getCsvContent();
    const csvToJson = new CsvToJson(headers, content);
    directoryHandler.generateJsonDirectory();
    csvToJson.generateFile(JSON_PATH, path.basename(file, path.extname(file)));
});

