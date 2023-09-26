const { test, expect } = require("@playwright/test")
const { homePage } = require('../../src/pages/homePage.js');
const { ENV } = require('../../src/utils/env.js')

const data = [
  {
    name: "Login dengan username tidak terdaftar",
    username: "aggf20",
    password: "pur123",
    expected: "Username is not valid",
  },

  {
    name: "Login dengan email tidak terdaftar",
    username: "aggf20@gmail.com",
    password: "pur123",
    expected: "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).",
  },

  {
    name: "Login dengan username terdaftar dengan password yang salah",
    username: "aggf60",
    password: "pur124",
    expected: "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).",
  },

  {
    name: "Login dengan email terdaftar dengan password yang salah",
    username: "purnamamoon@gmail.com",
    password: "pur124",
    expected: "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).",
  },
]

test.describe("Test Case Negative Login", () => {
  
  test.beforeEach(async ({ page }) => {
      const env = new ENV()

      await page.goto(env.BASE_URL, {waitUntil: 'domcontentloaded'})
      await page.waitForLoadState('networkidle')
  })

  data.forEach((dataUser) => {
    test(dataUser.name, async ({ page }) => {
        const home = new homePage(page)
        
        await home.btnConfirm.click()
        await home.login(dataUser.username, dataUser.password)
        await home.checkErrMessage(dataUser.expected)
    })
  })
})