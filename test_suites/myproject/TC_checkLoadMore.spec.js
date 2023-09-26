const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');

test.describe('Test Case My Project', () => {

  test("Check Button Load More", async ({ page }) => {
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
      do{
          await home.btnLoadMore.click()
      }while(await home.btnLoadMore.isVisible())
      await expect(home.btnLoadMore).not.toBeVisible()
  })
})