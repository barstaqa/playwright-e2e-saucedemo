import { test } from '@playwright/test'
import { LoginPage } from '../pageObjects/loginPage';

test.describe('Login to application using different type of users', () => {
    test.beforeEach(async () => {});

    test('Login to application', async ({page}) => {
        const loginPage = new LoginPage(page)
        await loginPage.goTo()
    })
});