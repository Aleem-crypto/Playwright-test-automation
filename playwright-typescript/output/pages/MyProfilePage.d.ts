import { Locator, Page } from "@playwright/test";
declare class MyProfilePage {
    page: Page;
    phoneTextbox: Locator;
    saveButton: Locator;
    updateSuccess: Locator;
    constructor(page: Page);
    updatePhoneNumber(phnno: string): Promise<void>;
    saveChanges(): Promise<void>;
    profileUpdateSuccess(msg: string): Promise<void>;
}
export { MyProfilePage };
//# sourceMappingURL=MyProfilePage.d.ts.map