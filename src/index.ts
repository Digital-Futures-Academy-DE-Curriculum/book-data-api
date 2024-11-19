import Config from "./config/Config.js";
import Database from "./db/Database.js";
import Server from "./server/Server.js";

Config.load();

const PORT: number | undefined = process.env.PORT
    ? parseInt(process.env.PORT)
    : 10000;
const HOST: string | undefined = process.env.HOST;
const DB_URI: string | undefined = process.env.DB_URI;

const server: Server = new Server(PORT, HOST);

const database: Database = new Database(DB_URI);

server.start();

await database.connect();
