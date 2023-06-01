
const wdio = require('webdriverio');
//const reporting = require("@reporting");

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

main().catch(console.log);

async function main () {

  const client = await wdio.remote(opts);

  let nGAAppPackage = "com.cvshealth.ngasdk.sampleapp";
  let username = "DMT-S-W263952560"
  let password = "Aetna2aetna"

  isNGAAppInstalled(client, nGAAppPackage);

  let fallbackPolicy = await client.$("//android.widget.Button[@text='Fallback']");

  let biometricOnlyPolicy = await client.$("//android.widget.Button[@text='Biometric only']");

  let pINOnlyPolicy = await client.$("//android.widget.Button[@text='PIN only']");

  let policyToSelect = 'Fallback';
  
  switch (policyToSelect.toLowerCase()){

    case 'fallback':
      console.log('****************Selecting "Fallback" Policy');
      await fallbackPolicy.waitForExist({timeout:2000});
      //reporting().reportLog("Selecting Fallback policy");
      //reporting().reportScreenshot(client);

        await fallbackPolicy.click();
        

       //Click on 'Fallback' policy button
      break;

    case 'biometriconly':
      ('****************Selecting "Biometric Only" Policy');
      await policy.waitForExist({timeout:2000});
        reporting().reportLog("Selecting Biometric only policy");
        reporting().reportScreenshot(client);
        await policy.click();
        

      //Click on 'Biometric only' button
      break;

    case 'pinonly':
      ('****************Selecting "PIN Only" Policy');
      await policy.waitForExist({timeout:2000});
        reporting().reportLog("Selecting PIN only policy");
        reporting().reportScreenshot(client);
        await policy.click();
        

      //click on 'PIN only' button
      break;

    default:
      console.log('Error : No Policy Selected, Policy to be selected was :' +policyToSelect);
  }

  //selectPolicy(client, policy, policyToSelect);
  // client.pause(1000);
  // let signInLink = await client.$('//android.widget.Button[@content-desc="Sign In"]');
  // if (signInLink.waitForExist({timeout:2000})) {
  //   console.log(policyToSelect+' - Policy Selected successfully');
  // } else {
  //   console.log(policyToSelect+' - Policy Selection FAILED');
  // }
  //-----------
          // let settings = await client.$('//android.widget.TextView[@content-desc="Settings"]');

          // console.log('Navigating to "Settings" screen');
          
          // await settings.click();
          
          // //navigateToSettings(client, settings);
          // let appClientInfo = await client.$("//android.widget.TextView[@text='App and Client info']");
  // if (appClientInfo.waitForExist({timeout:2000})) {
  //   console.log('Navigation to "Settings" screen successful');
  // } else {
  //   console.log('Navigation to "Settings" screen FAILED');
  // }
        // await appClientInfo.click(); 
        // //navigateToAppClientInfo(client, appClientInfo);

        // let oKDialog = await client.$("//android.widget.Button[@text='OK']");
        // await oKDialog.click();
        // console.log('Clicking on the OK button');
  //clickOnOK(client, oKDialog);

  //let appClientInfoLabel = await client.$('//android.widget.FrameLayout[@content-desc="App and Client Info"]');
  // if (appClientInfoLabel.waitForExist({timeout:2000})) {
  //   console.log('Alert window handled successfully');
  // } else {
  //   console.log('Alert window handling FAILED');
  // };
        // await client.back();
        // console.log('Navigating Back');
  // goBackToSettings(client);
  // let developerSettingsScreenLabel = await client.$('//android.widget.FrameLayout[@content-desc="Developer Settings"]');
  // if (developerSettingsScreenLabel.waitForExist({timeout:2000})) {
  //   console.log('Navigation to "Settings" screen successful');
  // } else {
  //   console.log('Navigation to "Settings" screen FAILED');
  // };
      // await client.back();
      // console.log('Navigating Back');
  // goBackToSignIn(client);
  // let signInScreenLabel = await client.$('//android.widget.FrameLayout[@content-desc="Sign In"]');
  // if (signInScreenLabel.waitForExist({timeout:2000})) {
  //   console.log('Navigation to "Sign In" screen successful');
  // } else {
  //   console.log('Navigation to "Sign In" screen FAILED');
  // };
  //-----------
  await client.pause(2000);
  let signIn = client.$('//android.widget.Button[@content-desc="Sign In"]');
  await signIn.click();

  //signIn(client, signInLink);
  console.log('Clicking on Sign In successful');
  await client.pause(35000);
  // let elem = await client.$("//android.widget.Button[@id='loginButton']");
  // await elem.waitUntil(async function () {
  //   return (await this.getText()) === 'Secure Log In'
  // });
  queryNGAAppStatus(client, nGAAppPackage);
  let skipToMainContent = await client.$('//android.view.View[@content-desc="Skip to main content"]');
  await skipToMainContent.click();

  await client.pause(20000);
  queryNGAAppStatus(client, nGAAppPackage);

  enrollButton = await client.$("//android.widget.Button[@text='Enroll']");
  await enrollButton.waitForDisplayed();
  await enrollButton.click(); 
  await client.pause(5000);
  await client.fingerPrint(1);
  await client.fingerPrint(2);
  await client.fingerPrint(3);
  await client.fingerPrint(4);
  // contextNames = await client.getContexts();
  // await client.switchContext("WEBVIEW_com.cvshealth.ngasdk.sampleapp");
  // console.log('Context : ' +contextNames);
  //   for (String c : contextNames) {
  //       if (c.contains("WEBVIEW")) {
	//     driver.context(c);
	//   }
  // }
  // let usernameInput = await client.$('//*[@id="sourceContainer"]/div/div[3]/div/div/div/div[22]/span[3]');
  // await usernameInput.setValue(username); //type user name

  // let passwordInput = await client.$('//*[@id="sourceContainer"]/div/div[3]/div/div/div/div[26]/span[3]');
  // await passwordInput.setValue(password); //type password

  // let secureLogIn = await client.$('//*[@id="sourceContainer"]/div/div[3]/div/div/div/div[29]/span[3]/span/span/span/span');
  // await secureLogIn.click(); //Click on 'Secure Log In'
  //nGAAppClose();
  //nGAAppRemove();

  // await client.pause(3000);
  
  // await signIn.click();

  // alertTitle = await client.$("//*[contains(@id,'alertTitle')]");

  //***********


  // await client.pause(3000);
  
  // await client.execute('mobile: scroll', {direction: 'left'});
  // await client.pause(3000);
  // await client.execute('mobile: scroll', {direction: 'left'});
  // await client.pause(3000);
  /*
  let firstContext = client.getContext();
  console.log('This is the current context : ' +firstContext);

  await client.pause(30000);
  // await client.background(5);
  // await client.pause(5000);
  // await client.activateApp('com.cvshealth.ngasdk.sampleapp');
  let currentContext = await client.getContext();
  console.log('This is the current context : ' +currentContext);
  //await client.switchContext('WEBVIEW_1');

  primaryAuthText = await client.$("//android.widget.TextView[@text='Secure Member Log-in']");
  primaryAuthTextStatus = await primaryAuthText.waitForExist({timeout: 5000});

  if (primaryAuthTextStatus) {
    console.log('****************Primary Auth page text identified');
    const nGAUsername = 'DMT-S-W263952560';
    const nGAPassword = 'Aetna2aetna';
    primaryAuthentication(client, nGAUsername, nGAPassword);

  } else {

    console.log('Error : Primary Authentication page not displayed');
  }
  */

}

