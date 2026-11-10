export class CartPage {
    constructor(page) {
        this.page = page;
        this.productName = page.locator(".cart_item .inventory_item_name");
        this.checkoutButton = page.getByTestId("checkout");
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
