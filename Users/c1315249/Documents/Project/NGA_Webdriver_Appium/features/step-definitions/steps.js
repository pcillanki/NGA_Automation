const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../../login.page');
const SecurePage = require('../../secure.page');

const pages = {
    login: LoginPage
}

Given(/^User has launched the NGA sample application$/, async (login) => {
    await pages[login].open()
});

When(/^I login with (\w+) and (.+)$/, async (login, username, password) => {
    await pages[login].login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

