import { expect, test } from "@playwright/test"

test('Horizontal Slider', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Horizontal Slider').first().click();
    const slider = page.locator('#basic-slider');
    await slider.scrollIntoViewIfNeeded();
    const bbox = await slider.boundingBox();
    const x = bbox.x + bbox.width / 2;
    const y = bbox.y + bbox.height / 2;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + 100, y);
    await page.mouse.up();


})


