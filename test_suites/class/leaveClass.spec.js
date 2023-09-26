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
        // await home.btnJoinClass.click()
        // await home.textbox.click().fill('hbe7n')
        // await home.btnproses.click();
        // await page.locator('#detail-class-header').getByText('Welcome', { exact: true }).click();
        await page.getByRole('link', { name: 'Welcome 2 Member' }).click();
        await page.getByText('Members').click();
        await page.getByText('Leave Class').click();
        await page.getByText('Yes').click();
        await page.goto('https://app-edu.assemblrworld.com/Class');
       
    })
})