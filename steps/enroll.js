const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

const enrollFailedMessage = await driver.$("//android.widget.TextView[@resource-id='android:id/message']");
//id - android:id/message
//class - android.widget.TextView
//text - Enroll failed
//resource-id - android:id/message

When('the user clicks on Enroll', async function() {

    try {

        enrollButton = await driver.$("//android.widget.Button[@text='Enroll']");
        await enrollButton.click();
        console.log("***** The user clicks on Enroll button");
        await driver.pause(3000);

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while clicking on Enroll \n" + err);

    }

});

When(/^the user cancels enrollment$/, async function(policy){

    try {

        if (policy.toLowerCase() == 'pinonly') {

            await driver.pause(10000);

            const cancelEnrollButton = await driver.$("//android.widget.Button[@content-desc='Cancel Enrollment']");
            //id - com.cvshealth.ngasdk.sampleapp:id/btnCancel
            //resource-id - com.cvshealth.ngasdk.sampleapp:id/btnCancel
            //accessibility id - Cancel Enrollment
            //text - Cancel Enrollment
            await cancelEnrollButton.waitForDisplayed();
            await cancelEnrollButton.click(); 
            await driver.pause(5000);

            const cancelPINMessage = await driver.$("//android.widget.TextView[@resource-id='android:id/message']");
            //id - android:id/message
            //text -PIN enrollment cancelled
            //resource-id - android:id/message
            cancelPINMessageText = await cancelPINMessage.getText();
            console.log('Cancel PIN Message Text : ' +cancelPINMessageText);

            const cancelPINMessageHeader = await driver.$("//android.widget.TextView[@resource-id='com.cvshealth.ngasdk.sampleapp:id/alertTitle']");
            //id - com.cvshealth.ngasdk.sampleapp:id/alertTitle
            //text - An error has occurred!
            //resource-id - com.cvshealth.ngasdk.sampleapp:id/alertTitle\

            cancelPINMessageText = await cancelPINMessage.getText();
            console.log('Cancel PIN Message Text : ' +cancelPINMessageText);

            const cancelPINOKButton = await driver.$("//android.widget.Button[@resource-id='android:id/button1']");
            //id - android:id/button1
            //text - OK
            //resource-id - android:id/button1
            await cancelPINOKButton.click();
            await driver.pause(2000);

        } else if (policy.toLowerCase() == 'biometriconly') {

            await driver.back();
            console.log('Navigating Back');
            await driver.pause(2000);

        } else {

            await driver.pause(20000);
        
            await driver.fingerPrint(1);
            await driver.pause(1000);
    
            await driver.fingerPrint(1);
            await driver.pause(1000);
    
            await driver.fingerPrint(1);
            await driver.pause(5000);

            const cancelEnrollButton = await driver.$("//android.widget.Button[@content-desc='Cancel Enrollment']");
            //id - com.cvshealth.ngasdk.sampleapp:id/btnCancel
            //resource-id - com.cvshealth.ngasdk.sampleapp:id/btnCancel
            //accessibility id - Cancel Enrollment
            //text - Cancel Enrollment
            await cancelEnrollButton.waitForDisplayed();
            await cancelEnrollButton.click(); 
            await driver.pause(5000);

            const cancelPINOKButton = await driver.$("//android.widget.Button[@resource-id='android:id/button1']");
            //id - android:id/button1
            //text - OK
            //resource-id - android:id/button1
            await cancelPINOKButton.click();
            await driver.pause(2000);

        }

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while enrolling\n" + err);
    }
});

When(/^the user enrolls with (.+) policy with (.+)$/, async function(policy, PIN){

    try {

        if (policy.toLowerCase() == 'pinonly') {

            var num = 123456;
            var digits = num.toString().split('');
            var realDigits = digits.map(Number)
            console.log(realDigits);
            
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
        
            const savePINButton = await driver.$("//android.widget.Button[@text='Save']");
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
        
            const savePINButton = await driver.$("//android.widget.Button[@text='Save']");
            await savePINButton.waitForDisplayed();
            await savePINButton.click(); 
            await driver.pause(5000);
    
        }

    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while enrolling\n" + err);
    }

});

