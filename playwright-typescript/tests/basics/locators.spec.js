import { expect, test } from "@playwright/test"

test('builtin-locators test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Register Page').first().click();
    await page.getByRole('textbox').first().fill('admin');
     await page.getByLabel('Email Address').fill('admin@example.com');
  //  await page.getByTestId('register-form').getByText('Terms & Conditions').click();
    await page.getByPlaceholder('Choose a username').fill('admin');
    await page.getByAltText('Software Testing Mentor').click(); 
    await page.getByTestId('header-linkedin').click();  
    await page.getByTitle('YouTube - STM').click(); 
   

    


})