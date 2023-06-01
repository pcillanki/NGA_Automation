import NGAApp from './NGAMobileApp';

class EnvironmentPage extends NGAMobileApp {
    
    get fallbackPolicy () { return $("//android.widget.Button[@text='Fallback']") }

    get biometricOnlyPolicy () { return $("//android.widget.Button[@text='Biometric only']") }

    get pINOnlyPolicy () { return $("//android.widget.Button[@text='PIN only']") }

    async selectPolicy(policy) {
        if (policy.toLowerCase() === 'fallback') {
            await this.fallbackPolicy.click();
        } else if (policy.toLowerCase() === 'biometriconly'){
            await this.biometricOnlyPolicy.click()
        } else {
            
        }
    }

    async NGAAppLaunch () {
        return super.launch();
    }

  }

  export default new EnvironmentPage();