import { expect, Locator, Page } from "@playwright/test";
import { readDataToFile } from "../utils/fileUtils";


class OrderDetailsPage {
    page: Page;
    orderStatus: Locator;
    orderHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderStatus = page.locator("#order-detail-status");
        this.orderHeading = page.locator("order - detail - heading");

    }

    async checkIfOrderShowsProcessing(status: string): Promise<void> {
        await expect(this.orderStatus).toHaveText(status);

    }
    async checkOrderID(filename: string): Promise<void> {
        const ord = await readDataToFile(filename);
        if (ord === undefined) {
            throw new Error(`Unable to read order ID from ${filename}`);
        }
        const orderID = ord.trim();
        await expect(this.orderHeading).toHaveText(orderID);



    }


}

export { OrderDetailsPage };

