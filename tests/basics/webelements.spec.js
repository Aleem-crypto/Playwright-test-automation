import { expect, test } from "@playwright/test"

test('web elements', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Register Page').first().click();

    const fullname = await page.getByPlaceholder('John Doe');
    await fullname.fill('Test User');
    await fullname.clear();
    await fullname.fill('Test User 123', { forece: true });
    await fullname.clear();
    await fullname.pressSequentially('Software Testing');
    await fullname.clear();
    await fullname.pressSequentially('Software Testing 123', { delay: 100 });
})