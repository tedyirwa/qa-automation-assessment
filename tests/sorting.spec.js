import { test, expect } from "../fixtures/test.js";
import { InventoryPage } from "../pages/InventoryPage.js";

test("sort products A to Z", async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);

    await inventoryPage.sortBy("az");

    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));

    expect(productNames.length).toBeGreaterThan(0);
    expect(productNames).toEqual(sortedNames);
});

test("sort products by lowest price", async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);

    await inventoryPage.sortBy("lohi");

    const productPrices = await loggedInPage.getByTestId("inventory-item-price").allTextContents();

    const prices = productPrices.map((price) => Number(price.replace("$", "")));

    expect(prices.length).toBeGreaterThan(0);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
});

test("sort products by highest price", async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);

    await inventoryPage.sortBy("hilo");

    const productPrices = await loggedInPage.getByTestId("inventory-item-price").allTextContents();

    const prices = productPrices.map((price) => Number(price.replace("$", "")));

    expect(prices.length).toBeGreaterThan(0);
    expect(prices).toEqual([...prices].sort((a, b) => b - a));
});

test("sort products Z to A", async ({ loggedInPage }) => {
    const inventoryPage = new InventoryPage(loggedInPage);

    await inventoryPage.sortBy("za");

    const productNames = await inventoryPage.getProductNames();
    const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));

    expect(productNames.length).toBeGreaterThan(0);
    expect(productNames).toEqual(sortedNames);
});
