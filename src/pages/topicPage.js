const { expect } = require('@playwright/test');

exports.topicPage = class topicPage {

  constructor(page) {
    this.page = page;
    this.titleTopic = page.locator("(//div[@class='topic-detail-header-desktop2'])")
  }
}
