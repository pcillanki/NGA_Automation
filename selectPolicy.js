class SelectPolicyPage extends NGAMobileApp {

    get fallbackPolicy() { 
        return driver.$("//android.widget.Button[@text='Fallback']");
    }

    get biometricOnlyPolicy() { 
        return driver.$("//android.widget.Button[@text='Biometric only']");
    }

    get pINOnlyPolicy() { 
        return driver.$("//android.widget.Button[@text='PIN only']");
    }

async selectPolicy(policy) {

}

}

module.exports = new SelectPolicyPage();