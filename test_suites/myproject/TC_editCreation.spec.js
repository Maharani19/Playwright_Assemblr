const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');

test.describe('Test Case My Project', () => {

  test("Edit Creation", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)

      await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.login("aggf60", "pur123")
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      await home.btnSkip.click()
      await home.navYou.click()
      await home.cardCreation.click()
      await home.btnEdit.click()
      await page.waitForLoadState('networkidle')
      await expect(page).toHaveURL(/.*authKey.*editor=-./)
  })
})