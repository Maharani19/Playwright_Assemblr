const { expect } = require('@playwright/test');

exports.homePage = class homePage {

  constructor(page) {
    this.page = page;
    this.userLogInput = page.locator("(//input[@placeholder='Enter your email or username'])[1]")
    this.passLogInput = page.locator("(//input[@placeholder='Enter your password'])[1]")
    this.btnSignUpHome = page.getByText("Sign Up Now")
    this.btnSignUp = page.getByRole('button', { name: 'Sign Up', exact: true })
    this.errMessage = page.locator("(//div[@class='notification error'])[1]")
    this.nameRegInput = page.locator("(//input[@placeholder='Enter your full name '])[1]")
    this.userRegInput = page.locator("(//input[@class='auth-form-input username-input'])[1]")
    this.emailRegInput = page.locator("(//input[@placeholder='Enter your email '])[1]")
    this.passRegInput = page.locator("(//input[@placeholder='Enter your password '])[1]")
    this.confirmPassRegInput = page.locator("(//input[@placeholder='Enter your confirm password '])[1]")
    this.agreeCheck = page.locator("(//input[contains(@type,'checkbox')])[2]")
    this.btnLogHome = page.getByText("I already have an account")
    this.btnLogin = page.getByRole('button', { name: 'LOGIN' })
    this.continueReg = page.locator("div[class='Navbar_button__K2Lvx Navbar_with_email__9GZmn']")
    this.btnNextOnboard = page.getByRole('button', { name: 'Next' })
    this.btnFinishOnboard = page.getByRole('button', { name: 'Finish' })
    this.cardOnboard = page.locator("(//div[@class='card_option'])[3]")
    this.checkOnboard = page.locator("(//div[@class='option_item_container'])[2]")
    this.interestList = page.locator("(//button[@class='card'])[9]")
    this.hoverVideo = page.locator("(//div[@class='image_container'])[1]")
    this.btnLetsMakeIt = page.locator("(//button[@class='let_make_it_button'])[1]")
    this.btnExitTutorial = page.locator("(//div[@class='control'] //p)[2]")
    this.btnExitEditor = page.locator("(//div[@class='item exit-btn'])[1]")
    this.btnQuitWithoutSave = page.locator("(//button[normalize-space()='Quit without saving'])[1]")
    this.location = page.locator("(//div[@class='ant-space-item'])[2]")
    this.inputAge = page.locator("(//input[@id='basic_age_range'])[1]")
    this.selectAge = page.getByTitle('18-24').getByText('18-24')
    this.btnNoThanks = page.getByText('No, Thanks')
    this.imgWelcome = page.locator("(//img[@src='/image/Welcome.png'])[1]")
    this.btnConfirm = page.getByText('Confirm')
    this.btnSkip = page.getByText("Skip — I've known everything")
    this.navYou = page.getByRole('link', { name: 'You' })
    this.navClass = page.getByRole('link', { name: 'Class', exact: true })
    this.btnCreate = page.locator("(//div[@class='account-desktop-overlay-btn1'])")
    this.btnView = page.locator("(//div[@class='project-dialog-2'])[2]")
    this.btnEdit = page.locator("(//div[@class='project-dialog-2'])[1]")
    this.btnDelete = page.getByText("delete")
    this.btnConfDelete = page.getByRole('button', {name : 'DELETE'})
    this.btnRefresh = page.locator("(//div[@class='account-creation-refresh-btn'])")
    this.titleCreation = page.locator("(//div[@class='account-creation-item-div']//div)[1]")
    this.cardCreation = page.locator("(//div[@class='account-creation-item '])[1]")
    this.btnLoadMore = page.getByRole('button', {name: 'More'})
    this.clkclass = page.getByRole('link', { name: 'Class', exact: true })
    this.class = page.getByRole('link', { name: 'Class QA 1 Member' })
    this.btn3dot = page.getByRole('button', { name: '' })
    this.btnsetting = page.getByText('Settings', { exact: true })
    this.btndltclass = page.getByRole('button', { name: 'Delete class' })
    this.btnProcess = page.getByRole('button', {name: 'Proceed'})
    this.titleClass = page.locator("(//div[@class='class-list']//div)[1]")
    this.btnImg = page.getByText('Image')
    this.textLinkFile = page.getByText('Or, you could browse file')
    //this.InputFile = page.locator('body').setInputFiles('QA.jpeg');
    this.btnSubmit = page.getByRole('button', { name: 'Submit' })
    this.postingan = page.locator("(//div[@class='image post-container-attachment']//div[1])")
    this.btndeletepost = page.locator("(//div[@class='button-icon red']//div)")
    this.popupclass = page.locator('div').filter({ hasText: '.a{opacity:0;}Pin Post.a{opacity:0;}Edit Post.a,.b{fill:#2a3884;}.a{opacity:0;}D' }).nth(3)
    this.Homepage = page.locator("(//div[@class ='wrapper']//div)")
    //this.btnfilter1 = page.locator("(//img[@src='/icon/ic_more.svg'])")
    this.btnfilter = page.locator('div').filter({ hasText: /^0 Comments0 Likes$/ }).locator('img').nth(2)
    //this.btncomn = page.locator("(//div[@class='post-container-button-options']//div[1])")
    this.btncomen = page.getByText('5 Comments')
    this.fieldcomn = page.getByPlaceholder('Write down your comments')
    //this.comment =  page.getByPlaceholder('Write down your comments').fill('uyu');
    this.btnsumbmitcoment = page.getByRole('button', { name: 'Submit' })
    this.commntpost = page.getByText('cobacoba1Aug 22 14:46uyu')
    this.btnskiping = page.getByRole('button', { name: 'Skip' })
    this.cardposting = page.locator("(//div[@class='post-container-mobile'][1])//div")
    this.btnTopics = page.getByRole('link', { name: 'Topics' })
    this.topics = page.getByRole('link', { name: 'Life Science' })
    this.content = page.getByRole("(//a[@class='content-item'][1])")
    this.btnshare = page.locator('.content-detail-share2 > img')
    this.btnUpgrade =    page.getByRole('button', { name: 'Upgrade' })
    this.popupUpgrade = page.frameLocator('iframe[title="payment-pwa"]').getByText('close Upgrade Plan MonthlyYearly2 months freeIndividual $4.99Per MonthPer SeatOn')
    this.btnSubscribe = page.frameLocator('iframe[title="payment-pwa"]').locator('div').filter({ hasText: /^Subscribe to Individual plan\$4\.99 \/ Month$/ }).first()
    this.payMeth = page.frameLocator('iframe[title="payment-pwa"]').getByRole('radio').first()
    this.Sendme = page.frameLocator('iframe[title="payment-pwa"]').getByLabel('Send me e-mails about product updates, surveys, and offers')
    this.btnpurchase = page.frameLocator('iframe[title="payment-pwa"]').getByText('Purchase$ 4.99')
    this.fieldcode = page.frameLocator('iframe[title="payment-pwa"]').getByPlaceholder('Voucher Code')
    this.btnapply = page.frameLocator('iframe[title="payment-pwa"]').getByText('Apply')
    this.btnImge = page.getByRole ('//div[@class="class-post-form-type"][3]')
    this.btnJoinClass = page.getByRole('button', { name: 'Join other class' })
    this.textbox = page.getByRole('//div[@class="join-code-list"]')         //('textbox').nth(1)
    this.btnproses = page.getByRole('button', { name: 'Proceed' })
  }
  async checkErrMessage(error) {
    await expect(this.errMessage).toContainText(error)
  }

  async typeRegName(name) {
    await this.nameRegInput.type(name)
  }

  async typeRegUser(username) {
    await this.userRegInput.type(username)
  }

  async typeRegEmail(email) {
    await this.emailRegInput.type(email)
  }

  async typeRegPass(password) {
    await this.passRegInput.type(password)
  }

  async typeConfirmPass(confpass) {
    await this.confirmPassRegInput.type(confpass)
  }

  async checkAgree() {
    await this.agreeCheck.check()
    await expect(this.agreeCheck.isChecked()).toBeTruthy()
  }

  async checkDisableBtn() {
    await expect(this.btnLogReg).toHaveClass('Navbar_button__K2Lvx Navbar_sign_in__J5dJN Navbar_hidden__lUkjV')
  }

  async checkActiveBtn() {
    await expect(this.btnLogReg).not.toHaveClass('Navbar_button__K2Lvx Navbar_sign_in__J5dJN Navbar_hidden__lUkjV')
  }

  async successLogReg() {
    await expect(this.imgWelcome).toBeVisible()
  }

  async login(username, password){
    await this.btnLogHome.click()
    await this.userLogInput.type(username)
    await this.passLogInput.type(password)
    await this.btnLogin.click()
  }

  async register(name, username, email, pass, confpass){
    await this.btnConfirm.click()
    await this.btnSignUpHome.click()
    await this.typeRegName(name)
    await this.typeRegEmail(email)
    await this.typeRegUser(username)
    await this.typeRegPass(pass)
    await this.typeConfirmPass(confpass)
    await this.checkAgree()
    await this.btnSignUp.click()
    await this.page.waitForSelector(this.location._selector)
  }

  async onboarding(device){
    await this.inputAge.click()
    await this.selectAge.click()
    await this.btnNextOnboard.click()
    await this.cardOnboard.click()
    await this.btnNextOnboard.click()
    await this.checkOnboard.click()
    await this.btnNextOnboard.click()
    await this.interestList.click()
    if(device === 'desktop'){
      await this.btnNextOnboard.click()
      await expect(this.page).toHaveURL(/.*videos/)
      await this.hoverVideo.hover()
      await this.btnLetsMakeIt.click()
      await this.page.waitForLoadState('networkidle')
      await this.page.waitForSelector(this.btnExitTutorial._selector)
      await this.btnExitTutorial.click()
      await this.btnExitEditor.click()
      await this.btnQuitWithoutSave.click()
    }else{
      await this.btnFinishOnboard.click()
    }
  }
}