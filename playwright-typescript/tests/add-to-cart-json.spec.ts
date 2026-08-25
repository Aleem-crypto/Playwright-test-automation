import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import testdata from "../testdata/testCaseData.json";

type TestData = { products: string; itemsInCart: string };
const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000/store/login';
const username = process.env.RNAME ?? '';
const password = process.env.PASSWORD ?? '';

(testdata as TestData[]).forEach(({ products, itemsInCart }) => {
    test(`Product search and add to cart ${products}`, async ({ page }) => {
        // test.fail(`Product search and add to cart ${products}`, async ({ page }) => {
        //     test.fixme(`Product search and add to cart ${products}`, async ({ page }) => {
        //         test.slow(`Product search and add to cart ${products}`, async ({ page }) => {
        //             test.skip(`Product search and add to cart ${products}`, async ({ page }) => {

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const topMenuPage = new TopMenuPage(page);

        // const td = await readCSV('testData.csv');
        // const { products, itemsInCart } = td[0];



        //Enter the login detais   

        await loginPage.openTestApp(baseUrl);
        await loginPage.login(username, password);

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


    })

});

