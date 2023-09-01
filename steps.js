const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const wdio = require('webdriverio');

setDefaultTimeout(75 * 1000);

Given('the user launches the NGA sample application', async function() {

    console.log("*****the user launches the NGA sample application");

    this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );
    // this.attach(
    //     await this.takeScreenshot(), 'image/png'
    // );

});


When(/^the user has selected the (.*)$/, async function(policy) {

    try {
        
        let fallbackPolicy = await driver.$("//android.widget.Button[@text='Fallback']");

        let biometricOnlyPolicy = await driver.$("//android.widget.Button[@text='Biometric only']");
  
        let pINOnlyPolicy = await driver.$("//android.widget.Button[@text='PIN only']");
    
        switch (policy.toLowerCase()){
    
        case 'fallback':
            await fallbackPolicy.waitForExist({timeout:2000});
            fallbackPolicyText = await fallbackPolicy.getText();
            console.log(fallbackPolicyText);
            
            await fallbackPolicy.click();
            
            //Click on 'Fallback' policy button
            break;
    
        case 'biometriconly':
            await biometricOnlyPolicy.waitForExist({timeout:2000});
            biometricOnlyPolicyText = await biometricOnlyPolicy.getText();
            console.log(biometricOnlyPolicyText);

            await biometricOnlyPolicy.click();
            
            //Click on 'Biometric only' button
            break;
    
        case 'pinonly':
            await pINOnlyPolicy.waitForExist({timeout:2000});
            pINOnlyPolicyText = await pINOnlyPolicy.getText();
            console.log(pINOnlyPolicyText);

            await pINOnlyPolicy.click();
    
            //click on 'PIN only' button
            break;
    
        default:
            console.log('Error : No Policy Selected, Policy to be selected was :' +policy);
        }

    } catch (err) {

        throw new Error("Error while selecting policy \n" + err);

    }

    this.attach(
        "User has successfully selected the " +policy+ " policy",
        "text/plain"
    );
});

When('the user clicks on Sign In', async function() {

    try {

        let signIn = await driver.$('//android.widget.Button[@content-desc="Sign In"]');
        await signIn.waitForDisplayed({ timeout: 5000 });
    
        signInText = await signIn.getText();
        console.log(signInText);
      
        await signIn.click();
        console.log('Clicking on Sign In First Time successful');

    } catch (err) {

        throw new Error("Error while clicking on Sign In \n" + err);

    }

    this.attach(
        "The user has clicked on Sign In successfully",
        "text/plain"
    );

});

When(/^the user logs in with (.+) and (.+)$/, async function(username, password) {

    try {

        //Handling an error till the clicking on SignIn on line 122
        await driver.pause(35000);
        
        await driver.back();
        console.log('Navigating Back');

        let signIn = await driver.$('//android.widget.Button[@content-desc="Sign In"]');
        await signIn.waitForDisplayed({ timeout: 5000 });
    
        signInText = await signIn.getText();
        console.log(signInText);

        await signIn.click();
        console.log('Clicking on Sign In successful');

        let usernameInput = await driver.$("//android.widget.EditText[@resource-id='username']");
        await usernameInput.waitForDisplayed({ timeout: 35000 });
        await usernameInput.setValue(username);
        console.log("***** The user enters :"+username);
    
        let passwordInput = await driver.$("//android.widget.EditText[@resource-id='password']");
        await passwordInput.waitForDisplayed({ timeout: 1000 });
        await passwordInput.setValue(password);
        console.log("***** The user enters :"+password);
      
        let loginButton = await driver.$("//android.widget.Button[@text='Sign In']");
        await loginButton.waitForDisplayed({ timeout: 1000 });
        await loginButton.click();
        console.log("***** The user clicked on Sign In");

    } catch (err) {

        throw new Error("Error while trying to Sign In with username and password \n" + err);

    }

    this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );
});


Then(/^the user should be able to view the Dashboard screen (.+)$/, async function(message) {

    let settings = await driver.$('//android.widget.TextView[@content-desc="Settings"]');
    await settings.click();
    await driver.pause(2000);
    console.log('Click on Settings Icon successful');

    let primaryAuthenticationTokens = await driver.$("//android.widget.TextView[@text='Primary Authentication']");
    await primaryAuthenticationTokens.click();
    await driver.pause(2000);
    console.log('Click on Primary Authentication label successful');

    let primaryAuthenticationAccessToken = await driver.$("//android.widget.TextView[@text='Access Token']");
    await primaryAuthenticationAccessToken.click();
    await driver.pause(3000);
    console.log('Click on Access Token label successful');

    await primaryAuthenticationAccessToken.click();
    await driver.pause(2000);

    let primaryAuthenticationIDToken = await driver.$("//android.widget.TextView[@text='ID Token']");
    await primaryAuthenticationIDToken.click();
    await driver.pause(3000);
    console.log('Click on ID Token label successful');

    await primaryAuthenticationIDToken.click();
    await driver.pause(2000);

    await driver.back();
    console.log('Navigating Back');
    await driver.pause(2000);

    this.attach(
        message,
        "text/plain"
    );
});

