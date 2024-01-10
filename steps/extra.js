const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

Given('the user launches the NGA sample application', async function() {

    console.log("*****the user launches the NGA sample application");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

    const showHideButton = await driver.$("//android.widget.ToggleButton[@content-desc='Show or hide pin']");
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/toggleButton
    //id - com.cvshealth.ngasdk.sampleapp:id/toggleButton
    //accessibility id - Show or hide pin
    //text - Show/Hide

    const infoButton = await driver.$("//android.widget.ImageButton[@content-desc='Info']");
    //id - com.cvshealth.ngasdk.sampleapp:id/imgInfo
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/imgInfo
    //accessibility id - Info

    const cancelEnrollButton = await driver.$("//android.widget.Button[@content-desc='Cancel Enrollment']");
    //id - com.cvshealth.ngasdk.sampleapp:id/btnCancel
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/btnCancel
    //accessibility id - Cancel Enrollment
    //text - Cancel Enrollment

    const infoMessage = await driver.$("//android.widget.TextView[@resource-id='android:id/message']");
    //text - Your PIN cannot contain: 3 or more sequential numbers (1234…) A repeating pattern (4545…)
    //id - android:id/message
    //resource-id - android:id/message

    const pinScreenHeader = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/textview_Pin_Header']");
    //id - com.cvshealth.ngasdk.sampleapp:id/textview_Pin_Header
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/textview_Pin_Header
    //text - Set up a custom PIN

    const pinScreenIntro = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/textviewCreatePintIntroduction']");
    //id - com.cvshealth.ngasdk.sampleapp:id/textviewCreatePintIntroduction
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/textviewCreatePintIntroduction
    //text - Enter a unique 6-digit PIN.

    const cancelPINMessage = await driver.$("//android.widget.TextView[@resource-id='android:id/message']");
    //id - android:id/message
    //text -PIN enrollment cancelled
    //resource-id - android:id/message

    const cancelPINMessageHeader = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/alertTitle']");
    //id - com.cvshealth.ngasdk.sampleapp:id/alertTitle
    //text - An error has occurred!
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/alertTitle

    const cancelPINOKButton = await driver.$("//android.widget.Button[@resource-id='android:id/button1']");
    //id - android:id/button1
    //text - OK
    //resource-id - android:id/button1


    const biometricPrimaryAuthenticator = await driver.$("//android.widget.RadioButton[@resource-id='com.cvshealth.ngasdk.sampleapp:id/radioBio']");
    //id - com.cvshealth.ngasdk.sampleapp:id/radioBio
    //class - android.widget.RadioButton
    //text - Biometric
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/radioBio

    const pinPrimaryAuthenticator = await driver.$("//android.widget.RadioButton[@resource-id='com.cvshealth.ngasdk.sampleapp:id/radioPinOnly']");
    //id - com.cvshealth.ngasdk.sampleapp:id/radioPinOnly
    //class - android.widget.RadioButton
    //text - PIN
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/radioPinOnly

    const spanishRadioButton = await driver.$("//android.widget.RadioButton[@resource-id='com.cvshealth.ngasdk.sampleapp:id/radioSpanish']");
    //id - com.cvshealth.ngasdk.sampleapp:id/radioSpanish
    //class - android.widget.RadioButton
    //text - Spanish
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/radioSpanish

    const englishRadioButton = await driver.$("//android.widget.RadioButton[@resource-id='com.cvshealth.ngasdk.sampleapp:id/radioEnglish']");
    //id - com.cvshealth.ngasdk.sampleapp:id/radioEnglish
    //class - android.widget.RadioButton
    //text - English
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/radioEnglish

    const changePolicy = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvEnvValue']");
    //id - com.cvshealth.ngasdk.sampleapp:id/tvEnvValue
    //class - android.widget.TextView
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvEnvValue



    const idTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue']");
    //id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue
    //class - android.widget.TextView
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue

    const accessTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue']");
    //id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue
    //class - android.widget.TextView
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue

    const enrollFailedMessage = await driver.$("//android.widget.TextView[@resource-id='android:id/message']");
    //id - android:id/message
    //class - android.widget.TextView
    //text - Enroll failed
    //resource-id - android:id/message

    const fidoAuthenticationToken = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvFidoAuthentication']");
    //id - com.cvshealth.ngasdk.sampleapp:id/tvFidoAuthentication
    //class - android.widget.TextView
    //text - FIDO Authentication
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvFidoAuthentication

    const jwtToken = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleJwtToken']");
    //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleJwtToken
    //class - android.widget.TextView
    //text - HYPR JWT Token
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleJwtToken

    const jwtTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvJwtTokenValue']");
    //id - com.cvshealth.ngasdk.sampleapp:id/tvJwtTokenValue
    //class - android.widget.TextView
    //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvJwtTokenValue

});

When('the user enters a valid PIN', async function() {

    console.log("*****the user enters a valid PIN");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

});

When('the user validates the blank PIN error message', async function() {

    console.log("*****the user validates the blank PIN error message");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

});

When('the user validates the invalid PIN error messages', async function() {

    console.log("*****the user validates the invalid PIN error messages");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

});

When('the user cancels PIN enrollment', async function() {

    console.log("*****the user cancels PIN enrollment");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

});

When('the user validates the incorrect PIN error message', async function() {

    console.log("*****the user validates the incorrect PIN error message");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

});

When('the user enters incorrect PIN', async function() {

    console.log("the user enters incorrect PIN");
    this.log("NGA Android Sample Application launched");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/

});



When('the user changes the Airplane Mode toggle', async function() {

    try {
        
        //Turn ON Airplane Mode
        await driver.pause(4000);
        await driver.toggleAirplaneMode();
        console.log('Turned ON the Airplane Mode');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while turning the Airplane Mode \n" + err);
        
    }
});

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

//*************************************************************Verify the Installation of the NGA Sample Application
async function isNGAAppInstalled(driver, appPackage) {

  if (await driver.isAppInstalled(appPackage)) {
    console.log('NGA Sample App installed Successfully');
  } else {
    console.log('NGA Sample App installation Failed');
  }

}
//*************************************************************State of the NGA Sample App
async function queryNGAAppStatus(driver, appPackage) {
  let state = driver.queryAppState(appPackage);
  console.log('This is the current state : ' +state);

  switch (state){
    case 0:
      console.log('NGA Sample App is NOT INSTALLED');
      return 0;
      break;

    case 1:
      console.log('NGA Sample App is NOT RUNNING');
      return 1;
      break;
      
    case 2:
      console.log('NGA Sample App is running in the BACKGROUND/SUSPENDED');
      return 2;
      break;

    case 3:
      console.log('NGA Sample App is running in the BACKGROUND');
      return 3;
      break;

    case 4:
      console.log('NGA Sample App is running in the FOREGROUND');
      return 4;
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

  async function clickOnOK(driver, oKDialogButton) {
    
    // if (oKDialogButton.waitForExist({timeout:2000})) {

    //   // //Get the Alert text
    //   // alertTitleText = await alertTitle.getText();
    //   // console.log(alertTitleText);

    //   // //Get the Alert Message text
    //   // alertMessage = await client.$("//android.widget.TextView[@id='android:id/message']");
    //   // alertMessageText = await alertMessage.getText();
    //   // console.log(alertMessageText);
    */