const { test, expect } = require("@playwright/test")

const { LoginPage } = require("../pages/LoginPage")
const { TopMenunPage } = require("../pages/TopMenuPage")
const { ShoppingCartPage } = require("../pages/ShoppingCartPage")
const { CheckoutPage } = require("../pages/CheckoutPage")
const { OrderConfirmationPage } = require("../pages/OrderConfirmationPage")
const { MyOrdersPage } = require("../pages/MyOrdersPage")
const { writeDataToFile } = require("../utils/fileUtils")
const { OrderDetailsPage } = require("../pages/OrderDetailsPage")
const fs = require('fs');


test("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const topMenuPage = new TopMenunPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);
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