//*************************************************************Verify the Installation of the NGA Sample Application
async function isNGAAppInstalled(driver, appPackage) {

  if (await driver.isAppInstalled(appPackage)) {
    console.log('NGA Sample App installed Successfully');
  } else {
    console.log('NGA Sample App installation Failed');
  }

}

//*************************************************************Primary Authentication : Login to NGA Sample App with Password before enrolling for Passwordless FIDO Authentication
async function primaryAuthentication(driver, username, password) {

  // let currentContext = await driver.getContext();
  // console.log('This is the current context : ' +currentContext);



}

//*************************************************************Select the NGA policy
// async function selectPolicy(driver, policylink, nGAPolicySelected) {



// }

//*************************************************************State of the NGA Sample App
async function queryNGAAppStatus(driver, appPackage) {
  let state = driver.queryAppState(appPackage);
  console.log('This is the current state : ' +state);

  switch (state){
    case 0:
      console.log('NGA Sample App is NOT INSTALLED');
      break;

    case 1:
      console.log('NGA Sample App is NOT RUNNING');
      break;
      
    case 2:
      console.log('NGA Sample App is running in the BACKGROUND/SUSPENDED');
      break;

    case 3:
      console.log('NGA Sample App is running in the BACKGROUND');
      break;

    case 4:
      console.log('NGA Sample App is running in the FOREGROUND');
      break;

    default:
      console.log('Error : No state');
    }
  }

  //*************************************************************Verify if the Keyboard is displayed
  async function isKeyboardDisplayed(driver) {

    let status = driver.isKeyboardShown();
    if (status) {
      console.log('Device keyboard is being displayed successfully');
    } else {
      console.log('Device keyboard is not displayed');
    }

  }
  //*************************************************************Navigate to Settings screen
  // async function navigateToSettings(driver, settingsLink) {
    
    
  //    //Click on 'Settings' icon

  //   return;
  // }
  //*************************************************************Navigate to App & Client Info screen
  async function navigateToAppClientInfo(driver, appClientInfoLink) {

    // do {
      
    // } while (await appClientInfoLink.waitForExist({timeout:1000}));
    // return;
  }

  async function clickOnOK(driver, oKDialogButton) {
    
    // if (oKDialogButton.waitForExist({timeout:2000})) {

    //   // //Get the Alert text
    //   // alertTitleText = await alertTitle.getText();
    //   // console.log(alertTitleText);

    //   // //Get the Alert Message text
    //   // alertMessage = await client.$("//android.widget.TextView[@id='android:id/message']");
    //   // alertMessageText = await alertMessage.getText();
    //   // console.log(alertMessageText);

    //   //Click on OK button
      

    
    // } else {

    //   console.log('No Alert displayed');

    // }
    // return;
  }

  async function goBackToSettings(driver) {

    // return;
  }

  async function goBackToSignIn(driver) {
    // await driver.back();
    // console.log('Navigating Back');
    // return;

  }
  //*************************************************************Click on 'Sign In' button
  async function signIn(driver, signInLink) {

    // let signInLinkStatus = await signInLink.waitForExist({timeout: 5000});
    // if (signInLinkStatus) {
    //   do {
        
    //   } while (signInLink.waitForExist({timeout:2000}));
    // } else {
    //   console.log('Error : Sign In button not displayed');
    // };
    // return;

  }
