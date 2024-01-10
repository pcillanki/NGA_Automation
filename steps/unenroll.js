const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When('the user unenrolls', async function() {

    try {

        await driver.pause(2000);
        
        driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 850 }},
            { action: 'release' }
          ]);

        //Unenroll
        unenrollButton = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/tvUnEnrollFIDOAuth']");
        await unenrollButton.click();
        console.log('Clicking on the Unenroll button successful');
        await driver.pause(2000);

        const yesDialog = await driver.$("//android.widget.Button[@text='YES']");
        await yesDialog.click();
        console.log('Clicking on the Yes dialog button');
        await driver.pause(2000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while Unenrolling\n" + err);

    }
});