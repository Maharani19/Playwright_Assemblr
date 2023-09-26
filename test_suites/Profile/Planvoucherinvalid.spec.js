const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { default: clipboard } = require('clipboardy');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');
test.describe('Test Case Topic', () => {

    test("View detail topik", async ({ page }) => {
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
        await page.waitForTimeout(10000)
        await btnUpgrade.click();
        await popupUpgrade.click()
        await btnSubscribe.click();
        await payMeth.click();
        await mouse.down();
        //await MouseEvent(scrollX).waitUntil(20)
        await page.frameLocator('iframe[title="payment-pwa"]').getByPlaceholder('Voucher Code').click();
        await page.frameLocator('iframe[title="payment-pwa"]').getByPlaceholder('Voucher Code').fill('cobaiiinvoucher');
        await page.frameLocator('iframe[title="payment-pwa"]').locator('div').filter({ hasText: /^Apply$/ }).nth(1).click();
        await page.frameLocator('iframe[title="payment-pwa"]').locator('div').filter({ hasText: /^Invalid$/ }).nth(1).click();
        await page.frameLocator('iframe[title="payment-pwa"]').getByText('Purchase').isDisabled();
        
       })
  })