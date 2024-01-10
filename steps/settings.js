const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When('the user should be able to verify all the setting details before login', async function() {
    
    try {

        await driver.pause(2000);
    
        const appClientInfo = await driver.$("//android.widget.TextView[@text='App and Client info']");

        appClientInfoText = await appClientInfo.getText();
        console.log(appClientInfoText);

        await appClientInfo.click();
        await driver.pause(2000);

        const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');
        await driver.pause(2000);

        const appClientInfoUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        //class - android.widget.TextView
        //text - Username
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        appClientInfoUsernameText = await appClientInfoUsername.getText();

        if (appClientInfoUsernameText = "Username") {
            console.log('Username title matches, Text: '+appClientInfoUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoUsernameText);
        }
    
        await driver.pause(1000);
    
        const appClientInfoUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        appClientInfoUsernameValueText = await appClientInfoUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoFIDOUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        //text - FIDO Username
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        appClientInfoFIDOUsernameText = await appClientInfoFIDOUsername.getText();

        if (appClientInfoFIDOUsernameText = "FIDO Username") {
            console.log('Username title matches, Text: '+appClientInfoFIDOUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoFIDOUsernameText);
        }

        await driver.pause(1000);
    
        const appClientInfoFIDOUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        appClientInfoFIDOUsernameValueText = await appClientInfoFIDOUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoRpAppId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        //class - android.widget.TextView
        //text - rpAppID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        appClientInfoRpAppIdText = await appClientInfoRpAppId.getText();

        if (appClientInfoRpAppIdText = "rpAppID") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoRpAppIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        //class - android.widget.TextView
        //text - nGASDKTestApp
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        appClientInfoRpAppIdValueText = await appClientInfoRpAppIdValue.getText();

        if (appClientInfoRpAppIdValueText = "nGASDKTestApp") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfile = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        //class - android.widget.TextView
        //text - App Profile
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        appClientInfoAppProfileText = await appClientInfoAppProfile.getText();

        if (appClientInfoAppProfileText = "App Profile") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfileValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        //class - android.widget.TextView
        //text - TestAppQA3
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        appClientInfoAppProfileValueText = await appClientInfoAppProfileValue.getText();

        if (appClientInfoAppProfileValueText = "TestAppQA3") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileValueText);
        }

        await driver.pause(1000);
     
        const appClientInfoClientId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        //class - android.widget.TextView
        //text - Client ID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        appClientInfoClientIdText = await appClientInfoClientId.getText();

        if (appClientInfoClientIdText = "Client ID") {
            console.log('Username title matches, Text: '+appClientInfoClientIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        //class - android.widget.TextView
        //text - f80d1216-6bd9-4b64-a89b-1ba3e12b5477
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        appClientInfoClientIdValueText = await appClientInfoClientIdValue.getText();

        if (appClientInfoClientIdValueText = "f80d1216-6bd9-4b64-a89b-1ba3e12b5477") {
            console.log('Username title matches, Text: '+appClientInfoClientIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecret = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        //class - android.widget.TextView
        //text - Client Secret
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        appClientInfoClientSecretText = await appClientInfoClientSecret.getText();

        if (appClientInfoClientSecretText = "Client Secret") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecretValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue']");
        //id - com.chealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        //class - android.widget.TextView
        //text - wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        appClientInfoClientSecretValueText = await appClientInfoClientSecretValue.getText();

        if (appClientInfoClientSecretValueText = "wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabled = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        //class - android.widget.TextView
        //text - SSL Enabled
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        appClientInfoSSLEnabledText = await appClientInfoSSLEnabled.getText();

        if (appClientInfoSSLEnabledText = "SSL Enabled") {
            console.log('Username title matches, Text: '+appClientInfoSSLEnabledText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoSSLEnabledText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabledValue = await driver.$("//android.widget.ImageView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/imgSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        //class - android.widget.ImageView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        await appClientInfoSSLEnabledValue.click();
        await driver.pause(1000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

        console.log("*****the user should be able to verify all the setting details before login");

        this.log("the user should be able to verify all the setting details before login");

        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while verifying the App and Client Info\n" + err);

    }
});

When('the user should be able to verify all the setting details before Enroll', async function() {
    
    try {

        await driver.pause(2000);
            
        const primaryAuthenticationTokens = await driver.$("//android.widget.TextView[@text='Primary Authentication']");
        await primaryAuthenticationTokens.click();
        await driver.pause(2000);
        console.log('Click on Primary Authentication label successful');

        const primaryAuthenticationAccessToken = await driver.$("//android.widget.TextView[@text='Access Token']");
        await primaryAuthenticationAccessToken.click();
        await driver.pause(3000);
        console.log('Click on Access Token label successful');

        const accessTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue

        accessTokenValueText = await accessTokenValue.getText();

        console.log('Access Token Value: '+accessTokenValueText);

        await primaryAuthenticationAccessToken.click();
        await driver.pause(2000);

        const primaryAuthenticationIDToken = await driver.$("//android.widget.TextView[@text='ID Token']");
        await primaryAuthenticationIDToken.click();
        await driver.pause(3000);
        console.log('Click on ID Token label successful');

        const idTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue

        idTokenValueText = await idTokenValue.getText();

        console.log('ID Token Value: '+idTokenValueText);

        await primaryAuthenticationIDToken.click();
        await driver.pause(2000);
    
        const appClientInfo = await driver.$("//android.widget.TextView[@text='App and Client info']");

        appClientInfoText = await appClientInfo.getText();
        console.log(appClientInfoText);

        await appClientInfo.click();
        await driver.pause(2000);

        const appClientInfoUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        //class - android.widget.TextView
        //text - Username
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        appClientInfoUsernameText = await appClientInfoUsername.getText();

        if (appClientInfoUsernameText = "Username") {
            console.log('Username title matches, Text: '+appClientInfoUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoUsernameText);
        }
    
        await driver.pause(1000);
    
        const appClientInfoUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        appClientInfoUsernameValueText = await appClientInfoUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoFIDOUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        //text - FIDO Username
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        appClientInfoFIDOUsernameText = await appClientInfoFIDOUsername.getText();

        if (appClientInfoFIDOUsernameText = "FIDO Username") {
            console.log('Username title matches, Text: '+appClientInfoFIDOUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoFIDOUsernameText);
        }

        await driver.pause(1000);
    
        const appClientInfoFIDOUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        appClientInfoFIDOUsernameValueText = await appClientInfoFIDOUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoRpAppId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        //class - android.widget.TextView
        //text - rpAppID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        appClientInfoRpAppIdText = await appClientInfoRpAppId.getText();

        if (appClientInfoRpAppIdText = "rpAppID") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoRpAppIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        //class - android.widget.TextView
        //text - nGASDKTestApp
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        appClientInfoRpAppIdValueText = await appClientInfoRpAppIdValue.getText();

        if (appClientInfoRpAppIdValueText = "nGASDKTestApp") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfile = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        //class - android.widget.TextView
        //text - App Profile
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        appClientInfoAppProfileText = await appClientInfoAppProfile.getText();

        if (appClientInfoAppProfileText = "App Profile") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfileValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        //class - android.widget.TextView
        //text - TestAppQA3
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        appClientInfoAppProfileValueText = await appClientInfoAppProfileValue.getText();

        if (appClientInfoAppProfileValueText = "TestAppQA3") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileValueText);
        }

        await driver.pause(1000);
     
        const appClientInfoClientId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        //class - android.widget.TextView
        //text - Client ID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        appClientInfoClientIdText = await appClientInfoClientId.getText();

        if (appClientInfoClientIdText = "Client ID") {
            console.log('Username title matches, Text: '+appClientInfoClientIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        //class - android.widget.TextView
        //text - f80d1216-6bd9-4b64-a89b-1ba3e12b5477
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        appClientInfoClientIdValueText = await appClientInfoClientIdValue.getText();

        if (appClientInfoClientIdValueText = "f80d1216-6bd9-4b64-a89b-1ba3e12b5477") {
            console.log('Username title matches, Text: '+appClientInfoClientIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecret = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        //class - android.widget.TextView
        //text - Client Secret
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        appClientInfoClientSecretText = await appClientInfoClientSecret.getText();

        if (appClientInfoClientSecretText = "Client Secret") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecretValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue']");
        //id - com.chealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        //class - android.widget.TextView
        //text - wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        appClientInfoClientSecretValueText = await appClientInfoClientSecretValue.getText();

        if (appClientInfoClientSecretValueText = "wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabled = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        //class - android.widget.TextView
        //text - SSL Enabled
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        appClientInfoSSLEnabledText = await appClientInfoSSLEnabled.getText();

        if (appClientInfoSSLEnabledText = "SSL Enabled") {
            console.log('Username title matches, Text: '+appClientInfoSSLEnabledText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoSSLEnabledText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabledValue = await driver.$("//android.widget.ImageView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/imgSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        //class - android.widget.ImageView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        await appClientInfoSSLEnabledValue.click();
        await driver.pause(1000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while verifying the App and Client Info\n" + err);

    }

    console.log("*****the user should be able to verify all the setting details before Enroll");
    this.log("the user should be able to verify all the setting details before Enroll");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/
    await driver.pause(2000);
});

When('the user should be able to verify all the setting details after enroll', async function() {
    
    try {

        await driver.pause(2000);
            
        const primaryAuthenticationTokens = await driver.$("//android.widget.TextView[@text='Primary Authentication']");
        await primaryAuthenticationTokens.click();
        await driver.pause(2000);
        console.log('Click on Primary Authentication label successful');

        const primaryAuthenticationAccessToken = await driver.$("//android.widget.TextView[@text='Access Token']");
        await primaryAuthenticationAccessToken.click();
        await driver.pause(3000);
        console.log('Click on Access Token label successful');

        const accessTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue

        accessTokenValueText = await accessTokenValue.getText();

        console.log('Access Token Value: '+accessTokenValueText);

        await primaryAuthenticationAccessToken.click();
        await driver.pause(2000);

        const primaryAuthenticationIDToken = await driver.$("//android.widget.TextView[@text='ID Token']");
        await primaryAuthenticationIDToken.click();
        await driver.pause(3000);
        console.log('Click on ID Token label successful');

        const idTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue

        idTokenValueText = await idTokenValue.getText();

        console.log('ID Token Value: '+idTokenValueText);

        await primaryAuthenticationIDToken.click();
        await driver.pause(2000);
    
        const appClientInfo = await driver.$("//android.widget.TextView[@text='App and Client info']");

        appClientInfoText = await appClientInfo.getText();
        console.log(appClientInfoText);

        await appClientInfo.click();
        await driver.pause(2000);

        const appClientInfoUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        //class - android.widget.TextView
        //text - Username
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        appClientInfoUsernameText = await appClientInfoUsername.getText();

        if (appClientInfoUsernameText = "Username") {
            console.log('Username title matches, Text: '+appClientInfoUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoUsernameText);
        }
    
        await driver.pause(1000);
    
        const appClientInfoUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        appClientInfoUsernameValueText = await appClientInfoUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoFIDOUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        //text - FIDO Username
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        appClientInfoFIDOUsernameText = await appClientInfoFIDOUsername.getText();

        if (appClientInfoFIDOUsernameText = "FIDO Username") {
            console.log('Username title matches, Text: '+appClientInfoFIDOUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoFIDOUsernameText);
        }

        await driver.pause(1000);
    
        const appClientInfoFIDOUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        appClientInfoFIDOUsernameValueText = await appClientInfoFIDOUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoRpAppId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        //class - android.widget.TextView
        //text - rpAppID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        appClientInfoRpAppIdText = await appClientInfoRpAppId.getText();

        if (appClientInfoRpAppIdText = "rpAppID") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoRpAppIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        //class - android.widget.TextView
        //text - nGASDKTestApp
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        appClientInfoRpAppIdValueText = await appClientInfoRpAppIdValue.getText();

        if (appClientInfoRpAppIdValueText = "nGASDKTestApp") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfile = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        //class - android.widget.TextView
        //text - App Profile
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        appClientInfoAppProfileText = await appClientInfoAppProfile.getText();

        if (appClientInfoAppProfileText = "App Profile") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfileValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        //class - android.widget.TextView
        //text - TestAppQA3
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        appClientInfoAppProfileValueText = await appClientInfoAppProfileValue.getText();

        if (appClientInfoAppProfileValueText = "TestAppQA3") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileValueText);
        }

        await driver.pause(1000);
     
        const appClientInfoClientId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        //class - android.widget.TextView
        //text - Client ID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        appClientInfoClientIdText = await appClientInfoClientId.getText();

        if (appClientInfoClientIdText = "Client ID") {
            console.log('Username title matches, Text: '+appClientInfoClientIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        //class - android.widget.TextView
        //text - f80d1216-6bd9-4b64-a89b-1ba3e12b5477
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        appClientInfoClientIdValueText = await appClientInfoClientIdValue.getText();

        if (appClientInfoClientIdValueText = "f80d1216-6bd9-4b64-a89b-1ba3e12b5477") {
            console.log('Username title matches, Text: '+appClientInfoClientIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecret = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        //class - android.widget.TextView
        //text - Client Secret
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        appClientInfoClientSecretText = await appClientInfoClientSecret.getText();

        if (appClientInfoClientSecretText = "Client Secret") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecretValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue']");
        //id - com.chealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        //class - android.widget.TextView
        //text - wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        appClientInfoClientSecretValueText = await appClientInfoClientSecretValue.getText();

        if (appClientInfoClientSecretValueText = "wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabled = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        //class - android.widget.TextView
        //text - SSL Enabled
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        appClientInfoSSLEnabledText = await appClientInfoSSLEnabled.getText();

        if (appClientInfoSSLEnabledText = "SSL Enabled") {
            console.log('Username title matches, Text: '+appClientInfoSSLEnabledText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoSSLEnabledText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabledValue = await driver.$("//android.widget.ImageView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/imgSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        //class - android.widget.ImageView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        await appClientInfoSSLEnabledValue.click();
        await driver.pause(1000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while verifying the App and Client Info\n" + err);

    }

    console.log("*****the user should be able to verify all the setting details after enroll");
    this.log("the user should be able to verify all the setting details after enroll");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/
    await driver.pause(2000);
});

When('the user should be able to verify all the setting details after FIDO Authentication', async function() {
    
    try {

        await driver.pause(2000);

        const fidoAuthenticationToken = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvFidoAuthentication']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvFidoAuthentication
        //class - android.widget.TextView
        //text - FIDO Authentication
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvFidoAuthentication
        await fidoAuthenticationToken.click();
        await driver.pause(2000);
        console.log('Click on FIDO Authentication label successful');
    
        const primaryAuthenticationAccessToken = await driver.$("//android.widget.TextView[@text='Access Token']");
        await primaryAuthenticationAccessToken.click();
        await driver.pause(3000);
        console.log('Click on Access Token label successful');

        const accessTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvAccessTokenValue

        accessTokenValueText = await accessTokenValue.getText();

        console.log('Access Token Value: '+accessTokenValueText);

        await primaryAuthenticationAccessToken.click();
        await driver.pause(2000);

        const primaryAuthenticationIDToken = await driver.$("//android.widget.TextView[@text='ID Token']");
        await primaryAuthenticationIDToken.click();
        await driver.pause(3000);
        console.log('Click on ID Token label successful');

        const idTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvIdTokenValue

        idTokenValueText = await idTokenValue.getText();

        console.log('ID Token Value: '+idTokenValueText);

        await primaryAuthenticationIDToken.click();
        await driver.pause(2000);

        const jwtToken = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleJwtToken']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleJwtToken
        //class - android.widget.TextView
        //text - HYPR JWT Token
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleJwtToken
        await jwtToken.click();
        await driver.pause(3000);
        console.log('Click on JWT Token label successful');
    
        const jwtTokenValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvJwtTokenValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvJwtTokenValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvJwtTokenValue
        jwtTokenValue = await jwtTokenValue.getText();

        console.log('JWT Token Value: '+jwtTokenValue);

        await jwtToken.click();
        await driver.pause(2000);
    
        const appClientInfo = await driver.$("//android.widget.TextView[@text='App and Client info']");

        appClientInfoText = await appClientInfo.getText();
        console.log(appClientInfoText);

        await appClientInfo.click();
        await driver.pause(2000);

        const appClientInfoUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        //class - android.widget.TextView
        //text - Username
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername
        appClientInfoUsernameText = await appClientInfoUsername.getText();

        if (appClientInfoUsernameText = "Username") {
            console.log('Username title matches, Text: '+appClientInfoUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoUsernameText);
        }
    
        await driver.pause(1000);
    
        const appClientInfoUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleUsernameValue
        appClientInfoUsernameValueText = await appClientInfoUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoFIDOUsername = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        //text - FIDO Username
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsername
        appClientInfoFIDOUsernameText = await appClientInfoFIDOUsername.getText();

        if (appClientInfoFIDOUsernameText = "FIDO Username") {
            console.log('Username title matches, Text: '+appClientInfoFIDOUsernameText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoFIDOUsernameText);
        }

        await driver.pause(1000);
    
        const appClientInfoFIDOUsernameValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        //class - android.widget.TextView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleFidoUsernameValue
        appClientInfoFIDOUsernameValueText = await appClientInfoFIDOUsernameValue.getText();

        await driver.pause(1000);
    
        const appClientInfoRpAppId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        //class - android.widget.TextView
        //text - rpAppID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppId
        appClientInfoRpAppIdText = await appClientInfoRpAppId.getText();

        if (appClientInfoRpAppIdText = "rpAppID") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoRpAppIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        //class - android.widget.TextView
        //text - nGASDKTestApp
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleRpAppIdValue
        appClientInfoRpAppIdValueText = await appClientInfoRpAppIdValue.getText();

        if (appClientInfoRpAppIdValueText = "nGASDKTestApp") {
            console.log('Username title matches, Text: '+appClientInfoRpAppIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoRpAppIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfile = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        //class - android.widget.TextView
        //text - App Profile
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfile
        appClientInfoAppProfileText = await appClientInfoAppProfile.getText();

        if (appClientInfoAppProfileText = "App Profile") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileText);
        }

        await driver.pause(1000);
    
        const appClientInfoAppProfileValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        //class - android.widget.TextView
        //text - TestAppQA3
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleAppProfileValue
        appClientInfoAppProfileValueText = await appClientInfoAppProfileValue.getText();

        if (appClientInfoAppProfileValueText = "TestAppQA3") {
            console.log('Username title matches, Text: '+appClientInfoAppProfileValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoAppProfileValueText);
        }

        await driver.pause(1000);
     
        const appClientInfoClientId = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        //class - android.widget.TextView
        //text - Client ID
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientId
        appClientInfoClientIdText = await appClientInfoClientId.getText();

        if (appClientInfoClientIdText = "Client ID") {
            console.log('Username title matches, Text: '+appClientInfoClientIdText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientIdValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        //class - android.widget.TextView
        //text - f80d1216-6bd9-4b64-a89b-1ba3e12b5477
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientIdValue
        appClientInfoClientIdValueText = await appClientInfoClientIdValue.getText();

        if (appClientInfoClientIdValueText = "f80d1216-6bd9-4b64-a89b-1ba3e12b5477") {
            console.log('Username title matches, Text: '+appClientInfoClientIdValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientIdValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecret = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        //class - android.widget.TextView
        //text - Client Secret
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecret
        appClientInfoClientSecretText = await appClientInfoClientSecret.getText();

        if (appClientInfoClientSecretText = "Client Secret") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretText);
        }

        await driver.pause(1000);
    
        const appClientInfoClientSecretValue = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue']");
        //id - com.chealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        //class - android.widget.TextView
        //text - wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleClientSecretValue
        appClientInfoClientSecretValueText = await appClientInfoClientSecretValue.getText();

        if (appClientInfoClientSecretValueText = "wV8rQ7qO0mvsE8cV4dU4jV5xG3kT0wJ0tL7sK5gL0cJ2bY6bX0gP") {
            console.log('Username title matches, Text: '+appClientInfoClientSecretValueText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoClientSecretValueText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabled = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        //class - android.widget.TextView
        //text - SSL Enabled
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/tvTitleSSL
        appClientInfoSSLEnabledText = await appClientInfoSSLEnabled.getText();

        if (appClientInfoSSLEnabledText = "SSL Enabled") {
            console.log('Username title matches, Text: '+appClientInfoSSLEnabledText);
        } else {
            console.log('Username title does not match, Text: '+appClientInfoSSLEnabledText);
        }

        await driver.pause(1000);
    
        const appClientInfoSSLEnabledValue = await driver.$("//android.widget.ImageView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/imgSSL']");
        //id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        //class - android.widget.ImageView
        //resource-id - com.cvshealth.ngasdk.sampleapp:id/imgSSL
        await appClientInfoSSLEnabledValue.click();
        await driver.pause(1000);

        await driver.back();
        console.log('Navigating Back');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while verifying the App and Client Info\n" + err);

    }
    
    console.log("*****the user should be able to verify all the setting details after FIDO Authentication");
    this.log("the user should be able to verify all the setting details after FIDO Authentication");
    /* this.attach(
        "User has launched the Android NGA app successfully",
        "text/plain"
    );*/
    await driver.pause(2000);
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
        //const settings = await driver.$('//android.widget.TextView[@id="com.cvshealth.ngasdk.sampleapp:id/toolbarMenuBtnDebug"]');

        console.log('Navigating to "Settings" screen');

        //await settings.click();

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while navigating to Settings screen\n" + err);

    }

});