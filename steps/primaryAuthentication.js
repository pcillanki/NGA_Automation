const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

Given('the user launches the NGA sample application', async function() {

    try {
        console.log("*****the user launches the NGA sample application");
        this.log("NGA Android Sample Application launched");
        /* this.attach(
            "User has launched the Android NGA app successfully",
            "text/plain"
        );*/
        await driver.pause(5000);

    } catch (err) {

        await driver.closeApp('com.cvshealth.ngasdk.sampleapp');
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while clicking on Sign In \n" + err);

    }
});

When('the user clicks on Sign In', async function() {

    try {

        await driver.pause(2000);
        const signIn = await driver.$('//android.widget.Button[@content-desc="Sign In"]');
        signInText = await signIn.getText();
        console.log(signInText);
        await signIn.click();
        console.log('Clicking on Sign In First Time successful');

        await driver.pause(2000);
        await signIn.click();

        await driver.pause(35000);

    } catch (err) {

        await driver.closeApp('com.cvshealth.ngasdk.sampleapp');
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while clicking on Sign In \n" + err);

    }
    /*
    this.attach(
        "The user has clicked on Sign In successfully",
        "text/plain"
    );*/

});

When(/^the user logs in with (.+) and (.+)$/, async function(username, password) {

    try {

        //Handling an error till the clicking on SignIn on line 122
        await driver.pause(2000);

        await driver.back();
        console.log('Navigating Back');

        await driver.pause(5000);
    
        const signIn = await driver.$('//android.widget.Button[@content-desc="Sign In"]');
        signInText = await signIn.getText();
        console.log(signInText);
        await signIn.click();
        console.log('Clicking on Sign In successful');

        //await usernameInput.waitForDisplayed({ timeout: 35000 });
        await driver.pause(8000);

        const usernameInput = await driver.$("//android.widget.EditText[@resource-id='username']");
        await usernameInput.setValue(username);
        console.log("***** The user enters :"+username);
    
        const passwordInput = await driver.$("//android.widget.EditText[@resource-id='password']");
        await passwordInput.setValue(password);
        console.log("***** The user enters :"+password);
      
        const loginButton = await driver.$("//android.widget.Button[@text='Sign In']");
        await loginButton.click();
        console.log("***** The user clicked on Sign In");

        await driver.pause(15000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while trying to Sign In with username and password \n" + err);

    }

});