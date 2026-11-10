export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.sortDropdown = page.getByTestId("product-sort-container");
        this.productNames = page.getByTestId("inventory-item-name");
    }

    async sortBy(option) {
        await this.sortDropdown.selectOption(option);
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }
}
