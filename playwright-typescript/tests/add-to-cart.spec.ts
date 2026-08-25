import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { TopMenuPage } from "../pages/TopMenuPage";
import { readCSV } from "../utils/fileUtils";


// test.describe.configure({ mode: 'serial' })
// test.describe.parallel("parallel tests",() =>{
test("Product search and add to cart", { tag: ['@reg', '@smoke'] }, async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const productDetailsPage = new ProductDetailsPage(page);
    const topMenuPage = new TopMenuPage(page);

    const td = await readCSV('testData.csv');
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


})