import { expect, test } from "@playwright/test"

test('Keyboard Actions', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('IFrame').first().click();
    const iframe = page.frameLocator('#internal-iframe');
    await iframe.locator('#iframe-name-input').fill('Testing Mentor');
    await page.locator('#header-home').click();






})