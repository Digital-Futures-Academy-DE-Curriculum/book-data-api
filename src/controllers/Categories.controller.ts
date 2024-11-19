import { Request, Response } from "express";

import CategoriesService from "../services/Categories.service.js";

export default class CategoriesController {
    #service: CategoriesService;

    constructor(service = new CategoriesService()) {
        this.#service = service;
    }

    getCategories: (req: Request, res: Response) => Promise<void> = async (
        req,
        res
    ) => {
        try {
            res.json(await this.#service.getCategories());
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    };

    getCategoriesBookCount: (req: Request, res: Response) => Promise<void> =
        async (req, res) => {
            try {
                res.json(await this.#service.getCategoriesBookCount());
            } catch (error: unknown) {
                res.status(500).json({ message: (error as Error).message });
            }
        };

    getCategoriesBooksAndCount: (req: Request, res: Response) => Promise<void> =
        async (req, res) => {
            try {
                res.json(await this.#service.getCategoriesBooksAndCount());
            } catch (error: unknown) {
                res.status(500).json({ message: (error as Error).message });
            }
        };

    getCategoriesBookCountAndPrices: (
        req: Request,
        res: Response
    ) => Promise<void> = async (req, res) => {
        try {
            res.json(await this.#service.getCategoriesBookCountAndPrices());
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    };
}
