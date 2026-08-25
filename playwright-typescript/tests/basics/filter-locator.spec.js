import { expect, test } from "@playwright/test"

test('filter locator', async ({ page }) => {
    await page.goto('http://localhost:3000');
 //   await page.getByRole('listitem').filter({hasText:'Drag and Drop'}).click();
 //   console.log(await page.getByRole('listitem').filter({hasNotText: 'Drag and Drop'}).count());
 await page.getByRole('listitem').filter({has: page.getByText('Radio Buttons')}).click();
 //await page.getByRole('listitem').filter({hasNot: page.getByText('Radio Buttons')}).count();
    })
        

       

