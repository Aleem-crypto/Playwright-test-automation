const { expect } = require("@playwright/test")
const { readDataToFile } = require("../utils/fileUtils")


class OrderDetailsPage {
    constructor(page) {
        this.page = page;
        this.orderStatus = page.locator("#order-detail-status");
        this.orderHeading = page.locator("order - detail - heading");

    }

    async checkIfOrderShowsProcessing(status) {
        await expect(this.orderStatus).toHaveText(status);

    }
    async checkOrderID(filename) {
        const ord = await readDataToFile(filename);
        const orderID = ord.trim();
        await expect(this.orderHeading).toHaveText(orderID);



    }


}

module.exports = { OrderDetailsPage };

