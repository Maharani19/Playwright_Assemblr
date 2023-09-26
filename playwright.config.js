const {PlaywrightTestConfig} = require('@playwright/test')

const config = {
  timeout: 120000,
  use: {
    headless: true,
    //video: 'retain-on-failure',
    viewport: {
      height: 1080,
      width: 1920
    }
  },
  reporter: [['html', { open: 'never' }]],
  globalSetup: require.resolve('./src/utils/globalSetup.js'),
};
  
module.exports = config;