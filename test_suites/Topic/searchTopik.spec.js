const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');
test.describe('Test Case Topic', () => {

    test("search topic", async ({ page }) => {
        const env = new ENV()
        const home = new homePage(page)
        const name = new NAME()
        //onst randomName = name.randomName
  
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
        await page.locator('div').filter({ hasText: /^All Topics$/ }).getByRole('img').click();
        await page.getByPlaceholder('Enter search keywords').click();
        await page.getByPlaceholder('Hit enter to search').fill('Getaran');
        await page.keyboard.press ('Enter')
        await page.waitForTimeout(10000)
        await page.locator('div').filter({ hasText: /^3D ContentsGETARAN BEBAS$/ }).first().click();
        await page.getByRole('img').nth(3).click();
        
       })
  })