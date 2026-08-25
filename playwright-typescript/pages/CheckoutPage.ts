import { Locator, Page } from 'playwright';

class CheckoutPage {
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

    constructor(page: Page) {
        this.page = page;
        this.phoneTextbox = page.locator("#ship-phone");
        this.addressBox = page.locator("#ship-address1");
        this.cityBox = page.locator("#ship-city");
        this.stateBox = page.locator("#ship-state");
        this.zipBox = page.locator("#ship-zip");
        this.countryBox = page.locator("#ship-country");
        this.cardName = page.locator("#card-name");
        this.cardNumber = page.locator("#card-number");
        this.cardExpiry = page.locator("#card-expiry");
        this.cardCcv = page.locator("#card-cvv");
        this.placeOrder = page.locator("#place-order-btn");


    }

    async enterShippingDetails(
        phone: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        country: string,
        cardname: string,
        cardno: string,
        cardexp: string,
        cardccv: string
    ) {
        await this.phoneTextbox.fill(phone);
        await this.addressBox.fill(address);
        await this.cityBox.fill(city);
        await this.stateBox.fill(state);
        await this.zipBox.fill(zip);
        await this.countryBox.selectOption(country);
        await this.cardName.fill(cardname);
        await this.cardNumber.fill(cardno);
        await this.cardExpiry.fill(cardexp);
        await this.cardCcv.fill(cardccv);
        await this.placeOrder.click();

    }

}

export { CheckoutPage };

