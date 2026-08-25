"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyOrdersPage = void 0;
const fileUtils_1 = require("../utils/fileUtils");
class MyOrdersPage {
    page;
    orderCardDiv;
    constructor(page) {
        this.page = page;
        this.orderCardDiv = page.locator(".order-card");
    }
    async clickOnOrderFromFile(filename) {
        const ord = await (0, fileUtils_1.readDataToFile)(filename);
        if (ord === undefined) {
            throw new Error(`Unable to read order ID from ${filename}`);
        }
        const orderID = ord.trim();
        await this.orderCardDiv.filter({ hasText: orderID }).getByRole("link").click();
    }
}
exports.MyOrdersPage = MyOrdersPage;
//# sourceMappingURL=MyOrdersPage.js.map