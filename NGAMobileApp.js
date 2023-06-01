/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

const wdio = require('webdriverio');

module.exports = class NGAMobileApp {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    
    async launch () {

        const opts = {
            path: '/wd/hub',
            port: 4723,
            capabilities: {
              platformName: "Android",
              platformVersion: "13",
              deviceName: "Android Emulator",
              app: "/Users/c1315249/Downloads/sampleapp-qa-debug_015.apk",
              appPackage: "com.cvshealth.ngasdk.sampleapp",
              appActivity: ".presentation.ui.activities.MainActivity",
              automationName: "UiAutomator2",
              avd: "Pixel4"
            }
          };
          //capabilities.setCapability("avd","AndroidTestDevice");

        const client = await wdio.remote(opts);
        return client;
    }
}
