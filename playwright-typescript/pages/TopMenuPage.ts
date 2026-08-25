import { Locator, Page } from "@playwright/test";

class TopMenuPage {
    page: Page;
    profileIcon: Locator;
    logoutbutton: Locator;
    cartIcon: Locator;
    orderIcon: Locator;
    myProfile: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileIcon = page.locator("#store-nav-profile-btn");
        this.logoutbutton = page.getByText("Logout");
        this.cartIcon = page.locator("#store-nav-cart");
        this.orderIcon = page.locator("#store-nav-orders");
        this.myProfile = page.getByTestId("dd-profile");



    }

    async logoutFromApp(): Promise<void> {
        await this.profileIcon.click();
        await this.logoutbutton.click();

    }

    async openProfileMenu(): Promise<void> {
        await this.profileIcon.click();

    }
    async logoutLink(): Promise<void> {
        await this.logoutbutton.click();

    }
    async clickCartIcon(): Promise<void> {
        await this.cartIcon.click();

    }

    async clickOrdersIcon(): Promise<void> {
        await this.orderIcon.click();

    }

    async clickMyProfileIcon(): Promise<void> {
        await this.myProfile.click();

    }

}

export { TopMenuPage };

