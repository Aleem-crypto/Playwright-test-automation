import { expect, test } from "@playwright/test"

test('click test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Dynamic Table').first().click();

    const button = page.locator('add-row-btn');
    await button.click();
    await button.dblclick();
    await button.click({ button: 'right' });
    await button.click({ button: 'middle' });
    // await button.click({ modifiers: ['shift'] });
    // await button.click({ modifiers: ['ControlorMeta'] });
    // await button.click({ button: 'left', modifiers: ['Alt'], position: { x: 10, y: 10 } });



})