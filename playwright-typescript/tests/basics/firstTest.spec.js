import { expect, test } from "@playwright/test"

test.only('My First test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByText('Login Page').first().click();
  await page.getByPlaceholder('Enter your username').fill('admin');
  await expect(page).toHaveTitle('Automation Practice Website | Software Testing Mentor & RCV Academy');
  
})

test('My second test', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('http://localhost:3000')

})