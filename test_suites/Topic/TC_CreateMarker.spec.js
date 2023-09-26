const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const path  = require('path');


test.describe('Test Case Topic', () => {

    test("Create New Marker", async ({ page }) => {
        const env = new ENV()
        const home = new homePage(page)
          
        await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
        await page.waitForLoadState('networkidle')
        await home.btnConfirm.click()
        await home.login("testerakunedufree", "testerakunedufree")
        await page.waitForLoadState('networkidle')
        await page.waitForTimeout(10000)
        await home.btnskiping.click()
        await home.btnSkip.click()
        await page.waitForTimeout(10000)
        await page.getByRole('link', { name: 'You' }).click();
        await page.waitForTimeout(10000)
        await page.getByText('Custom marker')?.click();
        await page.waitForTimeout(10000)
        await page.getByText('Upload Custom Marker').click();
        await page.waitForTimeout(3600)
        await page.locator('.projects-selector > svg').click();
        await page.locator('div').filter({ hasText: /^Percobaan1$/ }).nth(2).click();
        await page.waitForTimeout(3600)
        //const kelas = new classPage(page)
        await page.locator('#file-selector').click()
        await page.locator('#file-selector').setInputFiles("D:/Assemblr/studio-test-suite-edu/src/file/key.jpg");
        await page.locator('div').filter({ hasText: /^browse file$/ }).locator('img').click();
        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await page.getByRole('button', { name: 'Upload' }).click();
       
        
       })
  })