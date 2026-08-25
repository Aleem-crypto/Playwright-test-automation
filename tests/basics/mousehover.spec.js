import { expect, test } from "@playwright/test"

test('builtin-locators test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Mouse Hover').first().click();
    const dropdown = page.locator('#hover-dropdown-trigger');
    await dropdown.hover();
    const hovertext = page.locator('#hover-box-1');
    await hovertext.focus();
    // const ishovertextvisible = await hovertext.isVisible();
    // expect(ishovertextvisible).toBeTruthy();




})