const { test, expect } = require("@playwright/test")
const fs = require('fs');
const { LoginPage } = require("../pages/LoginPage")
const { TopMenunPage } = require("../pages/TopMenuPage")
const { ShoppingCartPage } = require("../pages/ShoppingCartPage")
const { CheckoutPage } = require("../pages/CheckoutPage")
const { OrderConfirmationPage } = require("../pages/OrderConfirmationPage")
const { MyOrdersPage } = require("../pages/MyOrdersPage")
const { writeDataToFile } = require("../utils/fileUtils")
const { OrderDetailsPage } = require("../pages/OrderDetailsPage")
const { MyProfilePage } = require("../pages/MyProfilePage");

test("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const topMenuPage = new TopMenunPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);
    const myOrdersPage = new MyOrdersPage(page);
    const orderDetailsPage = new OrderDetailsPage(page);
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
