import { test, expect } from "../../../fixtures/ui/saucedemo/ui.js";
import { InventoryPage } from "../../../pages/ui/saucedemo/InventoryPage.js";
import { CheckoutPage } from "../../../pages/ui/saucedemo/CheckoutPage.js";
import { CartPage } from "../../../pages/ui/saucedemo/CartPage.js";

test("complete product checkout", async ({ loggedInPage, api }) => {
    const response = await api.get("users");

    expect(response.status()).toBe(200);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await loggedInPage.getByTestId("add-to-cart-sauce-labs-backpack").click();
    await loggedInPage.getByTestId("shopping-cart-link").click();

    expect(await cartPage.getProductName()).toBe("Sauce Labs Backpack");

    await cartPage.checkout();

    await checkoutPage.fillInformation("Tedy", "Irwansyah", "50123");
    await checkoutPage.continueCheckout();

    await expect(loggedInPage.getByTestId("inventory-item-name")).toHaveText("Sauce Labs Backpack");

    await checkoutPage.finishCheckout();

    expect(await checkoutPage.getCompleteMessage()).toBe("Thank you for your order!");
});
