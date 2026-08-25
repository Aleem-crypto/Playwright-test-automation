import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import { MyProfilePage } from "../pages/MyProfilePage";

test("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const topMenuPage = new TopMenuPage(page);
    const myProfilePage = new MyProfilePage(page);
    //Enter the login detais   

    await loginPage.openTestApp("http://localhost:3000/store/login");
    await loginPage.login("abdtest1212@gmail.com", "Qwerty@12345");

    //Click Profile button
    await topMenuPage.profileIcon.click();
    await topMenuPage.clickMyProfileIcon();
    //Update few changes and save

    await myProfilePage.updatePhoneNumber("124151253263463");
    await myProfilePage.saveChanges();
    await myProfilePage.profileUpdateSuccess("Personal information updated successfully.")
    //Logout
    await topMenuPage.logoutFromApp();


})
