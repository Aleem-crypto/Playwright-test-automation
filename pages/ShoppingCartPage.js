class ShoppingCartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.getByTestId("proceed-to-checkout-btn");
        

    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
        
    }

    async openTestApp(url) {
        await this.page.goto(url)
    }
}

module.exports = { ShoppingCartPage };

