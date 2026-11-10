import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";

test("sort products A to Z", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto("/");
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page.getByTestId("title")).toHaveText("Products");

    await inventoryPage.sortBy("az");

    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));

    expect(productNames.length).toBeGreaterThan(0);
    expect(productNames).toEqual(sortedNames);
});

test("sort products by lowest price", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto("/");
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page.getByTestId("title")).toHaveText("Products");

    await inventoryPage.sortBy("lohi");

    const productPrices = await page.getByTestId("inventory-item-price").allTextContents();

    const prices = productPrices.map((price) => Number(price.replace("$", "")));

    expect(prices.length).toBeGreaterThan(0);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
});

test("sort products by highest price", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto("/");
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page.getByTestId("title")).toHaveText("Products");

    await inventoryPage.sortBy("hilo");

    const productPrices = await page.getByTestId("inventory-item-price").allTextContents();

    const prices = productPrices.map((price) => Number(price.replace("$", "")));

    expect(prices.length).toBeGreaterThan(0);
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
});

test("sort products Z to A", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto("/");
    await loginPage.login("standard_user", "secret_sauce");

    await expect(page.getByTestId("title")).toHaveText("Products");

    await inventoryPage.sortBy("za");

    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));

    expect(productNames.length).toBeGreaterThan(0);
    expect(productNames).toEqual(sortedNames);
});
