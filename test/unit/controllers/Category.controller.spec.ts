import { Request, Response } from "express";
import { describe, it, beforeEach } from "mocha";
import sinon, { assert } from "sinon";

import CategoryController from "../../../src/controllers/Category.controller";
import CategoryService from "../../../src/services/Category.service";
import ErrorMessages from "../../../src/constants/ErrorMessages";
import testData from "../../data/testData";

describe("CategoryController Tests", () => {
    let controller: CategoryController;
    let services: CategoryService;
    let reqWithParams: Partial<Request>;
    let res: Partial<Response>;
    const validTestId = "672e34ec6b0fdc06d0850360";
    const invalidTestId = "testId123";

    beforeEach(() => {
        services = {
            getCategoryBookCount: sinon.stub(),
            getCategoryBooksAndCount: sinon.stub(),
            getCategoryBookPrices: sinon.stub(),
        };
        controller = new CategoryController(services);
        reqWithParams = {
            params: {
                categoryId: validTestId,
            },
        };
        res = {
            json: sinon.spy(),
            status: sinon.stub().returnsThis(),
            sendFile: sinon.spy(),
            send: sinon.spy(),
        };
    });

    describe("getCategoryBookCount", () => {
        it("should call the service with the id in the request", async () => {
            // Arrange
            // Act
            await controller.getCategoryBookCount(
                reqWithParams as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(services.getCategoryBookCount as sinon.SinonStub);
            assert.calledWith(
                services.getCategoryBookCount as sinon.SinonStub,
                validTestId
            );
        });

        it("should return the object returned from the service", async () => {
            // Arrange
            const categoryBookCount = {
                [testData[0].category as string]: testData[0].number_of_books,
            };

            (services.getCategoryBookCount as sinon.SinonStub).resolves(
                categoryBookCount
            );

            // Act
            await controller.getCategoryBookCount(
                reqWithParams as Request,
                res as Response
            );

            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, categoryBookCount);
        });

        it("should return 500 if the service throws an error", async () => {
            // Arrange
            (services.getCategoryBookCount as sinon.SinonStub).rejects({
                message: "Some error",
            } as Error);

            // Act
            await controller.getCategoryBookCount(
                reqWithParams as Request,
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
    });

    describe("getCategoryBooksAndCount", () => {
        it("should call the service with the id in the request", async () => {
            // Act
            await controller.getCategoryBooksAndCount(
                reqWithParams as Request,
                res as Response
            );
            // Assert
            assert.calledOnce(
                services.getCategoryBooksAndCount as sinon.SinonStub
            );
            assert.calledWith(
                services.getCategoryBooksAndCount as sinon.SinonStub,
                validTestId
            );
        });

        it("should return the object returned from the service", async () => {
            // Arrange
            const categoryBooksAndCount = {
                [testData[0].category as string]: {
                    number_of_books: testData[0].number_of_books,
                    books: testData[0].books,
                },
            };
            (services.getCategoryBooksAndCount as sinon.SinonStub).resolves(
                categoryBooksAndCount
            );
            // Act
            await controller.getCategoryBooksAndCount(
                reqWithParams as Request,
                res as Response
            );
            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(
                res.json as sinon.SinonStub,
                categoryBooksAndCount
            );
        });

        it("should return an empty array if no categories are found", async () => {
            // Arrange
            (services.getCategoryBooksAndCount as sinon.SinonStub).resolves([]);
            // Act
            await controller.getCategoryBooksAndCount(
                reqWithParams as Request,
                res as Response
            );
            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, []);
        });

        it("should return 500 if the service throws an error", async () => {
            // Arrange
            (services.getCategoryBooksAndCount as sinon.SinonStub).rejects({
                message: "Some error",
            } as Error);
            // Act
            await controller.getCategoryBooksAndCount(
                reqWithParams as Request,
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

        it("should return a 404 if category id is invalid", async () => {
            // Arrange
            if (reqWithParams.params) {
                reqWithParams.params.categoryId = invalidTestId;
            }
            // Act
            await controller.getCategoryBooksAndCount(
                reqWithParams as Request,
                res as Response
            );
            // Assert
            assert.calledOnce(res.status as sinon.SinonStub);
            assert.calledWith(res.status as sinon.SinonStub, 404);
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, {
                message: ErrorMessages.INVALID_CATEGORY_ID,
            });
        });
    });

    describe("getCategoryBookPrices", () => {
        it("should call the service with the id in the request", async () => {
            // Act
            await controller.getCategoryBookPrices(
                reqWithParams as Request,
                res as Response
            );
            // Assert
            assert.calledOnce(
                services.getCategoryBookPrices as sinon.SinonStub
            );
            assert.calledWith(
                services.getCategoryBookPrices as sinon.SinonStub,
                validTestId
            );
        });

        it("should return the object returned from the service", async () => {
            // Arrange
            const categoryBookPrices = {
                [testData[0].category as string]: {
                    number_of_books: testData[0].number_of_books,
                    book_prices:
                        (testData[0].books?.map(
                            (book) => book.price
                        ) as number[]) || [],
                },
            };
            (services.getCategoryBookPrices as sinon.SinonStub).resolves(
                categoryBookPrices
            );
            // Act
            await controller.getCategoryBookPrices(
                reqWithParams as Request,
                res as Response
            );
            // Assert
            assert.calledOnce(res.json as sinon.SinonStub);
            assert.calledWith(res.json as sinon.SinonStub, categoryBookPrices);
        });

        it("should return 500 if the service throws an error", async () => {
            // Arrange
            (services.getCategoryBookPrices as sinon.SinonStub).rejects({
                message: "Some error",
            } as Error);
            // Act
            await controller.getCategoryBookPrices(
                reqWithParams as Request,
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
    });
});
