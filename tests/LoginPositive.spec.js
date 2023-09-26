import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-edu.assemblrworld.com/');
  await page.goto('https://app-edu.assemblrworld.com/Prelogin');
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'I already have an account' }).click();
  await page.getByPlaceholder('Enter your email or username').click();
  await page.getByPlaceholder('Enter your email or username').fill('testerakunedu');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('testerakun26');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByLabel('Skip — I\'ve known everything').click();
  await page.locator('.navbar-logo').click();
});