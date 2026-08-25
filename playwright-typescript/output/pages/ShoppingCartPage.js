"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartPage = void 0;
class ShoppingCartPage {
    page;
    checkoutButton;
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.getByTestId("proceed-to-checkout-btn");
    }
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async openTestApp(url) {
        await this.page.goto(url);
    }
}
exports.ShoppingCartPage = ShoppingCartPage;
//# sourceMappingURL=ShoppingCartPage.js.map