"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const DashboardPage_1 = require("../pages/DashboardPage");
const ProductDetailsPage_1 = require("../pages/ProductDetailsPage");
const TopMenuPage_1 = require("../pages/TopMenuPage");
const fileUtils_1 = require("../utils/fileUtils");
// test.describe.configure({ mode: 'serial' })
// test.describe.parallel("parallel tests",() =>{
(0, test_1.test)("Product search and add to cart", { tag: ['@reg', '@smoke'] }, async ({ page }) => {
    const loginPage = new LoginPage_1.LoginPage(page);
    const dashboardPage = new DashboardPage_1.DashboardPage(page);
    const productDetailsPage = new ProductDetailsPage_1.ProductDetailsPage(page);
    const topMenuPage = new TopMenuPage_1.TopMenuPage(page);
    const td = await (0, fileUtils_1.readCSV)('testData.csv');
    const products = td[0]?.products;
    const itemsInCart = td[0]?.itemsInCart;
    if (products === undefined || itemsInCart === undefined) {
        throw new Error('testData.csv must contain products and itemsInCart');
    }
    //Enter the login detais   
    await loginPage.openTestApp(process.env.BASE_URL ?? 'http://localhost:3000/store/login');
    await loginPage.login(process.env.RNAME ?? '', process.env.PASSWORD ?? '');
    //Search and Click
    await dashboardPage.enterProductNameToSearch(products);
    await dashboardPage.clickSearchButton();
    //Verify if page displayed all laptop infor
    await dashboardPage.checkProductList(products);
    //Click the first and add to cart
    await dashboardPage.openFirstProduct();
    //Product should be added to cart and verify
    await productDetailsPage.addProductToCart();
    await productDetailsPage.checkIfProductAdded(Number(itemsInCart));
    //Logout
    await topMenuPage.logoutFromApp();
});
//# sourceMappingURL=add-to-cart.spec.js.map