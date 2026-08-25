"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const TopMenuPage_1 = require("../pages/TopMenuPage");
const ShoppingCartPage_1 = require("../pages/ShoppingCartPage");
const CheckoutPage_1 = require("../pages/CheckoutPage");
const OrderConfirmationPage_1 = require("../pages/OrderConfirmationPage");
const fileUtils_1 = require("../utils/fileUtils");
(0, test_1.test)("Product search and add to cart", async ({ page }) => {
    const loginPage = new LoginPage_1.LoginPage(page);
    const topMenuPage = new TopMenuPage_1.TopMenuPage(page);
    const shoppingCartPage = new ShoppingCartPage_1.ShoppingCartPage(page);
    const checkOutPage = new CheckoutPage_1.CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage_1.OrderConfirmationPage(page);
    //Enter the login detais   
    await loginPage.openTestApp("http://localhost:3000/store/login");
    await loginPage.login("abdtest1212@gmail.com", "Qwerty@12345");
    //Click add to cart
    await topMenuPage.clickCartIcon();
    //Click proceed to checkout
    await shoppingCartPage.clickCheckoutButton();
    //Enter shipping details
    await checkOutPage.enterShippingDetails("9482928492", "Ten Downing Street", "Chennai", "TamilNadu", "627284", "IN", "Testing", "1234567887654321", "11/29", "123");
    //Click place order  - order confirmation with order id displayed
    //  await page.locator("#place-order-btn").click();
    await orderConfirmationPage.checkIfOrderSuccess("Order Placed Successfully!");
    const orderid = await orderConfirmationPage.checkOrderNumber();
    console.log(orderid);
    await (0, fileUtils_1.writeDataToFile)('orders.txt', orderid ?? '');
    //Continue shopping
    await orderConfirmationPage.clickContinueShopping();
    //Logout
    await topMenuPage.logoutFromApp();
});
//# sourceMappingURL=checkout-payment.spec.js.map