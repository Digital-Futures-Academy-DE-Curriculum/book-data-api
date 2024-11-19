import { Router } from "express";

import BooksToScrapeController from "../controllers/BooksToScrape.controller.js";

export default class BooksToScrape {
    #router: Router;
    #controller: BooksToScrapeController;

    constructor(controller = new BooksToScrapeController()) {
        this.#controller = controller;
        this.#router = Router();
        this.#initialiseRoutes();
    }

    #initialiseRoutes: () => void = () => {
        this.#router.get("/", this.#controller.getHomePage);
    };

    getRouter: () => Router = () => {
        return this.#router;
    };
}
