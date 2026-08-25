const { expect } = require("@playwright/test");

class ProductDetailsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = page.locator("#detail-add-cart-btn");
        this.pageCart = page.locator("#cart-badge");


    }

    async addProductToCart(productName) {
        await this.addToCartButton.click();

    }

    async checkIfProductAdded(number) {
        await expect(this.pageCart).toHaveText(String(number));
    }


}

module.exports = { ProductDetailsPage };

