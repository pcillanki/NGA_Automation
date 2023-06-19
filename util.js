  async function nGAAppClose(driver){
    await driver.executeScript('mobile: terminateApp', [{bundleId: nGAAppPackage}])
    console.log('NGA App closed')
  }

  async function nGAAppRemove(driver){
    await driver.removeApp();
    console.log('NGA App removed')
  }

  async function wait(driver, data) {
    try {
      await driver.pause(data);
    } catch (e) { 
      console.log(e);
    }
  }

  async function goBackToSignIn(driver) {
    await driver.back();
    console.log('Navigating Back');
    return;
  }