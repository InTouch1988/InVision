require('dotenv').config();

class LoginPage {

    get username() {
        return $('#signin_email');
    }
    get password() {
        return $('#signin_password');
    }
    get submitBtn() {
        return $('button[data-component="primary-button"]');
    }
    get teamAvatar() {
        return $('div[aria-label="Blue Team team avatar"]');
    }

    async login() {
        await browser.url('https://login.invisionbeta.com/auth/sign-in');
        await this.username.setValue(process.env.email);
        await this.password.setValue(process.env.password);
        await this.submitBtn.click();
        await this.teamAvatar.waitForDisplayed();
        await this.teamAvatar.click();
    }
}

export default new LoginPage();