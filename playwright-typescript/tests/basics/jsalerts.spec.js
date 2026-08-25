import { expect, test } from "@playwright/test"

test('Keyboard Actions', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('JS Alert').first().click();
    const alertButton = page.locator('#trigger-alert-btn');
    await alertButton.click();

    await page.getByText('JS Confirm').first().click();
    const confirmButton = page.locator('#trigger-confirm-btn');

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })
    await confirmButton.click();

    await page.getByText('JS Prompt').first().click();
    const prmtbtn = page.locator('#trigger-prompt-btn');

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('Testing Mentor');
    })
    await prmtbtn.click();







})