import { expect, test } from "@playwright/test"

test('Scrollbars', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Scrollbars').first().click();
    const footer_link = page.locator('#footer-courses');
    const scroll_container = page.locator('#vertical-scroll-box');
    await footer_link.scrollIntoViewIfNeeded();
    await scroll_container.hover();
    await page.mouse.wheel(0, 200);
    await scroll_container.evaluate(element =>
        element.scrollTop += 300)
})


