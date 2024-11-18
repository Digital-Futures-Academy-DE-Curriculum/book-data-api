import { expect } from "chai";
import { afterEach, beforeEach, describe, it } from "mocha";
import sinon, { assert } from "sinon";
import { Query } from "mongoose";

import Category from "../../../src/models/Category.model";
import CategoriesService from "../../../src/services/Categories.service";
import ErrorMessages from "../../../src/constants/ErrorMessages";
import ICategory from "../../../src/models/ICategory";
import testData from "../../data/testData";

describe("CategoriesService Tests", () => {
    let categoriesServiceInstance: CategoriesService;
    let resolvedCategories: ICategory[] = [
        testData[0] as ICategory,
        testData[1] as ICategory,
    ];
    let emptyCategories: ICategory[] = [];

    beforeEach(() => {
        categoriesServiceInstance = new CategoriesService();
    });

    describe("getCategories", () => {
        let findMock: sinon.SinonStub<
            [
                filter?: Record<string, unknown>,
                projection?: Record<string, unknown>,
                options?: Record<string, unknown>
            ],
            Query<ICategory[], ICategory>
        >;

        beforeEach(() => {
            findMock = sinon.stub(Category, "find") as sinon.SinonStub<
                [
                    filter?: Record<string, unknown>,
                    projection?: Record<string, unknown>,
                    options?: Record<string, unknown>
                ],
                Query<ICategory[], ICategory>
            >;
        });

        afterEach(() => {
            findMock.restore();
        });

        it("should call find on the Category model", async () => {
            findMock.returns({
                exec: sinon.stub().resolves(emptyCategories),
            } as unknown as Query<ICategory[], ICategory>);

            await categoriesServiceInstance.getCategories();

            assert.calledOnce(findMock);

            findMock.restore();
        });

        it("should return the result of calling find on the Categories model", async () => {
            findMock.resolves(resolvedCategories);

            const result = await categoriesServiceInstance.getCategories();

            expect(result).to.equal(resolvedCategories);
        });

        it("should throw an error if find errors out", async () => {
            findMock.rejects({
                message: ErrorMessages.FETCH_CATEGORIES_ERROR,
            } as Error);

            try {
                await categoriesServiceInstance.getCategories();
            } catch (error) {
                expect((error as Error).message).to.equal(
                    ErrorMessages.FETCH_CATEGORIES_ERROR
                );
            }
        });
    });

    // Additional tests for other methods
    describe("getCategoriesBooksAndCount", () => {
        let findMock: sinon.SinonStub;

        beforeEach(() => {
            findMock = sinon.stub(Category, "find");
        });

        afterEach(() => {
            findMock.restore();
        });

        it("should return categories with books and their count", async () => {
            findMock.resolves(resolvedCategories);

            const result =
                await categoriesServiceInstance.getCategoriesBooksAndCount();

            expect(result).to.have.property(testData[0].category as string);
            expect(
                result[testData[0].category as string].number_of_books
            ).to.equal(testData[0].number_of_books);
            expect(result[testData[0].category as string].books).to.deep.equal(
                testData[0].books
            );
        });

        it("should throw an error if find errors out", async () => {
            findMock.rejects({
                message: ErrorMessages.FETCH_CATEGORIES_AND_BOOKS_ERROR,
            } as Error);

            try {
                await categoriesServiceInstance.getCategoriesBooksAndCount();
            } catch (error) {
                expect((error as Error).message).to.equal(
                    ErrorMessages.FETCH_CATEGORIES_AND_BOOKS_ERROR
                );
            }
        });
    });

    describe("getCategoriesBookCount", () => {
        let findMock: sinon.SinonStub;

        beforeEach(() => {
            findMock = sinon.stub(Category, "find");
        });

        afterEach(() => {
            findMock.restore();
        });

        it("should return categories with their book count", async () => {
            findMock.resolves(resolvedCategories);

            const result =
                await categoriesServiceInstance.getCategoriesBookCount();

            expect(result).to.have.property(testData[0].category as string);
            expect(result[testData[0].category as string]).to.equal(
                testData[0].number_of_books
            );
        });

        it("should throw an error if find errors out", async () => {
            findMock.rejects({
                message: ErrorMessages.FETCH_CATEGORIES_BOOK_COUNT_ERROR,
            } as Error);

            try {
                await categoriesServiceInstance.getCategoriesBookCount();
            } catch (error) {
                expect((error as Error).message).to.equal(
                    ErrorMessages.FETCH_CATEGORIES_BOOK_COUNT_ERROR
                );
            }
        });
    });

    describe("getCategoriesBookCountAndPrices", () => {
        let findMock: sinon.SinonStub;

        beforeEach(() => {
            findMock = sinon.stub(Category, "find");
        });

        afterEach(() => {
            findMock.restore();
        });

        it("should return categories with their book count and prices", async () => {
            findMock.resolves(resolvedCategories);

            const result =
                await categoriesServiceInstance.getCategoriesBookCountAndPrices();

            expect(result).to.have.property(testData[0].category as string);
            expect(
                result[testData[0].category as string].number_of_books
            ).to.equal(testData[0].number_of_books);
            expect(
                result[testData[0].category as string].book_prices
            ).to.deep.equal(testData[0].books?.map((book) => book.price) ?? []);
        });

        it("should throw an error if find errors out", async () => {
            findMock.rejects({
                message: ErrorMessages.CATEGORY_BOOKS_AND_COUNT_ERROR,
            } as Error);

            try {
                await categoriesServiceInstance.getCategoriesBookCountAndPrices();
            } catch (error) {
                expect((error as Error).message).to.equal(
                    ErrorMessages.CATEGORY_BOOKS_AND_COUNT_ERROR
                );
            }
        });
    });
});
