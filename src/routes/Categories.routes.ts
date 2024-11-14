import { Router } from "express";

import CategoriesController from "../controllers/Categories.controller";

export default class Categories {
    #router: Router;
    #controller: CategoriesController;

    constructor(controller = new CategoriesController()) {
        this.#controller = controller;
        this.#router = Router();
        this.#initialiseRoutes();
    }

    #initialiseRoutes: () => void = () => {
        this.#router.get("/", this.#controller.getCategories);
        this.#router.get("/books", this.#controller.getCategoriesBooksAndCount);
        this.#router.get(
            "/books/count",
            this.#controller.getCategoriesBookCount
        );
        this.#router.get(
            "/books/prices",
            this.#controller.getCategoriesBookCountAndPrices
        );
    };

    getRouter: () => Router = () => {
        return this.#router;
    };
}
