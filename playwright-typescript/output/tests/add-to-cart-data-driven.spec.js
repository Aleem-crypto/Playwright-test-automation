"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const DashboardPage_1 = require("../pages/DashboardPage");
const ProductDetailsPage_1 = require("../pages/ProductDetailsPage");
const TopMenuPage_1 = require("../pages/TopMenuPage");
const fileUtils_1 = require("../utils/fileUtils");
const testdata = (0, fileUtils_1.readCSV)('testData.csv');
const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000/store/login';
const username = process.env.RNAME ?? '';
const password = process.env.PASSWORD ?? '';
test_1.test.describe("Product search test", () => {
    for (const data of testdata) {
        (0, test_1.test)(`Product search and add to cart with ${data.products}`, async ({ page }) => {
            const loginPage = new LoginPage_1.LoginPage(page);
            const dashboardPage = new DashboardPage_1.DashboardPage(page);
            const productDetailsPage = new ProductDetailsPage_1.ProductDetailsPage(page);
            const topMenuPage = new TopMenuPage_1.TopMenuPage(page);
            const { products, itemsInCart } = data;
            //Enter the login detais   
            await loginPage.openTestApp(baseUrl);
            await loginPage.login(username, password);
            //Search and Click
            await dashboardPage.enterProductNameToSearch(data.products);
            await dashboardPage.clickSearchButton();
            //Verify if page displayed all laptop infor
            await dashboardPage.checkProductList(data.products);
            //Click the first and add to cart
            await dashboardPage.openFirstProduct();
            //Product should be added to cart and verify
            await productDetailsPage.addProductToCart();
            await productDetailsPage.checkIfProductAdded(Number(data.itemsInCart));
            //Logout
            await topMenuPage.logoutFromApp();
        });
    }
});
//# sourceMappingURL=add-to-cart-data-driven.spec.js.map