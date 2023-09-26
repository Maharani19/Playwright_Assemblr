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
        await home.login("testerakunedu","testerakun26")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnskiping.click()
        //await home.btnSkip.click()
        await home.navClass.click()
        await home.class.click()
        await page.getByText('Materials', { exact: true }).click();
        await page.getByRole('button', { name: '' }).first().click();
    })
})