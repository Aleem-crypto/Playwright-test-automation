const { expect } = require("@playwright/test")
class MyProfilePage {
    constructor(page) {
        this.page = page;
        this.phoneTextbox = page.locator("#profile-phone");
        this.saveButton = page.locator("#save-personal-btn");
        this.updateSuccess = page.locator("#profile-update-msg");




    }

    async updatePhoneNumber(phnno) {
        await this.phoneTextbox.fill(phnno);
    }

    async saveChanges(url) {
        await this.saveButton.click();
    }

    async profileUpdateSuccess(msg) {
        await expect(this.updateSuccess).toHaveText(msg)
    }
}

module.exports = { MyProfilePage };

