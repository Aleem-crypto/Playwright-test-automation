import { Locator, Page } from "@playwright/test";
import { readDataToFile } from "../utils/fileUtils";


class MyOrdersPage {
    page: Page;
    orderCardDiv: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderCardDiv = page.locator(".order-card");


    }

    async clickOnOrderFromFile(filename: string): Promise<void> {
        
        const ord = await readDataToFile(filename);
        if (ord === undefined) {
            throw new Error(`Unable to read order ID from ${filename}`);
        }
        const orderID = ord.trim();
        await this.orderCardDiv.filter({ hasText: orderID }).getByRole("link").click();


    }


}

export { MyOrdersPage };

