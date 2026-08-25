"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const TopMenuPage_1 = require("../pages/TopMenuPage");
const MyProfilePage_1 = require("../pages/MyProfilePage");
(0, test_1.test)("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage_1.LoginPage(page);
    const topMenuPage = new TopMenuPage_1.TopMenuPage(page);
    const myProfilePage = new MyProfilePage_1.MyProfilePage(page);
    //Enter the login detais   
    await loginPage.openTestApp("http://localhost:3000/store/login");
    await loginPage.login("abdtest1212@gmail.com", "Qwerty@12345");
    //Click Profile button
    await topMenuPage.profileIcon.click();
    await topMenuPage.clickMyProfileIcon();
    //Update few changes and save
    await myProfilePage.updatePhoneNumber("124151253263463");
    await myProfilePage.saveChanges();
    await myProfilePage.profileUpdateSuccess("Personal information updated successfully.");
    //Logout
    await topMenuPage.logoutFromApp();
});
//# sourceMappingURL=update-personal-info.spec.js.map