const { test, expect } = require('@playwright/test');
const { ENV } = require('../../src/utils/env.js');
const { homePage } = require('../../src/pages/homePage.js');
const { topicPage } = require('../../src/pages/topicPage.js')

test.describe('Test Case My Project', () => {

  test("View Creation", async ({ page }) => {
      const env = new ENV()
      const home = new homePage(page)
      const topic = new topicPage(page)

      await page.goto(env.BASE_URL,{waitUntil : 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.login("aggf60", "pur123")
      await page.waitForLoadState('networkidle')
      await page.waitForTimeout(10000)
      await home.btnSkip.click()
      await Promise.all([
        page.waitForResponse(res => 
          res.url().includes('https://asblr.app/api/v2/creations/my-creations/'), {timeout : 8000}
        ),
        await home.navYou.click()
      ])
      await home.cardCreation.click()
      const title = await page.textContent(home.titleCreation._selector)
      await home.btnView.click()
      await expect(topic.titleTopic).toHaveText(title)
      await expect(page).toHaveURL(/.*Creation/)
    })
})