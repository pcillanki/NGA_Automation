const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When('the user authenticates with incorrect PIN', async function(){

    try {

        const signIn = driver.$('//android.widget.Button[@content-desc="Sign In"]');
        await signIn.click();
        await signIn.waitForDisplayed({ timeout: 10000 });

        await driver.pause(2000);

        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(4);
        await thirdDigitPIN.setValue(7);
        await fourthDigitPIN.setValue(2);
        await fifthDigitPIN.setValue(5);
        await sixthDigitPIN.setValue(7);

        await driver.pause(6000);

        // const settings = await client.$('//android.widget.TextView[@content-desc="Settings"]');
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
        
        // const fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
        // await fIDOAuthButton.waitForDisplayed({ timeout: 3000 });
        // await fIDOAuthButton.click();

        // const fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
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


    } catch (err) {
        
        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while navigating to Settings screen\n" + err);
    }
});

When(/^the user authenticates (.+)$/, async function(policy){

    try {

        const signIn = driver.$('//android.widget.Button[@content-desc="Sign In"]');
        
        if (policy.toLowerCase() == 'pinonly') {
            await signIn.click();
            await signIn.waitForDisplayed({ timeout: 10000 });

            await driver.pause(2000);

            await firstDigitPIN.setValue(1);
            await secondDigitPIN.setValue(4);
            await thirdDigitPIN.setValue(7);
            await fourthDigitPIN.setValue(2);
            await fifthDigitPIN.setValue(5);
            await sixthDigitPIN.setValue(7);

            await driver.pause(6000);

            const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
            //resource-id/id - android:id/button1
            await oKDialog.click();
            console.log('Clicking on the OK button');

            await driver.pause(8000);

            // const settings = await client.$('//android.widget.TextView[@content-desc="Settings"]');
            // await settings.waitForDisplayed({ timeout: 10000 });
            // await settings.click();

                /*await driver.touchPerform([
                { action: 'tap', options: { x: 1010, y: 140 }}
                ]);

                await driver.touchPerform([
                { action: 'tap', options: { x: 1010, y: 140 }}
                ]);

                await driver.touchPerform([
                { action: 'tap', options: { x: 1010, y: 140 }}
                ]);*/

            // await driver.pause(2000);
            
            // const fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
            // await fIDOAuthButton.waitForDisplayed({ timeout: 3000 });
            // await fIDOAuthButton.click();

            // const fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
            // await fIDOAuthJwtTokenButton.waitForDisplayed({ timeout: 3000 });
            // await fIDOAuthJwtTokenButton.click();

            // await driver.pause(2000);

            // await fIDOAuthJwtTokenButton.waitForDisplayed({ timeout: 3000 });
            // await fIDOAuthJwtTokenButton.click();

             /*   await driver.pause(2000);

                await driver.touchPerform([
                    { action: 'press', options: { x: 560, y: 1300 }},
                    { action: 'moveTo', options: { x: 560, y: 750 }},
                    { action: 'release' }
                ]); */

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
            
            // const fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
            // await fIDOAuthButton.waitForDisplayed({ timeout: 3000 });
            // await fIDOAuthButton.click();
            // await driver.pause(2000);

            // const fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
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
            
            // const fIDOAuthButton = await driver.$("//android.widget.TextView[@text='FIDO Authentication']");
            // await fIDOAuthButton.click();
            // await driver.pause(2000);

            // const fIDOAuthJwtTokenButton = await driver.$("//android.widget.TextView[@text='HYPR JWT Token']");
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
        /*
        this.attach(
            "User has logged in with passwordless authentication successfully with the " +policy+ " policy",
            "text/plain"
        );*/
    } catch (err) {
        
        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while navigating to Settings screen\n" + err);
    }
});

When(/^the user cancels authentication with (.+)$/, async function(policy){
    try {

        const signIn = driver.$('//android.widget.Button[@content-desc="Sign In"]');
        
        if (policy.toLowerCase() == 'pinonly') {

            await signIn.click();

            await driver.pause(2000);

            await driver.back();
            console.log('Navigating Back');
            await driver.pause(2000);

            const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
            //resource-id/id - android:id/button1
            await oKDialog.click();
            console.log('Clicking on the OK button');
            await driver.pause(2000);

        } else if (policy.toLowerCase() == 'biometriconly') {

            await signIn.click();

            await driver.pause(6000);

            await driver.back();
            console.log('Navigating Back');
            await driver.pause(2000);

            const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
            //resource-id/id - android:id/button1
            await oKDialog.click();
            console.log('Clicking on the OK button');
            await driver.pause(2000);

        } else {

            await signIn.click();
            await driver.pause(6000);

            await driver.back();
            console.log('Navigating Back');

            await driver.pause(2000);

            const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
            //resource-id/id - android:id/button1
            await oKDialog.click();
            console.log('Clicking on the OK button');
            await driver.pause(2000);

        }

    } catch (err) {
    
        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while navigating to Settings screen\n" + err);
    }
});

When(/^the user authenticates with incorrect PIN$/, async function(){

    try {
        await signIn.click();
        await signIn.waitForDisplayed({ timeout: 10000 });

        await driver.pause(2000);

        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(4);
        await thirdDigitPIN.setValue(7);
        await fourthDigitPIN.setValue(2);
        await fifthDigitPIN.setValue(5);
        await sixthDigitPIN.setValue(7);

        await driver.pause(6000);

        const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');

        await driver.pause(8000);

    } catch (err) {
    
        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while navigating to Settings screen\n" + err);
    }
});
