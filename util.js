async function nGAAppClose(driver){
    await driver.executeScript('mobile: terminateApp', [{bundleId: nGAAppPackage}])
    console.log('NGA App closed')
  }

  async function nGAAppRemove(driver){
    await driver.removeApp();
    console.log('NGA App removed')
  }