When('the user clicks on Enroll', async function() {

    try {

        await driver.pause(3000);
        enrollButton = await driver.$("//android.widget.Button[@text='Enroll']");
        await enrollButton.waitForDisplayed({ timeout: 15000 });
        await enrollButton.click();
        console.log("***** The user clicks on Enroll button");

    } catch (err) {

        throw new Error("Error while clicking on Enroll \n" + err);

    }

    this.attach(
        "User has clicked on Enroll successfully",
        "text/plain"
    );

});

When(/^the user enrolls with (.+)$/, async function(policy){

    try {

        if (policy.toLowerCase() == 'pinonly') {

            await driver.pause(10000);
    
            firstDigitPIN = await driver.$("//android.widget.EditText[@text='Input First Pin']");
            secondDigitPIN = await driver.$("//android.widget.EditText[@text='Input Second Pin']");
            thirdDigitPIN = await driver.$("//android.widget.EditText[@text='Input Third Pin']");
            fourthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fourth Pin']");
            fifthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fifth Pin']");
            sixthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Sixth Pin']");
        
            await firstDigitPIN.setValue(1);
            await secondDigitPIN.setValue(4);
            await thirdDigitPIN.setValue(7);
            await fourthDigitPIN.setValue(2);
            await fifthDigitPIN.setValue(5);
            await sixthDigitPIN.setValue(8);
        
            let savePINButton = await driver.$("//android.widget.Button[@text='Save']");
            await savePINButton.waitForDisplayed();
            await savePINButton.click(); 
            await driver.pause(5000);
        
        } else if (policy.toLowerCase() == 'biometriconly') {
    
            await driver.pause(20000);
        
            await driver.fingerPrint(1);
            await driver.pause(1000);
    
            await driver.fingerPrint(1);
            await driver.pause(1000);
    
            await driver.fingerPrint(1);
            await driver.pause(2000);
        
        } else {
        
            await driver.pause(20000);
        
            await driver.fingerPrint(1);
            await driver.pause(1000);
    
            await driver.fingerPrint(1);
            await driver.pause(1000);
    
            await driver.fingerPrint(1);
        
            await driver.pause(4000);
        
            firstDigitPIN = await driver.$("//android.widget.EditText[@text='Input First Pin']");
            secondDigitPIN = await driver.$("//android.widget.EditText[@text='Input Second Pin']");
            thirdDigitPIN = await driver.$("//android.widget.EditText[@text='Input Third Pin']");
            fourthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fourth Pin']");
            fifthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fifth Pin']");
            sixthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Sixth Pin']");
        
            await firstDigitPIN.setValue(1);
            await secondDigitPIN.setValue(4);
            await thirdDigitPIN.setValue(7);
            await fourthDigitPIN.setValue(2);
            await fifthDigitPIN.setValue(5);
            await sixthDigitPIN.setValue(8);
        
            let savePINButton = await driver.$("//android.widget.Button[@text='Save']");
            await savePINButton.waitForDisplayed();
            await savePINButton.click(); 
            await driver.pause(5000);
    
        }

    } catch (err) {

        throw new Error("Error while enrolling\n" + err);

    }

    this.attach(
        "User has enrolled successfully with the "+policy+" policy",
        "text/plain"
    );
});

When('the user logs out', async function() {

    try {

        await driver.pause(7000);
        // let settings = await driver.$('//android.widget.TextView[@content-desc="Settings"]');
        // await settings.click();
        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 850 }},
            { action: 'release' }
          ]);
    
        let logoutButton = await driver.$("//android.widget.TextView[@text='Logout']");
        await logoutButton.waitForDisplayed({ timeout: 3000 });
        await logoutButton.click();
        console.log('Clicking on the Logout button successful');
    
        let yesDialog = await driver.$("//android.widget.Button[@text='YES']");
        await yesDialog.waitForDisplayed({ timeout: 1000 });
        await yesDialog.click();
        console.log('Clicking on the Yes dialog button');

    } catch (err) {

        throw new Error("Error while logging out\n" + err);

    }

    this.attach(
        "User has logged out successfully",
        "text/plain"
    );
});

