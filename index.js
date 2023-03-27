const wdio = require('webdriverio');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "13",
    deviceName: "Android Emulator",
    app: "/Users/c1315249/Downloads/sampleapp-qa-debug_013.apk",
    appPackage: "com.cvshealth.ngasdk.sampleapp",
    appActivity: ".presentation.ui.activities.MainActivity",
    automationName: "UiAutomator2",
    avd: "Pixel4"
  }
};
//capabilities.setCapability("avd","AndroidTestDevice");
async function main () {
  const client = await wdio.remote(opts);

  await client.pause(5000);
  await client.deleteSession();
}

main();