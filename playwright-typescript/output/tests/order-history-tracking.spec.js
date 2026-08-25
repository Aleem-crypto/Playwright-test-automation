"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const TopMenuPage_1 = require("../pages/TopMenuPage");
const MyOrdersPage_1 = require("../pages/MyOrdersPage");
const OrderDetailsPage_1 = require("../pages/OrderDetailsPage");
(0, test_1.test)("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage_1.LoginPage(page);
    const topMenuPage = new TopMenuPage_1.TopMenuPage(page);
    const myOrdersPage = new MyOrdersPage_1.MyOrdersPage(page);
    const orderDetailsPage = new OrderDetailsPage_1.OrderDetailsPage(page);
    //Enter the login detais   
    await loginPage.openTestApp("http://localhost:3000/store/login");
    await loginPage.login("abdtest1212@gmail.com", "Qwerty@12345");
    //Click Orders
    await topMenuPage.clickOrdersIcon();
    //Click view details
    await myOrdersPage.clickOnOrderFromFile('orders.txt');
    //Verify order tracking displays correct information
    await orderDetailsPage.checkIfOrderShowsProcessing("processing");
    await orderDetailsPage.checkOrderID('orders.txt');
    //Logout
    await topMenuPage.logoutFromApp();
});
//# sourceMappingURL=order-history-tracking.spec.js.map