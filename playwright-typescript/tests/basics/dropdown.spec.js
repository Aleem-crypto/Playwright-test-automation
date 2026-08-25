import { expect, test } from "@playwright/test"

test('Dropdown Test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.getByText('Register Page').first().click();
    const dropdown = page.locator('#country');
    await dropdown.selectOption('India');
    await dropdown.selectOption({ label: 'United States' });
    await dropdown.selectOption({ index: 3 });
    const selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe('4');

  
    

    
})