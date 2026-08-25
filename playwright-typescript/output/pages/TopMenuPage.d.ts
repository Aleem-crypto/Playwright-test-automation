import { Locator, Page } from "@playwright/test";
declare class TopMenuPage {
    page: Page;
    profileIcon: Locator;
    logoutbutton: Locator;
    cartIcon: Locator;
    orderIcon: Locator;
    myProfile: Locator;
    constructor(page: Page);
    logoutFromApp(): Promise<void>;
    openProfileMenu(): Promise<void>;
    logoutLink(): Promise<void>;
    clickCartIcon(): Promise<void>;
    clickOrdersIcon(): Promise<void>;
    clickMyProfileIcon(): Promise<void>;
}
export { TopMenuPage };
//# sourceMappingURL=TopMenuPage.d.ts.map