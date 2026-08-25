"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyProfilePage = void 0;
const test_1 = require("@playwright/test");
class MyProfilePage {
    page;
    phoneTextbox;
    saveButton;
    updateSuccess;
    constructor(page) {
        this.page = page;
        this.phoneTextbox = page.locator("#profile-phone");
        this.saveButton = page.locator("#save-personal-btn");
        this.updateSuccess = page.locator("#profile-update-msg");
    }
    async updatePhoneNumber(phnno) {
        await this.phoneTextbox.fill(phnno);
    }
    async saveChanges() {
        await this.saveButton.click();
    }
    async profileUpdateSuccess(msg) {
        await (0, test_1.expect)(this.updateSuccess).toHaveText(msg);
    }
}
exports.MyProfilePage = MyProfilePage;
//# sourceMappingURL=MyProfilePage.js.map