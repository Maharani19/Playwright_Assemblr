const { expect } = require('@playwright/test');

exports.classPage = class classPage {

  constructor(page) {
    this.page = page;
    this.addClass = page.locator("(//*[name()='svg'][@class='class-btn1'])[1]")
    this.inputClassName = page.locator("(//input)")
    this.inputDescClass = page.locator("(//textarea)")
    this.btnCreate = page.getByRole("button", {name: "Create"})
    this.className = page.locator("(//div[@id='header-name'])[1]")
    this.classCard = page.locator("(//a[@class='class-item'])[1]")
    this.addLink = page.getByText("Link", {exact: true})
    this.addProject = page.getByText("ASSEMBLR Project", {exact: true})
    this.addImage = page.getByText("Image", {exact: true})
    this.addVideo = page.getByText("Video", {exact: true})
    this.addFile = page.getByText("File", {exact: true})
    this.inputLink = page.locator("(//input[@id='post-content'])[1]")
    this.btnAddLink = page.getByText("Add Link")
    this.btnSubmit = page.getByRole("button", {name: "Submit"})
    this.assertLink = page.locator("(//div[@class='meta-container-detail']//p)[2]")
    this.assertAddLink = page.locator("(//div[@class='post-container-username'])[1]")
    this.upload = page.locator("(//b[normalize-space()='Or, you could browse file'])[1]")
    this.assertFile = page.locator("(//img[@class='file-meta'])[1]")
    this.inputcomen = page.locator("(//textarea)")
    this.browsefile = page.locator('#file-selector')
    this.carigambar = page.locator("//input[@id='file-selector']")
    this.btnlink = page.locator('#post-content')
    this.tmbhlink = page.locator('#post-content')
  }

  async assertClass(className){
    await expect(this.className).toHaveText(className)
  }
}
