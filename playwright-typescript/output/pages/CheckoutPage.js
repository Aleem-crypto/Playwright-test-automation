"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPage = void 0;
class CheckoutPage {
    page;
    phoneTextbox;
    addressBox;
    cityBox;
    stateBox;
    zipBox;
    countryBox;
    cardName;
    cardNumber;
    cardExpiry;
    cardCcv;
    placeOrder;
    constructor(page) {
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
    async enterShippingDetails(phone, address, city, state, zip, country, cardname, cardno, cardexp, cardccv) {
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
exports.CheckoutPage = CheckoutPage;
//# sourceMappingURL=CheckoutPage.js.map