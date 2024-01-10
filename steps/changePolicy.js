const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When('the user clicks on Change Policy', async function() {

    try {
        
        //Change Policy
        await driver.pause(4000);
        ChangePolicyButton = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvEnvValue']");
        await ChangePolicyButton.click();
        console.log('Clicked on Change Policy');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while clicking on Change Policy \n" + err);
        
    }
});