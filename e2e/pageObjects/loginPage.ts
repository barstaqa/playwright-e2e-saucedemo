import { expect, type Locator, type Page } from "@playwright/test"

export class LoginPage {
    public readonly page: Page
    public readonly getUserUsername: Locator
    public readonly getUserPassword: Locator
    public readonly getLoginButton: Locator 
    public readonly getError: Locator

    public constructor(page: Page) {
        this.page = page
        this.getUserUsername = page.getByTestId('username')
        this.getUserPassword = page.getByTestId('password')
        this.getLoginButton = page.getByTestId('login-button')
        this.getError = page.getByTestId('error')
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/')
    }

    public async loginToApp(userName: string, password: string): Promise<void> {
        await this.getUserUsername.fill(userName)
        await this.getUserPassword.fill(password)
        await this.getLoginButton.click()
    }

    public async verifyErrorMessage(expectedText: string): Promise<void> {
        await expect.soft(this.getError.getByText(expectedText).first()).toBeVisible()
    }
}