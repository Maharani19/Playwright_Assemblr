const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const path = require('path');

test.describe('Test Case Negative Posting', () => {

  test.beforeEach(async ({ page }) => {
    test.setTimeout(360000)
    const env = new ENV()
    const home = new homePage(page)
    const kelas = new classPage(page)
    
    await page.goto(env.BASE_URL, {waitUntil : 'domcontentloaded'})
    await page.waitForLoadState('networkidle')
    await home.btnConfirm.click()
    await home.login("cobacoba1", "cobacoba1")
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(10000)
    await home.btnskiping.click()
    await home.btnSkip.click()
    await home.navClass.click()
    await kelas.classCard.click()
    await page.waitForSelector(home.errMessage._selector)
})
  
  test("Posting File .txt", async ({ page }) => {
    const kelas = new classPage(page)
    const home = new homePage(page)
    const filepath = path.join(__dirname,'../../src/file/halo.txt')

    await kelas.addFile.click()
    let [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      kelas.upload.click(),
    ]);
    await fileChooser.setFiles(filepath);
    await kelas.btnSubmit.click()
    await page.waitForTimeout(5000)
    await expect(home.errMessage).toHaveText("oops something wrong try again later")
  })
})