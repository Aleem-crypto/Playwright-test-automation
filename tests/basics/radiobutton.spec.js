import { expect, test } from "@playwright/test"

test('radio buttons', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Register Page').first().click();
    const female = page.getByLabel('Female');
    await female.check();
    expect(female).toBeChecked();
    const isfemaleradiochecked = await female.isChecked();
    expect(isfemaleradiochecked).toBeTruthy();
    const male = page.locator('#gender-male');
    await male.setChecked({ force: true });
    expect(male).toBeChecked();


})
