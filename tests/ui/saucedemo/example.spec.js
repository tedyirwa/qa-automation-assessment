import { test, expect } from "../../../fixtures/ui/saucedemo/ui.js";
import { LoginPage } from "../../../pages/ui/saucedemo/LoginPage.js";
import userData from "../../../test-data/ui/saucedemo/users.json" with { type: "json" };

test("should login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/");
    await loginPage.login(userData.standardUser.username, userData.standardUser.password);

    await expect(page.getByTestId("title")).toHaveText("Products");
});
