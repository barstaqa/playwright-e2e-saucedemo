import { expect, test } from "@playwright/test";
import { LoginPage } from "../pageObjects/loginPage";
import { InventoryPage } from "../pageObjects/inventoryPage";
import { error } from "console";

test.describe("Login to application using different type of users", () => {
  test.beforeEach(async () => {});

  test("Login to application standard user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.loginToApp("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const shopTitle = new InventoryPage(page);
    await shopTitle.assertHeaderTitle();
  });

  test("Login to application locked out user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.loginToApp("locked_out_user", "secret_sauce");
    await loginPage.verifyErrorMessage("Epic sadface: Sorry, this user has been locked out.")
  });

  test("Login to application problem user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.loginToApp("problem_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const shopTitle = new InventoryPage(page);
    await shopTitle.assertHeaderTitle();
  });

  test("Login to application performance glitch user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.loginToApp("performance_glitch_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const shopTitle = new InventoryPage(page);
    await shopTitle.assertHeaderTitle();
  });

  test("Login to application error user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.loginToApp("error_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const shopTitle = new InventoryPage(page);
    await shopTitle.assertHeaderTitle();
  });

  test("Login to application visual user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.loginToApp("visual_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const shopTitle = new InventoryPage(page);
    await shopTitle.assertHeaderTitle();
  });

});
