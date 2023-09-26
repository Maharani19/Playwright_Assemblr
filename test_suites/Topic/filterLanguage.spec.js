const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');
test.describe('Test Case Topic', () => {

    test("View detail topik", async ({ page }) => {
        const env = new ENV()
        const home = new homePage(page)
        const name = new NAME()
        const randomName = name.randomName
        const elementHandle = await page.$('Indonesia');
  
        await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
        await page.waitForLoadState('networkidle')
        await home.btnConfirm.click()
        await home.login("cobacoba1", "cobacoba1")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnskiping.click()
        await home.btnSkip.click()
        await page.waitForTimeout(10000)
        await home.btnTopics.click();
        // await page.waitForTimeout(10000)
        // await home.topics.click();
        // await page.waitForTimeout(10000);
        await page.getByRole('link', { name: 'Topics' }).click();
        await page.waitForTimeout(10000)
        await page.getByRole('link', { name: 'Life Science' }).click();
        await page.waitForTimeout(10000)
        //await page.locator('#region-selector2').selectOption('indonesia').click()
        await elementHandle.selectOption().click()//lanjut disini
        await page.waitForTimeout(10000)
       })
  })