When('the user enters invalid PINs', async function(){

    try {

        await driver.pause(2000);
    
        firstDigitPIN = await driver.$("//android.widget.EditText[@text='Input First Pin']");
        secondDigitPIN = await driver.$("//android.widget.EditText[@text='Input Second Pin']");
        thirdDigitPIN = await driver.$("//android.widget.EditText[@text='Input Third Pin']");
        fourthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fourth Pin']");
        fifthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fifth Pin']");
        sixthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Sixth Pin']");
    
        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(2);
        await thirdDigitPIN.setValue(3);
        await fourthDigitPIN.setValue(4);
        await fifthDigitPIN.setValue(5);
        await sixthDigitPIN.setValue(8);
    
        const savePINButton = await driver.$("//android.widget.Button[@text='Save']");
        await savePINButton.waitForDisplayed();
        await savePINButton.click();

        await driver.pause(5000);
        
        const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');

        await driver.pause(5000);

        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(2);
        await thirdDigitPIN.setValue(1);
        await fourthDigitPIN.setValue(2);
        await fifthDigitPIN.setValue(1);
        await sixthDigitPIN.setValue(2);

        await savePINButton.waitForDisplayed();
        await savePINButton.click(); 
        await driver.pause(5000);

        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');

        const cancelEnroll = await driver.$("//android.widget.Button[@text='Cancel Enrollment']");
        //resource-id/id - android:id/button1
        await cancelEnroll.click();
        console.log('Clicking on the Cancel button');
        
        await driver.pause(2000);
        await oKDialog.click();
        console.log('Clicking on the OK button');
        
    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while enrolling\n" + err);
    }

});

When('the user enters a blank PIN', async function(){

    try {

        await driver.pause(3000);

        const savePINButton = await driver.$("//android.widget.Button[@text='Save']");
        await savePINButton.waitForDisplayed();
        await savePINButton.click();

        await driver.pause(5000);

        const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');
        await driver.pause(2000);
        
    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while enrolling\n" + err);
    }

});

When('the user validates the blank PIN error message', async function(){

    try {

        await driver.pause(3000);

        const savePINButton = await driver.$("//android.widget.Button[@text='Save']");
        await savePINButton.waitForDisplayed();
        await savePINButton.click();

        await driver.pause(5000);

        const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');
        await driver.pause(2000);
        
    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while enrolling\n" + err);
    }
});

When('the user validates the invalid PIN error messages', async function(){
    
    try {

        await driver.pause(2000);
    
        firstDigitPIN = await driver.$("//android.widget.EditText[@text='Input First Pin']");
        secondDigitPIN = await driver.$("//android.widget.EditText[@text='Input Second Pin']");
        thirdDigitPIN = await driver.$("//android.widget.EditText[@text='Input Third Pin']");
        fourthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fourth Pin']");
        fifthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Fifth Pin']");
        sixthDigitPIN = await driver.$("//android.widget.EditText[@text='Input Sixth Pin']");
    
        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(2);
        await thirdDigitPIN.setValue(3);
        await fourthDigitPIN.setValue(4);
        await fifthDigitPIN.setValue(5);
        await sixthDigitPIN.setValue(8);
    
        const savePINButton = await driver.$("//android.widget.Button[@text='Save']");
        await savePINButton.waitForDisplayed();
        await savePINButton.click();

        await driver.pause(5000);
        
        const oKDialog = await driver.$("//android.widget.Button[@text='OK']");
        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');

        await driver.pause(5000);

        await firstDigitPIN.setValue(1);
        await secondDigitPIN.setValue(2);
        await thirdDigitPIN.setValue(1);
        await fourthDigitPIN.setValue(2);
        await fifthDigitPIN.setValue(1);
        await sixthDigitPIN.setValue(2);

        await savePINButton.waitForDisplayed();
        await savePINButton.click(); 
        await driver.pause(5000);

        //resource-id/id - android:id/button1
        await oKDialog.click();
        console.log('Clicking on the OK button');

        const cancelEnroll = await driver.$("//android.widget.Button[@text='Cancel Enrollment']");
        //resource-id/id - android:id/button1
        await cancelEnroll.click();
        console.log('Clicking on the Cancel button');
        
        await driver.pause(2000);
        await oKDialog.click();
        console.log('Clicking on the OK button');
        
    } catch (err) {

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while enrolling\n" + err);
    }

});
