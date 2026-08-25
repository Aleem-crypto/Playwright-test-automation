import { Locator, Page } from "@playwright/test";
declare class MyOrdersPage {
    page: Page;
    orderCardDiv: Locator;
    constructor(page: Page);
    clickOnOrderFromFile(filename: string): Promise<void>;
}
export { MyOrdersPage };
//# sourceMappingURL=MyOrdersPage.d.ts.map