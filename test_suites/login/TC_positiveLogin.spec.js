const { test, expect } = require('@playwright/test');
const { homePage } = require('../../src/pages/homePage.js');
const { ENV } = require('../../src/utils/env.js')

test.describe('Test Case Positive Login', () => {
  test.beforeEach(async ({ page }) => {
      test.setTimeout(360000)
      const env = new ENV()
      
      await page.goto(env.BASE_URL, {waitUntil : 'domcontentloaded'})
      //await page.waitForLoadState('networkidle')
  })

  test("Positive Login Username", async ({ page }) => {
      test.setTimeout(360000)
      const home = new homePage(page);

      await home.btnConfirm.click()
      await home.btnLogHome.click()
      await home.userLogInput.type("aggf60")
      await home.passLogInput.type("pur123")
      await Promise.all([
          page.waitForResponse(res => 
          res.url().includes('https://asblr.app/api/features/active'), {timeout : 360000}
          ),
          await home.btnLogin.click()
      ])
      await page.waitForLoadState('domcontentloaded')
      await home.successLogReg()
  })

  test("Positive Login Email", async ({ page }) => {
      test.setTimeout(360000)
      const home = new homePage(page);

      await home.btnConfirm.click()
      await home.login("purnamamoon@gmail.com","pur123")
      await page.waitForLoadState('domcontentloaded')
      await home.successLogReg()
  })
})