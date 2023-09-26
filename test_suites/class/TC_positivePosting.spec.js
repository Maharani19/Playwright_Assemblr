const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const path = require('path');

test.describe('Test Case Positive Posting', () => {

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
    await homePage.btnImge.click()
    await page.waitForSelector(home.errMessage._selector)
})

  test("Posting Link", async ({ page }) => {
    const kelas = new classPage(page)
    const link = "https://youtu.be/iJWptrfikbw"

    await kelas.addLink.click()
    await kelas.inputLink.type(link)
    await kelas.btnAddLink.click()
    await kelas.btnSubmit.click()
    await page.waitForTimeout(5000)
    await expect(kelas.assertLink).toHaveText(link)
    await expect(kelas.assertAddLink).toContainText("link")
  })
  test("Input Link", async({page}) =>{
    const kelas = new classPage(page)
    const link = "https://youtu.be/2rRX_9adORY?si=qUfcpq0xTh7MiKi-"
    
    await kelas.btnlink.click();
    await kelas.tmbhlink.type(link)
    await kelas.btnAddLink.click()
    await kelas.btnSubmit.click()
    await page.waitForTimeout(5000)
    await expect(kelas.assertLink).toHaveText(link)
    await expect(kelas.assertAddLink).toContainText("link")
    // await page.getByText('Add Link').click();
    // await page.getByRole('button', { name: 'Submit' }).click();
  })

  test("Posting Video", async ({ page }) => {
    const kelas = new classPage(page)
    const link = "https://youtu.be/iJWptrfikbw"

    await kelas.addVideo.click()
    await kelas.inputLink.type(link)
    await kelas.btnAddLink.click()
    await kelas.btnSubmit.click()
    await page.waitForTimeout(5000)
    await expect(kelas.assertLink).toHaveText(link)
    await expect(kelas.assertAddLink).toContainText("video")
  })

  test("Posting Image", async ({ page }) => {
    const kelas = new classPage(page)
    const filepath = path.join(__dirname,'../../src/file/markergajah.jpg')

    await kelas.addImage.click()
    let [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      kelas.upload.click(),
    ]);
    await fileChooser.setFiles(filepath);
    await kelas.btnSubmit.click()
    await page.waitForTimeout(5000)
    await expect(kelas.assertAddLink).toContainText("image")
  }) 
  
  test("Posting File", async ({ page }) => {
    const kelas = new classPage(page)
    const filepath = path.join(__dirname,'../../src/file/halo.pdf')

    await kelas.addFile.click()
    let [fileChooser] = await Promise.all([
      page.waitForEvent('filechooser'),
      kelas.upload.click(),
    ]);
    await fileChooser.setFiles(filepath);
    await kelas.btnSubmit.click()
    await page.waitForTimeout(5000)
    await expect(kelas.assertFile).toBeVisible()
  })
})