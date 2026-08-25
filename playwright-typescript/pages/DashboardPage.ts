import { expect, Locator, Page } from "@playwright/test";

class DashboardPage {
    page: Page;
    searchTextbox: Locator;
    searchIcon: Locator;
    searchProductname: Locator;
    productCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchTextbox = page.locator("#store-search-input");
        this.searchIcon = page.locator("#store-search-btn");
        this.searchProductname = page.getByRole("link", { name: /View .* details/ });
        this.productCategory = page.locator(".product-category");


    }

    async enterProductNameToSearch(productName: string) {
        await this.searchTextbox.fill(productName);

    }

    async clickSearchButton() {
        await this.searchIcon.click();
    }



    async checkProductList(productName: string) {
        for (const category of await this.productCategory.all()) {
            await expect(category).toHaveText(productName);
        }
    }

    async openFirstProduct() {
        await this.searchProductname.first().click();
        await this.page.waitForURL(/\/store\/product\//);
    }
}

export { DashboardPage };

