import { Locator, Page } from "@playwright/test";
declare class ShoppingCartPage {
    page: Page;
    checkoutButton: Locator;
    constructor(page: Page);
    clickCheckoutButton(): Promise<void>;
    openTestApp(url: string): Promise<void>;
}
export { ShoppingCartPage };
//# sourceMappingURL=ShoppingCartPage.d.ts.map