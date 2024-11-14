import process from "process";
// import { Router } from "express";

import Config from "./config/Config";
import Database from "./db/Database";
import Server from "./server/Server";
// import BooksToScrape from "./routes/BooksToScrape.routes";

Config.load();

const PORT: number | undefined = process.env.PORT
    ? parseInt(process.env.PORT)
    : undefined;
const HOST: string | undefined = process.env.HOST;
const DB_URI: string | undefined = process.env.DB_URI;

// const booksToScrapeRouter: Router = new BooksToScrape().getRouter();

const server: Server = new Server(PORT, HOST);

const database: Database = new Database(DB_URI);

server.start();

await database.connect();
