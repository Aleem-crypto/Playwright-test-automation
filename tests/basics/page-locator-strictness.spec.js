import { expect, test } from "@playwright/test"

test('page-locators-strictness test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Register Page').first().click();
    //By ID
    await page.locator('#full-name').fill('admin');

    //By name
    await page.locator('[name="email"]').fill('admin');

    //By Attribute
    await page.locator('[type="tel"]').fill('2142352336235');  

    //By Class
    await page.locator('.form-control').count();
   // await page.locator('[class="btn btn-primary"]').click();

    //By tag name
   // await page.locator('input').fill('admin');

    //combine multiple locators
    await page.locator('input[name="email"][type="email"]').fill('abctest@gmail.com');

    //partial text 
    await page.locator('text=Subscribe ').click();

    //full text match
    await page.locator('text=Subscribe to our newsletter').click();

    //By xpath
    await page.locator('xpath=//*[@id="full-name"]').fill('admin');

    //By CSS
    await page.locator('css=#email').fill('admin');

    })
        

       

