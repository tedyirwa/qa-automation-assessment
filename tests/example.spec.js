import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test("should login successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/");
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page.getByTestId("title")).toHaveText("Products");
});
