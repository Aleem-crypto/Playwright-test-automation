"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsPage = void 0;
const test_1 = require("@playwright/test");
const fileUtils_1 = require("../utils/fileUtils");
class OrderDetailsPage {
    page;
    orderStatus;
    orderHeading;
    constructor(page) {
        this.page = page;
        this.orderStatus = page.locator("#order-detail-status");
        this.orderHeading = page.locator("order - detail - heading");
    }
    async checkIfOrderShowsProcessing(status) {
        await (0, test_1.expect)(this.orderStatus).toHaveText(status);
    }
    async checkOrderID(filename) {
        const ord = await (0, fileUtils_1.readDataToFile)(filename);
        if (ord === undefined) {
            throw new Error(`Unable to read order ID from ${filename}`);
        }
        const orderID = ord.trim();
        await (0, test_1.expect)(this.orderHeading).toHaveText(orderID);
    }
}
exports.OrderDetailsPage = OrderDetailsPage;
//# sourceMappingURL=OrderDetailsPage.js.map