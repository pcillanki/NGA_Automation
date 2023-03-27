const wdio = require('webdriverio');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "iOS",
    platformVersion: "16.1",
    deviceName: "iPhone 13",
    app: "/Users/c1315249/Downloads/NGA Sample App-3.app",
    automationName: "XCUITest"
  }
};
//capabilities.setCapability("avd","AndroidTestDevice");
async function main () {
  const client = await wdio.remote(opts);
  await client.launchApp();

  await client.pause(5000);
  //await client.deleteSession();
}

main();