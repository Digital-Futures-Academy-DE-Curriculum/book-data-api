import process from "process";

import Config from "@config/Config";
import Database from "@db/Database";
import Server from "@server/Server";

Config.load();

const PORT: number | undefined = process.env.PORT
    ? parseInt(process.env.PORT)
    : undefined;
const HOST: string | undefined = process.env.HOST;
const DB_URI: string | undefined = process.env.DB_URI;

const server: Server = new Server(PORT, HOST);

const database: Database = new Database(DB_URI);

server.start();

await database.connect();
