"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPage = void 0;
const test_1 = require("@playwright/test");
class DashboardPage {
    page;
    searchTextbox;
    searchIcon;
    searchProductname;
    productCategory;
    constructor(page) {
        this.page = page;
        this.searchTextbox = page.locator("#store-search-input");
        this.searchIcon = page.locator("#store-search-btn");
        this.searchProductname = page.getByRole("link", { name: /View .* details/ });
        this.productCategory = page.locator(".product-category");
    }
    async enterProductNameToSearch(productName) {
        await this.searchTextbox.fill(productName);
    }
    async clickSearchButton() {
        await this.searchIcon.click();
    }
    async checkProductList(productName) {
        for (const category of await this.productCategory.all()) {
            await (0, test_1.expect)(category).toHaveText(productName);
        }
    }
    async openFirstProduct() {
        await this.searchProductname.first().click();
        await this.page.waitForURL(/\/store\/product\//);
    }
}
exports.DashboardPage = DashboardPage;
//# sourceMappingURL=DashboardPage.js.map