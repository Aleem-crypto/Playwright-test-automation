# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: update-personal-info.spec.ts >> Product search and add to cart
- Location: tests\update-personal-info.spec.ts:6:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('#store-nav-profile-btn')

```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { TopMenuPage } from "../pages/TopMenuPage";
  4  | import { MyProfilePage } from "../pages/MyProfilePage";
  5  | 
  6  | test("Product search and add to cart", async ({ page }) => {
  7  |     const loginPage = new LoginPage(page);
  8  |     const topMenuPage = new TopMenuPage(page);
  9  |     const myProfilePage = new MyProfilePage(page);
  10 |     //Enter the login detais   
  11 | 
  12 |     await loginPage.openTestApp("http://localhost:3000/store/login");
  13 |     await loginPage.login("abdtest1212@gmail.com", "Qwerty@12345");
  14 | 
  15 |     //Click Profile button
> 16 |     await topMenuPage.profileIcon.click();
     |                                   ^ Error: locator.click: Test ended.
  17 |     await topMenuPage.clickMyProfileIcon();
  18 |     //Update few changes and save
  19 | 
  20 |     await myProfilePage.updatePhoneNumber("124151253263463");
  21 |     await myProfilePage.saveChanges();
  22 |     await myProfilePage.profileUpdateSuccess("Personal information updated successfully.")
  23 |     //Logout
  24 |     await topMenuPage.logoutFromApp();
  25 | 
  26 | 
  27 | })
  28 | 
```