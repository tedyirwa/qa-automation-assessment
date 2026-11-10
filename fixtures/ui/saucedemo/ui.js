import { test as apiTest, expect } from "../../api/gorest/api.js";
import { LoginPage } from "../../../pages/ui/saucedemo/LoginPage.js";

export const test = apiTest.extend({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await page.goto("/");
        await loginPage.login("standard_user", "secret_sauce");

        await use(page);
    },
});

export { expect };
