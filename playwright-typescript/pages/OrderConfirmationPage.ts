import { expect, Locator, Page } from "@playwright/test";

class OrderConfirmationPage {
    page: Page;
    confirmTitleText: Locator;
    orderNumberText: Locator;
    continueShopping: Locator;

    constructor(page: Page) {
        this.page = page;
        this.confirmTitleText = page.locator("#confirm-title");
        this.orderNumberText = page.locator("#confirm-order-num");
        this.continueShopping = page.locator("#continue-shopping-btn");



    }

    async checkIfOrderSuccess(msg: string): Promise<void> {
        await expect(this.confirmTitleText).toHaveText(msg);

    }

    async checkOrderNumber(): Promise<string | null> {
        const orderid = await this.orderNumberText.textContent();
        return orderid;
    }

    async clickContinueShopping(): Promise<void> {
        await this.continueShopping.click();
    }




}

export { OrderConfirmationPage };

