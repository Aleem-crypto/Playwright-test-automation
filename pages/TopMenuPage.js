class TopMenunPage {
    constructor(page) {
        this.page = page;
        this.profileIcon = page.locator("#store-nav-profile-btn");
        this.logoutbutton = page.getByText("Logout");
        this.cartIcon = page.locator("#store-nav-cart");
        this.orderIcon = page.locator("#store-nav-orders");
        this.myProfile = page.getByTestId("dd-profile");



    }

    async logoutFromApp() {
        await this.profileIcon.click();
        await this.logoutbutton.click();

    }

    async profileIcon() {
        await this.profileIcon.click();

    }
    async logoutLink() {
        await this.logoutbutton.click();

    }
    async clickCartIcon() {
        await this.cartIcon.click();

    }

    async clickOrdersIcon() {
        await this.orderIcon.click();

    }

    async clickMyProfileIcon() {
        await this.myProfile.click();

    }

}

module.exports = { TopMenunPage };

