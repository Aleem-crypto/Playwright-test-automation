import { Locator, Page } from "@playwright/test";
declare class OrderConfirmationPage {
    page: Page;
    confirmTitleText: Locator;
    orderNumberText: Locator;
    continueShopping: Locator;
    constructor(page: Page);
    checkIfOrderSuccess(msg: string): Promise<void>;
    checkOrderNumber(): Promise<string | null>;
    clickContinueShopping(): Promise<void>;
}
export { OrderConfirmationPage };
//# sourceMappingURL=OrderConfirmationPage.d.ts.map