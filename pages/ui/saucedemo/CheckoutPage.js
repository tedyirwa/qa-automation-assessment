export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.getByLabel("First Name");
        this.lastNameInput = page.getByLabel("Last Name");
        this.postalCodeInput = page.getByLabel("Zip/Postal Code");
        this.continueButton = page.getByTestId("continue");
        this.finishButton = page.getByTestId("finish");
        this.completeMessage = page.getByTestId("complete-header");
    }

    async fillInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async getCompleteMessage() {
        return await this.completeMessage.textContent();
    }
}
