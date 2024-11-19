import express, { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Server as HttpServer } from "http";

import BooksToScrape from "../routes/BooksToScrape.routes.js";
import Categories from "../routes/Categories.routes.js";
import Category from "../routes/Category.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class Server {
    #app: express.Application;
    #host: string;
    #port: number;
    #homeRouter: Router;
    #categoriesRouter: Router;
    #categoryRouter: Router;
    #server: HttpServer | null;

    constructor(
        port: number | undefined = 3000,
        host: string | undefined = `localhost`,
        routers: {
            homeRouter: Router;
            categoriesRouter: Router;
            categoryRouter: Router;
        } = {
            homeRouter: new BooksToScrape().getRouter(),
            categoriesRouter: new Categories().getRouter(),
            categoryRouter: new Category().getRouter(),
        }
    ) {
        this.#app = express();
        this.#host = host;
        this.#port = port;
        this.#homeRouter = routers.homeRouter;
        this.#categoriesRouter = routers.categoriesRouter;
        this.#categoryRouter = routers.categoryRouter;
        this.#server = null;
    }

    getApp: () => express.Application = () => this.#app;

    start: () => void = () => {
        this.#app.use("/", this.#homeRouter);
        this.#app.use("/categories", this.#categoriesRouter);
        this.#app.use("/category", this.#categoryRouter);
        this.#server = this.#app.listen(this.#port, this.#host, () => {
            console.log(
                `Server listening on http://${this.#host}:${this.#port}`
            );
        });
        this.#app.use(express.json());
        this.#app.use(express.static(path.join(__dirname, "../../public")));
    };

    close: () => void = () => {
        if (this.#server) this.#server.close();
    };
}
