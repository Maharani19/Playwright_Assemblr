const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');

test.describe('Test Case My Project',()=>{
    test("Delete Class", async({page})=>{
        const env = new ENV()
        const home = new homePage(page)

        await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
        await page.waitForLoadState('networkidle')
        await home.btnConfirm.click()
        await home.login("testerakunedu","testerakun26")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnSkip.click()
        await home.navClass.click()
        await home.clkclass.click();
        const titleClass = await page.textContent(home.titleClass._selector);
        await home.class.click();
        await home.btn3dot.click();
        await home.btnsetting.click();
        await home.btndltclass.click();
        await home.btnProcess.click();
        await page.waitForTimeout(10000);
        await expect(home.titleClass).not.toHaveText(titleClass);
        
    })
})