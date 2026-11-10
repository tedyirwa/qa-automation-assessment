import { test, expect } from "../../../fixtures/ui/saucedemo/ui.js";
import { CheckoutPage } from "../../../pages/ui/saucedemo/CheckoutPage.js";
import { CartPage } from "../../../pages/ui/saucedemo/CartPage.js";
import checkoutData from "../../../test-data/ui/saucedemo/checkout.json" with { type: "json" };

test("complete product checkout", async ({ loggedInPage, api }) => {
    const response = await api.get("users");

    expect(response.status()).toBe(200);
    const cartPage = new CartPage(loggedInPage);
    const checkoutPage = new CheckoutPage(loggedInPage);

    await loggedInPage.getByTestId("add-to-cart-sauce-labs-backpack").click();
    await loggedInPage.getByTestId("shopping-cart-link").click();

    expect(await cartPage.getProductName()).toBe(checkoutData.product.name);

    await cartPage.checkout();

    await checkoutPage.fillInformation(
        checkoutData.customer.firstName,
        checkoutData.customer.lastName,
        checkoutData.customer.postalCode,
    );

    await checkoutPage.continueCheckout();

    await expect(loggedInPage.getByTestId("inventory-item-name")).toHaveText(
        checkoutData.product.name,
    );
    await checkoutPage.finishCheckout();

    expect(await checkoutPage.getCompleteMessage()).toBe(checkoutData.expected.completeMessage);
});
