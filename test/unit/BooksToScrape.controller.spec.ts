import { Request, Response } from "express";
import fs from "fs/promises";
import { describe, it, beforeEach } from "mocha";
import path from "path";
import sinon, { assert } from "sinon";
import { fileURLToPath } from "url";

import BooksToScrapeController from "../../src/controllers/BooksToScrape.controller";
import ErrorMessages from "../../src/constants/ErrorMessages";

describe("BooksToScrapeController Tests", () => {
    let controller: BooksToScrapeController;
    let req: Partial<Request>;
    let res: Partial<Response>;

    beforeEach(() => {
        controller = new BooksToScrapeController();
        req = {};
        res = {
            json: sinon.spy(),
            status: sinon.stub().returnsThis(),
            sendFile: sinon.spy(),
            send: sinon.spy(),
        };
    });

    describe("getHomePage tests", () => {
        it("should send the index.html file", async () => {
            // Arrange
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const HOME_PAGE_PATH = "../../public/index.html";
            const filePath = path.join(__dirname, HOME_PAGE_PATH);
            sinon.stub(fs, "access").resolves();
            // Act
            await controller.getHomePage(req as Request, res as Response);
            // Assert
            assert.calledOnce(res.sendFile as sinon.SinonStub);
            assert.calledWith(res.sendFile as sinon.SinonStub, filePath);
            // Restore the stubbed method
            (fs.access as unknown as sinon.SinonStub).restore();
        });

        it("should return 404 if the file does not exist", async () => {
            // Arrange
            sinon.stub(fs, "access").rejects(new Error("File not found"));
            // Act
            await controller.getHomePage(req as Request, res as Response);
            // Assert
            sinon.assert.calledOnce(res.status as sinon.SinonStub);
            sinon.assert.calledWith(res.status as sinon.SinonStub, 404);
            sinon.assert.calledOnce(res.send as sinon.SinonStub);
            sinon.assert.calledWith(
                res.send as sinon.SinonStub,
                ErrorMessages.FILE_NOT_FOUND
            );
            // Restore the stubbed method
            (fs.access as unknown as sinon.SinonStub).restore();
        });
    });
});
