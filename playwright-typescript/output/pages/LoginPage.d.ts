import type { Page } from '@playwright/test';
export declare class LoginPage {
    private page;
    private username_field;
    private password_field;
    private loginButton;
    constructor(page: Page);
    login(username: string, password: string): Promise<void>;
    openTestApp(url: string): Promise<void>;
}
//# sourceMappingURL=LoginPage.d.ts.map