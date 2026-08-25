"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    page;
    username_field;
    password_field;
    loginButton;
    constructor(page) {
        this.page = page;
        this.username_field = page.locator("#login-email");
        this.password_field = page.locator("#login-password");
        this.loginButton = page.locator("#login-submit-btn");
    }
    async login(username, password) {
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL(/\/store(?:\/|$)/);
    }
    async openTestApp(url) {
        await this.page.goto(url);
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map