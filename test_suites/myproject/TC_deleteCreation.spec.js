const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');

test.describe('Test Case My Project', () => {

  test("Delete Creation", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)

      await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.login("testerakun1234567", "purpur")
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      await home.btnSkip.click()
      await home.navYou.click()
      const title = await page.textContent(home.titleCreation._selector)
      await home.cardCreation.click()
      await home.btnDelete.click()
      await home.btnConfDelete.click()
      await home.btnRefresh.click()
      await expect(home.titleCreation).not.toHaveText(title)
  })
})