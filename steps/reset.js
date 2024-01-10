const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When('the user resets the app', async function() {

    try {
        
        await driver.pause(2000);
        
        driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 850 }},
            { action: 'release' }
          ]);

        //Reset App
        await driver.pause(4000);
        resetButton = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvResetApp']");
        await resetButton.click();
        console.log('Clicking on the Reset App button successful');
        await driver.pause(2000);
        
        const yesDialog = await driver.$("//android.widget.Button[@text='YES']");
        await yesDialog.click();
        console.log('Clicking on the Yes dialog button');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while Resetting the app\n" + err);
        
    }
});