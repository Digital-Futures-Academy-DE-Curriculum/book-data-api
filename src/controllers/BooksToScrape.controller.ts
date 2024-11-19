import { Request, Response } from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import ErrorMessages from "../constants/ErrorMessages.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const HOME_PAGE_PATH = path.join(process.cwd(), "public", "index.html");

export default class BooksToScrapeController {
    getHomePage: (req: Request, res: Response) => void = async (req, res) => {
        try {
            await fs.access(HOME_PAGE_PATH, fs.constants.F_OK);
            res.sendFile(HOME_PAGE_PATH);
        } catch {
            res.status(404).send(ErrorMessages.FILE_NOT_FOUND);
        }
    };
}
