const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');

test.describe('Test Case Class', () => {

  test("Adding comments to class posts", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)
      const name = new NAME()
      const randomName = name.randomName

      await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.login("cobacoba1", "cobacoba1")
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      await home.btnskiping.click()
      await home.btnSkip.click()
      await home.navClass.click()
      //await home.clkclass.click()
      await home.class.click()
      await page.waitForTimeout(10000)
      //await home.cardposting.isVisible()
      await home.btncomen.click()
      await home.fieldcomn.click()
      //await home.comment.waitUntil()
      // await comment.type(randomName)
      // await comment.type("uyuuyu")
      //await page.comment.type('Write down your comments','uyu')
      //await home.comment.getByRole('Write down your comments').fill('Peter');
      //await fieldcomn.type("yoi");
      //await fieldcomn.fill("ypi")
      await inputcomen.type("piu")
      await home.btnsumbmitcoment.click()
      //await expect(home.class).toHaveText(comment)
      await page.waitForLoadState('domcontentloaded')
      
  })
})