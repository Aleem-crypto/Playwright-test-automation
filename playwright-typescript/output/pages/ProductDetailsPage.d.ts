import { Locator, Page } from "@playwright/test";
declare class ProductDetailsPage {
    page: Page;
    addToCartButton: Locator;
    pageCart: Locator;
    constructor(page: Page);
    addProductToCart(): Promise<void>;
    checkIfProductAdded(number: number): Promise<void>;
}
export { ProductDetailsPage };
//# sourceMappingURL=ProductDetailsPage.d.ts.map