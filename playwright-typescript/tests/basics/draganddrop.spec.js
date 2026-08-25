import { expect, test } from "@playwright/test"

test('Drag and Drop', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Drag and Drop').first().click();

    const to_do = page.locator('#drag-item-1');
    const in_progress = page.locator('#col-inprogress');
    const in_progress_text = page.locator('#drag-item-4');
    const done = page.locator('#col-done');
    //Drag To
    await to_do.dragTo(in_progress);

    //Manual Drag and Drop
    await in_progress_text.hover();
    await page.mouse.down();
    await done.hover();
    await page.mouse.up();





})