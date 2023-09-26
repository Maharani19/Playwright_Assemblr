const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');

test.describe('Test Case My Project',()=>{
    test("Delete Class", async({page})=>{
        const env = new ENV()
        const home = new homePage(page)

        await page.reload();
        await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
        await page.waitForLoadState('networkidle')
        await home.btnConfirm.click()
        await home.login("neptoneed","maharani")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnskiping.click()
        await page.waitForTimeout(10000)
        await home.btnSkip.click()
        await home.btnJoinClass.click()
        //await page.waitForTimeout(10000)
        await home.textbox.click().and.fill('raaj5')
        //await home.textbox.fill('e6dv3')
        await home.btnproses.click()
        await page.waitForTimeout(10000)
        await page.locator('#detail-class-header').click();
       
    })
})