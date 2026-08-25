import { expect, Locator, Page } from "@playwright/test";

class ProductDetailsPage {
    page: Page;
    addToCartButton: Locator;
    pageCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator("#detail-add-cart-btn");
        this.pageCart = page.locator("#cart-badge");


    }

    async addProductToCart(): Promise<void> {
        await this.addToCartButton.click();

    }

    async checkIfProductAdded(number: number): Promise<void> {
        await expect(this.pageCart).toHaveText(String(number));
    }


}

export { ProductDetailsPage };

