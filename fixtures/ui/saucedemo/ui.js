import { test as apiTest, expect } from "../../api/gorest/api.js";
import { LoginPage } from "../../../pages/ui/saucedemo/LoginPage.js";
import userData from "../../../test-data/ui/saucedemo/users.json" with { type: "json" };

export const test = apiTest.extend({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await page.goto("/");

        await loginPage.login(userData.standardUser.username, userData.standardUser.password);

        await use(page);
    },
});

export { expect };
