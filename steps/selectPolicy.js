const { Given, When, Then, setDefaultTimeout } = require('@wdio/cucumber-framework');
//const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");

setDefaultTimeout(750 * 1000);

When(/^the user has selected the (.*)$/, async function(policy) {

    try {

        const fallbackPolicy = await driver.$("//android.widget.Button[@text='Fallback']");

        const biometricOnlyPolicy = await driver.$("//android.widget.Button[@text='Biometric only']");
  
        const pINOnlyPolicy = await driver.$("//android.widget.Button[@text='PIN only']");
    
        switch (policy.toLowerCase()){
    
        case 'fallback':

            //await fallbackPolicy.waitForExist({timeout:2000});
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

        await driver.closeApp();
        await driver.removeApp('com.cvshealth.ngasdk.sampleapp');
        throw new Error("Error while selecting policy \n" + err);

    }

});
