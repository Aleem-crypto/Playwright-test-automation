import { expect, test } from "@playwright/test"

test('checkbox test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Register Page').first().click();

    const checkbox1 = page.getByLabel('I agree to the ');
    const checkbox2 = page.locator('#newsletter');
    await checkbox1.check();
    expect(checkbox1).toBeChecked();
    await checkbox2.setChecked({ force: true });
    const ischeckbox2checked = await checkbox2.isChecked();
    expect(ischeckbox2checked).toBeFalsy();


})