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
        await home.login("cobacoba1","cobacoba1")
        await page.waitForLoadState('networkidle')
        await page.getByRole('button', { name: 'Skip' }).click();
        await page.waitForTimeout(10000)
        await home.btnSkip.click()
        await home.navClass.click()
        await home.class.click();
        await home.btnfilter.click()
        const popupPromise = page.waitForEvent('popup');
        await page.getByText('open the popup').click();
        const popup = await popupPromise;
        await home.btndeletepost.click()
        await page.waitForTimeout(10000)
        const homapage = await page.textContent(home.Homepage._selector);
        await expect(home.Homepage).not.toHaveText(homapage)
    })
})