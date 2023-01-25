class loginPage {

    selectors = require('../selectors/loginPage.js');

    async informCredentials(page, user, password) {
        await page.locator(this.selectors.inputUser).fill(user);
        await page.locator(this.selectors.inputPassword).fill(password);
    }

    async loginWithCredentials(page, user, password) {
        await this.informCredentials(page, user, password);
        await page.locator(this.selectors.optionLogin).click()
    }
};

module.exports = loginPage;