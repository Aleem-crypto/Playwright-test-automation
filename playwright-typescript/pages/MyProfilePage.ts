import { expect, Locator, Page } from "@playwright/test";

class MyProfilePage {
    page: Page;
    phoneTextbox: Locator;
    saveButton: Locator;
    updateSuccess: Locator;

    constructor(page: Page) {
        this.page = page;
        this.phoneTextbox = page.locator("#profile-phone");
        this.saveButton = page.locator("#save-personal-btn");
        this.updateSuccess = page.locator("#profile-update-msg");




    }

    async updatePhoneNumber(phnno: string): Promise<void> {
        await this.phoneTextbox.fill(phnno);
    }

    async saveChanges(): Promise<void> {
        await this.saveButton.click();
    }

    async profileUpdateSuccess(msg: string): Promise<void> {
        await expect(this.updateSuccess).toHaveText(msg)
    }
}

export { MyProfilePage };

