import { expect, type Locator, type Page } from "@playwright/test"

export class InventoryPage {
    public readonly page: Page
    public readonly headerContainer: Locator

    public constructor(page: Page) {
        this.page = page
        this.headerContainer = page.getByText('Swag Labs')
    }

    public async assertHeaderTitle() {
        expect(this.headerContainer).toContainText("Swag Labs")
    }
}