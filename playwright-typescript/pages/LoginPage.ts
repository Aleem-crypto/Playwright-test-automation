import type { Locator, Page } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private username_field: Locator;
    private password_field: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username_field = page.locator("#login-email");
        this.password_field = page.locator("#login-password");
        this.loginButton = page.locator("#login-submit-btn");


    }

    async login(username: string, password: string) {
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.loginButton.click();
        await this.page.waitForURL(/\/store(?:\/|$)/);
    }

    async openTestApp(url: string) {
        await this.page.goto(url)
    }
}

