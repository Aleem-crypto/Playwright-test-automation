import { Locator, Page } from "@playwright/test";

class ShoppingCartPage {
    page: Page;
    checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByTestId("proceed-to-checkout-btn");
        

    }

    async clickCheckoutButton(): Promise<void> {
        await this.checkoutButton.click();
        
    }

    async openTestApp(url: string): Promise<void> {
        await this.page.goto(url)
    }
}

export { ShoppingCartPage };

