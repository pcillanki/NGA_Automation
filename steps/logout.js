const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When('the user logs out', async function() {

    try {

        await driver.pause(2000);

        driver.touchPerform([
            { action: 'press', options: { x: 560, y: 1300 }},
            { action: 'moveTo', options: { x: 560, y: 850 }},
            { action: 'release' }
          ]);
    
        const logoutButton = await driver.$("//android.widget.TextView[@text='Logout']");
        await logoutButton.waitForDisplayed({ timeout: 3000 });
        await logoutButton.click();
        console.log('Clicking on the Logout button successful');
    
        const yesDialog = await driver.$("//android.widget.Button[@text='YES']");
        await yesDialog.waitForDisplayed({ timeout: 1000 });
        await yesDialog.click();
        console.log('Clicking on the Yes dialog button');

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while logging out\n" + err);

    }
});