When(/^the user authenticates (.+)$/, async function(policy){

    let signIn = driver.$('//android.widget.Button[@content-desc="Sign In"]');
    
    if (policy.toLowerCase() == 'pinonly') {
        await signIn.click();
        await signIn.waitForDisplayed({ timeout: 10000 });

        await driver.pause(2000);

        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(4);
        await thirdDigitPIN.setValue(7);
        await fourthDigitPIN.setValue(2);
        await fifthDigitPIN.setValue(5);
        await sixthDigitPIN.setValue(8);

        await driver.pause(6000);

        // let settings = await client.$('//android.widget.TextView[@content-desc="Settings"]');
        // await settings.waitForDisplayed({ timeout: 10000 });
        // await settings.click();

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        // await driver.pause(2000);
        
        // let fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
        // await fIDOAuthButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthButton.click();

        // let fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
        // await fIDOAuthJwtTokenButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthJwtTokenButton.click();

        // await driver.pause(2000);

        // await fIDOAuthJwtTokenButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthJwtTokenButton.click();

        await driver.pause(2000);

        await driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 750 }},
            { action: 'release' }
          ]);

    } else if (policy.toLowerCase() == 'biometriconly') {

        await signIn.click();
        await signIn.waitForDisplayed({ timeout: 10000 });

        await driver.pause(6000);

        await driver.fingerPrint(1);
        await driver.pause(3000);

        await driver.fingerPrint(1);
        await driver.pause(6000);

        // await settings.click();

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);
        
        await driver.pause(2000);
        
        // let fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
        // await fIDOAuthButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthButton.click();
        // await driver.pause(2000);

        // let fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
        // await fIDOAuthJwtTokenButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthJwtTokenButton.click();

        // await driver.pause(2000);

        // await fIDOAuthJwtTokenButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthJwtTokenButton.click();
        // await driver.pause(2000);

        await driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 750 }},
            { action: 'release' }
          ]);
        

    } else {

        await signIn.click();
        await driver.pause(6000);

        await driver.pause(2000);

        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(4);
        await thirdDigitPIN.setValue(7);
        await fourthDigitPIN.setValue(2);
        await fifthDigitPIN.setValue(5);
        await sixthDigitPIN.setValue(8);

        // await driver.fingerPrint(1);
        // await driver.pause(3000);

        // await driver.fingerPrint(1);
        // await driver.pause(6000);

        // await settings.click();
        await driver.pause(8000);

        //Click on Settings
        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);

        await driver.touchPerform([
        { action: 'tap', options: { x: 1010, y: 140 }}
        ]);
        
        // let fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
        // await fIDOAuthButton.click();
        // await driver.pause(2000);

        // let fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
        // await fIDOAuthJwtTokenButton.click();
        // await driver.pause(5000);

        // await fIDOAuthJwtTokenButton.click();
        //await driver.pause(3000);

        await driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 750 }},
            { action: 'release' }
          ]);

    }

    this.attach(
        "User has logged in with passwordless authentication successfully with the " +policy+ " policy",
        "text/plain"
    );
});

When('the user navigates to the Settings screen', async function() {

    try {

        await driver.pause(2000);

        await driver.touchPerform([
            { action: 'tap', options: { x: 1010, y: 140 }}
          ]);

          await driver.touchPerform([
            { action: 'tap', options: { x: 1010, y: 140 }}
          ]);

          await driver.touchPerform([
            { action: 'tap', options: { x: 1010, y: 140 }}
          ]);

        await driver.pause(5000);
        //let settings = await driver.$('//android.widget.TextView[@id="com.cvshealth.ngasdk.sampleapp:id/toolbarMenuBtnDebug"]');

        console.log('Navigating to "Settings" screen');

        //await settings.click();

    } catch (err) {

        throw new Error("Error while navigating to Settings screen\n" + err);

    }

});

Then('the user should be able to verify the app and client info', async function() {

    try {

        await driver.pause(2000);
    
        let appClientInfo = await driver.$("//android.widget.TextView[@text='App and Client info']");

        appClientInfoText = await appClientInfo.getText();
        console.log(appClientInfoText);

        await appClientInfo.click(); 
        await driver.pause(2000);

        let oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        await oKDialog.click();
        console.log('Clicking on the OK button');
        await driver.pause(2000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

    } catch (err) {

        throw new Error("Error while verifying the App and Client Info\n" + err);

    }
    
});

When('the user unenrolls', async function() {

    try {

        //Unenroll
        unenrollButton = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvUnEnrollFIDOAuth']");
        await unenrollButton.click();
        console.log('Clicking on the Unenroll button successful');
        await driver.pause(2000);

        let yesDialog = await driver.$("//android.widget.Button[@text='YES']");
        await yesDialog.click();
        console.log('Clicking on the Yes dialog button');
        await driver.pause(2000);

    } catch (err) {

        throw new Error("Error while Unenrolling\n" + err);

    }
});

When('the user resets the app', async function() {

    try {
        
        //Reset App
        await driver.pause(4000);
        resetButton = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvResetApp']");
        await resetButton.click();
        console.log('Clicking on the Reset App button successful');
        await driver.pause(2000);
        
        let yesDialog = await driver.$("//android.widget.Button[@text='YES']");
        await yesDialog.click();
        console.log('Clicking on the Yes dialog button');
        await driver.pause(2000);

    } catch (err) {

        throw new Error("Error while Resetting the app\n" + err);
        
    }
});
