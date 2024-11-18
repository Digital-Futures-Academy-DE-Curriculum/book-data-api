import { Router } from "express";

import CategoryController from "@controllers/Category.controller";

export default class Category {
    #router: Router;
    #controller: CategoryController;

    constructor(controller = new CategoryController()) {
        this.#controller = controller;
        this.#router = Router();
        this.#initialiseRoutes();
    }

    #initialiseRoutes: () => void = () => {
        this.#router.get("/:categoryId", this.#controller.getCategoryBookCount);
        this.#router.get(
            "/:categoryId/books",
            this.#controller.getCategoryBooksAndCount
        );
        this.#router.get(
            "/:categoryId/books/prices",
            this.#controller.getCategoryBookPrices
        );
    };

    getRouter: () => Router = () => {
        return this.#router;
    };
}
