import { Locator, Page } from "@playwright/test";
declare class DashboardPage {
    page: Page;
    searchTextbox: Locator;
    searchIcon: Locator;
    searchProductname: Locator;
    productCategory: Locator;
    constructor(page: Page);
    enterProductNameToSearch(productName: string): Promise<void>;
    clickSearchButton(): Promise<void>;
    checkProductList(productName: string): Promise<void>;
    openFirstProduct(): Promise<void>;
}
export { DashboardPage };
//# sourceMappingURL=DashboardPage.d.ts.map