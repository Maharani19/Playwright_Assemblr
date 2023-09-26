const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');

test.describe('Test Case Class', () => {

  test("Create Class", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)
      const kelas = new classPage(page)
      const name = new NAME()
      const randomName = name.randomName

      await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.login("testerakunedu", "testerakun26")
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      //await home.btnskiping.click()
      await home.btnSkip.click()
      await home.navClass.click()
      await kelas.addClass.click()
      await kelas.inputClassName.type(randomName)
      await kelas.inputDescClass.type("Ini adalah kelas percobaan")
      await kelas.btnCreate.click()
      await page.waitForLoadState('domcontentloaded')
      await kelas.assertClass(randomName)
  })
})