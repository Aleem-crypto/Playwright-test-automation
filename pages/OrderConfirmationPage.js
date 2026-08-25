const { expect } = require("@playwright/test")

class OrderConfirmationPage {
    constructor(page) {
        this.page = page;
        this.confirmTitleText = page.locator("#confirm-title");
        this.orderNumberText = page.locator("#confirm-order-num");
        this.continueShopping = page.locator("#continue-shopping-btn");



    }

    async checkIfOrderSuccess(msg) {
        await expect(this.confirmTitleText).toHaveText(msg);

    }

    async checkOrderNumber() {
        const orderid = await this.orderNumberText.textContent();
        return orderid;
    }

    async clickContinueShopping() {
        await this.continueShopping.click();
    }




}

module.exports = { OrderConfirmationPage };

