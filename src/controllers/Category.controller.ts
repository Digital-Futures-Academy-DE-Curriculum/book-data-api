import { Request, Response } from "express";
import mongoose from "mongoose";

import CategoryService from "../services/Category.service.js";

import ErrorMessages from "../constants/ErrorMessages.js";

export default class CategoryController {
    #service: CategoryService;

    constructor(service = new CategoryService()) {
        this.#service = service;
    }

    getCategoryBookCount: (req: Request, res: Response) => Promise<void> =
        async (req, res) => {
            try {
                if (!req.params.categoryId) {
                    throw new Error(ErrorMessages.CATEGORY_ID_REQUIRED);
                }
                const categoryId = req.params.categoryId;
                res.json(await this.#service.getCategoryBookCount(categoryId));
            } catch (error: unknown) {
                const statusCode = (error as Error).message.includes(
                    ErrorMessages.CATEGORY_ID_REQUIRED
                )
                    ? 404
                    : 500;
                res.status(statusCode).json({
                    message: (error as Error).message,
                });
            }
        };

    getCategoryBooksAndCount: (req: Request, res: Response) => Promise<void> =
        async (req, res) => {
            try {
                const categoryId = req.params.categoryId;
                if (!mongoose.Types.ObjectId.isValid(categoryId)) {
                    throw new Error(ErrorMessages.INVALID_CATEGORY_ID);
                }
                res.json(
                    await this.#service.getCategoryBooksAndCount(categoryId)
                );
            } catch (error: unknown) {
                const statusCode = (error as Error).message.includes(
                    ErrorMessages.INVALID_CATEGORY_ID
                )
                    ? 404
                    : 500;
                res.status(statusCode).json({
                    message: (error as Error).message,
                });
            }
        };

    getCategoryBookPrices: (req: Request, res: Response) => Promise<void> =
        async (req, res) => {
            try {
                const categoryId = req.params.categoryId;
                res.json(await this.#service.getCategoryBookPrices(categoryId));
            } catch (error: unknown) {
                res.status(500).json({ message: (error as Error).message });
            }
        };
}
