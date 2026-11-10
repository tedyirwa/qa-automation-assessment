export class CartPage {
    constructor(page) {
        this.page = page;
        this.productName = page.getByTestId("inventory-item-name");
        this.checkoutButton = page.getByTestId("checkout");
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}
