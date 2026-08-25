import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { TopMenuPage } from "../pages/TopMenuPage";

const baseUrl = process.env.BASE_URL ?? 'http://localhost:3000/store/login';
const username = process.env.RNAME ?? '';
const password = process.env.PASSWORD ?? '';

[{ products: 'Laptops', itemsInCart: '11' },
{ products: 'Accessories', itemsInCart: '12' }
].forEach(({ products, itemsInCart }) => {

    test(`Product search and add to cart ${products}`, async ({ page }) => {

        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const topMenuPage = new TopMenuPage(page);



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


