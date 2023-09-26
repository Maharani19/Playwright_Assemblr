const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');
test.describe('Test Case Profile', () => {

    test("voucher valid", async ({ page }) => {
        const env = new ENV()
        const home = new homePage(page)
        //const name = new NAME()
          
        await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
        await page.waitForLoadState('networkidle')
        await home.btnConfirm.click()
        await home.login("akuntesteredu", "akuntesteredu")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnskiping.click()
        await home.btnSkip.click()
        await page.waitForTimeout(300)
        await home.btnUpgrade.click();
        await home.popupUpgrade.click()
        await page.waitForTimeout(300)
        await home.btnSubscribe.click();
        await home.payMeth.click();
        await home.fieldcode.click();
        await page.frameLocator('iframe[title="payment-pwa"]').getByPlaceholder('Voucher Code').fill('singlemonthly');
        await page.waitForTimeout(300)
        await home.btnapply.click()
        await page.frameLocator('iframe[title="payment-pwa"]').locator('div').filter({ hasText: /^Invalid$/ }).nth(2).click();
        await page.frameLocator('iframe[title="payment-pwa"]').getByText('Purchase').isDisabled();
    
        
       })
  })