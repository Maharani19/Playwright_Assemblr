const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { classPage } = require('../../src/pages/classPage.js');
const { NAME } = require('../../src/utils/name.js');

test.describe('Test Case Class', () => {

  test("Adding comments to class posts", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)
      const name = new NAME()
      const randomName = name.randomName

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
      await page.waitForTimeout(10000)
      await home.topics.click();
      await page.waitForTimeout(10000)
      await home.content.click();
      await page.waitForTimeout(10000)
      await home.btnshare.click();
      await page.getByText('Share it to your class').click();
      await page.getByText('Class QA').click();
      await page.locator('#modal-close-button').click();
      await page.getByRole('link', { name: 'Class', exact: true }).click();
      await page.getByRole('link', { name: 'Class QA 1 Member' }).click();
      await page.getByText('Materials', { exact: true }).click();
      
     })
})