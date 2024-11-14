import { Request, Response } from "express";
import { describe, it, beforeEach } from "mocha";
import sinon, { assert } from "sinon";

import ICategory from "../../src/models/ICategory";
import CategoriesController from "../../src/controllers/Categories.controller";
import CategoriesService from "../../src/services/Categories.service";
import testData from "../data/testData";

describe("CategoriesController Tests", () => {
    let controller: CategoriesController;
    let services: CategoriesService;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        services = {
            getCategories: sinon.stub(),
            getCategoriesBooksAndCount: sinon.stub(),
            getCategoriesBookCount: sinon.stub(),
            getCategoriesBookCountAndPrices: sinon.stub(),
        };
        controller = new CategoriesController(services);
        req = {};

        res = {
            json: sinon.spy(),
            status: sinon.stub().returnsThis(),
        };
    });

    describe("getCategories tests", () => {
        it("should return the categories array returned from the service", async () => {
            // Arrange
            const categories: Partial<ICategory>[] = [testData[0], testData[1]];
            (services.getCategories as sinon.SinonStub).resolves(categories);

            // Act
            await controller.getCategories(req as Request, res as Response);

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, categories);
        });

        it("should return 500 if the service throws an error", async () => {
            // Arrange
            (services.getCategories as sinon.SinonStub).rejects({
                message: "Some error",
            } as Error);

            // Act
            await controller.getCategories(req as Request, res as Response);

            // Assert
            assert.calledOnce(res.status as sinon.SinonStub);
            assert.calledWith(res.status as sinon.SinonStub, 500);
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, {
                message: "Some error",
            });
        });

        it("should return an empty array if there are no categories found", async () => {
            // Arrange
            (services.getCategories as sinon.SinonStub).resolves([]);

            // Act
            await controller.getCategories(req as Request, res as Response);

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, []);
        });
    });

    describe("getCategoriesBookCount", () => {
        it("should return the object returned from the service", async () => {
            // Arrange
            const categoriesBookCount = {
                [testData[0].category as string]: testData[0].number_of_books,
                [testData[1].category as string]: testData[1].number_of_books,
            };

            (services.getCategoriesBookCount as sinon.SinonStub).resolves(
                categoriesBookCount
            );

            // Act
            await controller.getCategoriesBookCount(
                req as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, categoriesBookCount);
        });

        it("should return 500 if the service throws an error", async () => {
            // Arrange
            (services.getCategoriesBookCount as sinon.SinonStub).rejects({
                message: "Some error",
            } as Error);

            // Act
            await controller.getCategoriesBookCount(
                req as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.status as sinon.SinonStub);
            assert.calledWith(res.status as sinon.SinonStub, 500);
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, {
                message: "Some error",
            });
        });

        it("should return an empty object if there are no categories found", async () => {
            // Arrange
            (services.getCategoriesBookCount as sinon.SinonStub).resolves({});

            // Act
            await controller.getCategoriesBookCount(
                req as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, {});
        });
    });

    describe("getCategoriesBooksAndCount", () => {
        it("should return the object returned from the service", async () => {
            // Arrange
            const categoriesAndBooks = {
                [testData[0].category as string]: {
                    number_of_books: testData[0].number_of_books,
                    books: testData[0].books,
                },
                [testData[1].category as string]: {
                    number_of_books: testData[1].number_of_books,
                    books: testData[1].books,
                },
            };

            (services.getCategoriesBooksAndCount as sinon.SinonStub).resolves(
                categoriesAndBooks
            );

            // Act
            await controller.getCategoriesBooksAndCount(
                req as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, categoriesAndBooks);
        });

        it("should return 500 if the service throws an error", async () => {
            // Arrange
            (services.getCategoriesBooksAndCount as sinon.SinonStub).rejects({
                message: "Some error",
            } as Error);

            // Act
            await controller.getCategoriesBooksAndCount(
                req as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.status as sinon.SinonStub);
            assert.calledWith(res.status as sinon.SinonStub, 500);
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, {
                message: "Some error",
            });
        });

        it("should return an empty array if there are no categories found", async () => {
            // Arrange
            (services.getCategoriesBooksAndCount as sinon.SinonStub).resolves(
                []
            );

            // Act
            await controller.getCategoriesBooksAndCount(
                req as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, []);
        });
    });

    describe("getCategoriesBookCountAndPrices", () => {
        // TODO: Add tests for getCategoriesBookCountAndPrices
    });
});
