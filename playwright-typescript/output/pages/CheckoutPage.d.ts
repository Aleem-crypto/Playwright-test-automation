import { Locator, Page } from 'playwright';
declare class CheckoutPage {
    page: Page;
    phoneTextbox: Locator;
    addressBox: Locator;
    cityBox: Locator;
    stateBox: Locator;
    zipBox: Locator;
    countryBox: Locator;
    cardName: Locator;
    cardNumber: Locator;
    cardExpiry: Locator;
    cardCcv: Locator;
    placeOrder: Locator;
    constructor(page: Page);
    enterShippingDetails(phone: string, address: string, city: string, state: string, zip: string, country: string, cardname: string, cardno: string, cardexp: string, cardccv: string): Promise<void>;
}
export { CheckoutPage };
//# sourceMappingURL=CheckoutPage.d.ts.map