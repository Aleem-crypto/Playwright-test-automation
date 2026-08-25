import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import { MyOrdersPage } from "../pages/MyOrdersPage";
import { OrderDetailsPage } from "../pages/OrderDetailsPage";


test("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const topMenuPage = new TopMenuPage(page);
    const myOrdersPage = new MyOrdersPage(page);
    const orderDetailsPage = new OrderDetailsPage(page);


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


})
