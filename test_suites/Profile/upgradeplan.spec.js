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
        await page.waitForTimeout(300)
        await home.Sendme.click()
        const page1Promise = page.waitForEvent('popup');
        await home.btnpurchase.click();
        const page1 = await page1Promise;
        await page1.goto('https://checkout.stripe.com/c/pay/cs_live_a185CZtMhnj01Aoiwl2lx3VxZ6HJkyOG7H3el0bm83uAtZZfoxGwI3KsD5#fidkdWxOYHwnPyd1blppbHNgWnV3Smh9VFIxUU10SHxVR2ZwT2FJc1BJaycpJ2hsYXYnP34nYnBsYSc%2FJ0tEJyknaHBsYSc%2FJ0tEJykndmxhJz8nS0QneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqdWR8aGBrcStkdXUrZHZ2YGhnaXdyandpYStmamgneCUl');


    })
})