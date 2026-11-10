import { test, expect } from "../fixtures/test.js";
import { CartPage } from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";

test("complete product checkout", async ({ loggedInPage }) => {
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
