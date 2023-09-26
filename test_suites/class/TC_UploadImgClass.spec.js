const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');

test.describe('Test Case My Project',()=>{
    test("Upload Postingan Gambar pada kelaas", async({page})=>{
        const env = new ENV()
        const home = new homePage(page)
    
        //console.log({ BASE_URL: env.BASE_URL })

        await page.goto(env.BASE_URL, {waitUntil : 'domcontentloaded'})
        await page.waitForLoadState('networkidle')
        await home.btnConfirm.click()
        await home.login("testerakunedu","testerakun26")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnSkip.click()
        await home.navClass.click()
        await home.clkclass.click()
        await page.waitForSelector(home.errMessage._selector)
        //const postingan = await page.textContent(home.postingan._selector)
        // await home.class.click()
        // await home.btnImg.click()
        // await home.textLinkFile.click()
        // //await home.InputFile.click()
        // await page.waitForTimeout(360000)
        // await home.btnSubmit.click()
        // await expect(home.postingan).not.toHaveText(postingan)       
    })
    test("Posting Image", async ({ page }) => {
        const kelas = new classPage(page)
        const filepath = path.join(__dirname,'../../src/file/QA.jpeg')
    
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
})