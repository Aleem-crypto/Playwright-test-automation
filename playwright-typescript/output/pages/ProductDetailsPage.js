"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDetailsPage = void 0;
const test_1 = require("@playwright/test");
class ProductDetailsPage {
    page;
    addToCartButton;
    pageCart;
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator("#detail-add-cart-btn");
        this.pageCart = page.locator("#cart-badge");
    }
    async addProductToCart() {
        await this.addToCartButton.click();
    }
    async checkIfProductAdded(number) {
        await (0, test_1.expect)(this.pageCart).toHaveText(String(number));
    }
}
exports.ProductDetailsPage = ProductDetailsPage;
//# sourceMappingURL=ProductDetailsPage.js.map