import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import { ShoppingCartPage } from "../pages/ShoppingCartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OrderConfirmationPage } from "../pages/OrderConfirmationPage";
import { writeDataToFile } from "../utils/fileUtils";

test("Product search and add to cart", async ({ page }) => {


    const loginPage = new LoginPage(page);
    const topMenuPage = new TopMenuPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkOutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);
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
    await writeDataToFile('orders.txt', orderid ?? '');


    //Continue shopping

    await orderConfirmationPage.clickContinueShopping();

    //Logout

    await topMenuPage.logoutFromApp();


})