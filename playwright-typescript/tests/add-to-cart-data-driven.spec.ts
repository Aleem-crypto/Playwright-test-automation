import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import { readCSV } from "../utils/fileUtils";

type TestData = { products: string; itemsInCart: string };
const testdata = readCSV('testData.csv') as TestData[];
const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000/store/login';
const username = process.env.RNAME ?? '';
const password = process.env.PASSWORD ?? '';
test.describe("Product search test", () => {
    for (const data of testdata) {

        test(`Product search and add to cart with ${data.products}`, async ({ page }) => {

            const loginPage = new LoginPage(page);
            const dashboardPage = new DashboardPage(page);
            const productDetailsPage = new ProductDetailsPage(page);
            const topMenuPage = new TopMenuPage(page);

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


        })

    }
});


