const { test, expect } = require("@playwright/test")

const { LoginPage } = require("../pages/LoginPage")
const { DashboardPage } = require("../pages/DashboardPage")
const { ProductDetailsPage } = require("../pages/ProductDetailsPAge")
const { TopMenunPage } = require("../pages/TopMenuPage")
const { readCSV } = require("../utils/fileUtils")

const testdata = readCSV('testData.csv');
test.describe("Product search test", () => {
    for (const data of testdata) {

        test(`Product search and add to cart with ${data.products}`, async ({ page }) => {

            const loginPage = new LoginPage(page);
            const dashboardPage = new DashboardPage(page);
            const productDetailsPage = new ProductDetailsPage(page);
            const topMenuPage = new TopMenunPage(page);

            const { products, itemsInCart } = data;



            //Enter the login detais   

            await loginPage.openTestApp(process.env.BASE_URL);
            await loginPage.login(process.env.RNAME, process.env.PASSWORD);

            //Search and Click

            await dashboardPage.enterProductNameToSearch(data.products);
            await dashboardPage.clickSearchButton();

            //Verify if page displayed all laptop infor
            await dashboardPage.checkProductList(data.products);

            //Click the first and add to cart
            await dashboardPage.openFirstProduct();


            //Product should be added to cart and verify

            await productDetailsPage.addProductToCart();
            await productDetailsPage.checkIfProductAdded(data.itemsInCart);

            //Logout

            await topMenuPage.logoutFromApp();


        })

    }
});


