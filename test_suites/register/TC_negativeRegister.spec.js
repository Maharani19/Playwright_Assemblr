const { test, expect } = require('@playwright/test');
const { homePage } = require('../../src/pages/homePage.js');
const { ENV } = require('../../src/utils/env.js')

const data = [
  {
    "name": "Regiter dengan input yang valid tanpa checklist agreement",
    "displayName": "testAutomation",
    "username": "aggf120",
    "email": "purnamamoon80@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Please fill in the fields"
  },

  {
    "name": "Regiter dengan email terdaftar",
    "displayName": "testAutomation",
    "username": "aggf12345",
    "email": "purnamamoon50@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
  },

  {
    "name": "Regiter dengan format email yang salah",
    "displayName": "testAutomation",
    "username": "aggf123",
    "email": "purnamamoon80",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Please make sure to fill the form correctly"
  },

  {
    "name": "Regiter dengan username terdaftar",
    "displayName": "testAutomation",
    "username": "aggf50",
    "email": "purnamamoon800@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Username is taken"
  },

  {
    "name": "Regiter dengan username yang tidak valid (Spesial Karakter)",
    "displayName": "testAutomation",
    "username": "aggf#20",
    "email": "purnamamoon90@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Please make sure to fill the form correctly"
  },

  {
    "name": "Regiter dengan username yang tidak valid (Spasi)",
    "displayName": "testAutomation",
    "username": "aggf 20",
    "email": "purnamamoon90@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Please make sure to fill the form correctly"
  },

  {
    "name": "Regiter dengan username yang tidak valid (<6 karakter)",
    "displayName": "testAutomation",
    "username": "aggf",
    "email": "purnamamoon90@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "invalid username"
  },

  {
    "name": "Regiter dengan password yang tidak valid (<6 karakter)",
    "displayName": "testAuto",
    "username": "aggf12345",
    "email": "purnamamoon9000@gmail.com",
    "password": "pur",
    "confirmPass": "pur",
    "expected": "Firebase: Password should be at least 6 characters (auth/weak-password)."
  },

  {
    "name": "Register dengan kolom confirm password berbeda dengan password",
    "displayName": "testAuto",
    "username": "aggf12345",
    "email": "purnamamoon9000@gmail.com",
    "password": "pur123",
    "confirmPass": "pur124",
    "expected": "password did not match!"
  },

  {
    "name": "Regiter dengan field display name dikosongkan",
    "displayName": "",
    "username": "aggf12345",
    "email": "purnamamoon1000@gmail.com",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Please fill in the fields"
  },

  {
    "name": "Regiter dengan field username dikosongkan",
    "displayName": "testAuto",
    "username": "",
    "email": "purnamamoon1000@gmail.com",
    "password": "purpur",
    "confirmPass": "purpur",
    "expected": "invalid username"
  },

  {
    "name": "Regiter dengan field email dikosongkan",
    "displayName": "testAuto",
    "username": "aggf12345",
    "email": "",
    "password": "pur123",
    "confirmPass": "pur123",
    "expected": "Firebase: Error (auth/missing-email)."
  },

  {
    "name": "Regiter dengan field password dikosongkan",
    "displayName": "testAuto",
    "username": "aggf12345",
    "email": "purnamamoon1000@gmail.com",
    "password": "",
    "confirmPass": "pur123",
    "expected": "Please fill in the fields"
  },

  {
    "name": "Regiter dengan field confirm password dikosongkan",
    "displayName": "testAuto",
    "username": "aggf12345",
    "email": "purnamamoon1000@gmail.com",
    "password": "pur123",
    "confirmPass": "",
    "expected": "Please fill in the fields"
  }
]

test.describe('Test Case Negative Register', () => {
  test.beforeEach(async ({ page }) => {
      const home = new homePage(page);
      const env = new ENV()
      
      await page.goto(env.BASE_URL, {waitUntil:'domcontentloaded'})
      await page.waitForLoadState('networkidle')
      await home.btnConfirm.click()
      await home.btnSignUpHome.click()
  })

  data.forEach(dataRegis => {
    test(dataRegis.name, async ({ page }) => {
        const home = new homePage(page);
        if (dataRegis.name === "Regiter dengan input yang valid tanpa checklist agreement"){
          await home.typeRegName(dataRegis.displayName)
          await home.typeRegEmail(dataRegis.email)
          await home.typeRegUser(dataRegis.username)
          await home.typeRegPass(dataRegis.password)
          await home.typeConfirmPass(dataRegis.confirmPass)
          await home.btnSignUp.click()
          await home.checkErrMessage(dataRegis.expected)
        }else{
          await home.typeRegName(dataRegis.displayName)
          await home.typeRegEmail(dataRegis.email)
          await home.typeRegUser(dataRegis.username)
          await home.typeRegPass(dataRegis.password)
          await home.typeConfirmPass(dataRegis.confirmPass)
          await home.checkAgree()
          await home.btnSignUp.click()
          await home.checkErrMessage(dataRegis.expected)
        }
      })
  })
})