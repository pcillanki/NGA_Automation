const NGAMobileApp = require('./NGAMobileApp');

/**
 * Login page : containing specific selectors and methods for the Login page
 */
class LoginPage extends NGAMobileApp {
    /**
     * defining selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * Login method to encapsule automation code to interact within the page
     * Login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.launch();
    }
}

module.exports = new LoginPage();
