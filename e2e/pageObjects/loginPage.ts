import type { Locator, Page } from "@playwright/test"

export class LoginPage {
    public readonly page: Page
    public readonly getUserUsername: Locator
    public readonly getUserPassword: Locator
    public readonly getLoginButton: Locator 

    public constructor(page: Page) {
        this.page = page
        this.getUserUsername = page.getByTestId('user-name')
        this.getUserPassword = page.getByTestId('password')
        this.getLoginButton = page.getByTestId('login-button')
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/')
    }
}