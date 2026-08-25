const { expect } = require("@playwright/test")

class DashboardPage {
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
        for (const catergory of await this.productCategory.all()) {
            await expect(catergory).toHaveText(productName);
        }
    }

    async openFirstProduct() {
        await this.searchProductname.first().click();
        await this.page.waitForURL(/\/store\/product\//);
    }
}

module.exports = { DashboardPage };

