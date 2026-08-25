import { Locator, Page } from "@playwright/test";
declare class OrderDetailsPage {
    page: Page;
    orderStatus: Locator;
    orderHeading: Locator;
    constructor(page: Page);
    checkIfOrderShowsProcessing(status: string): Promise<void>;
    checkOrderID(filename: string): Promise<void>;
}
export { OrderDetailsPage };
//# sourceMappingURL=OrderDetailsPage.d.ts.map