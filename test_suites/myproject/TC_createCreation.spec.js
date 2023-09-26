const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');

test.describe('Test Case My Project', () => {

  test("Create Creation", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)

      await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.login("cobacoba1", "cobacoba1")
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      await home.btnskiping.click()
      await home.btnSkip.click()
      await home.navYou.click()
      await page.locator('div').filter({ hasText: /^Your Classes$/ }).getByRole('img').locator('path').click();
      //await home.btnCreate.click()
      await page.waitForLoadState('load')
      await expect(page).toHaveURL(/.*Editor/)
  })
})