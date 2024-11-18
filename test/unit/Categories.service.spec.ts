import { beforeEach, describe, it } from "mocha";
import sinon, { assert } from "sinon";
import { Query } from "mongoose";

import Category from "../../src/models/Category.model";
import CategoriesService from "../../src/services/Categories.service";
import ICategory from "../../src/models/ICategory";

describe("CategoriesService Tests", () => {
    let CategoriesServiceInstance: CategoriesService;

    beforeEach(() => {
        CategoriesServiceInstance = new CategoriesService();
    });

    describe("getCategories", () => {
        it("should call find on the Category model", async () => {
            const findMock = sinon.stub(Category, "find");
            findMock.returns({
                exec: sinon.stub().resolves([]),
            } as unknown as Query<ICategory[], ICategory>);

            await CategoriesServiceInstance.getCategories();

            assert.calledOnce(findMock);
        });
    });
});
