import { expect, test } from "@playwright/test"

test('Keyboard Actions', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Dynamic Table').first().click();
    const addbutton = page.locator('#add-row-btn');
    await addbutton.click();
    await page.press('body', 'Tab');
    await page.press('body', 'Tab');
    await page.press('body', 'Enter');
    await page.getByText('Register Page').first().click();
    const fullname = page.locator('#full-name');
    const email = page.locator('#email');
    await fullname.fill('Testing Mentor');
    await fullname.press('ControlOrMeta+A');
    await fullname.press('Control+C');
    await email.press('Control+V');




})