"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderConfirmationPage = void 0;
const test_1 = require("@playwright/test");
class OrderConfirmationPage {
    page;
    confirmTitleText;
    orderNumberText;
    continueShopping;
    constructor(page) {
        this.page = page;
        this.confirmTitleText = page.locator("#confirm-title");
        this.orderNumberText = page.locator("#confirm-order-num");
        this.continueShopping = page.locator("#continue-shopping-btn");
    }
    async checkIfOrderSuccess(msg) {
        await (0, test_1.expect)(this.confirmTitleText).toHaveText(msg);
    }
    async checkOrderNumber() {
        const orderid = await this.orderNumberText.textContent();
        return orderid;
    }
    async clickContinueShopping() {
        await this.continueShopping.click();
    }
}
exports.OrderConfirmationPage = OrderConfirmationPage;
//# sourceMappingURL=OrderConfirmationPage.js.map