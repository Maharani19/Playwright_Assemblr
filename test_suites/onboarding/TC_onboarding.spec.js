const { test, expect } = require('@playwright/test');
const { homePage } = require('../../src/pages/homePage.js');
const { ENV } = require('../../src/utils/env.js')

test.describe('Test Case Onboarding', () => {
    test.use({ viewport: { width: 1199, height: 1080 } });
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    test.beforeEach(async ({ page }) => {
            test.setTimeout(360000)
            const env = new ENV()
        
            await page.goto(env.BASE_URL, {waitUntil : 'domcontentloaded'})
            await page.waitForLoadState('networkidle')
    })

    test("Onboarding for screen width < 1200", async ({ page }) => {
            test.setTimeout(360000)
            const home = new homePage(page);
            const number = getRndInteger(10000,99999);
            const name = "testAutomation"
            const email = "testerakun" + number + "@gmail.com"
            const username = "testerakun" + number
            const pass = "testerassemblr"
            const confpass = "testerassemblr"
      
            await home.register(name,username,email,pass,confpass)
            await home.onboarding("mobile")
            await page.waitForLoadState('networkidle')
            await page.waitForTimeout(8000)
            await home.successLogReg()
    })
})