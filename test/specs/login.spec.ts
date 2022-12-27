import loginPage from '../pageobjects/LoginPage';
import homePage from '../pageobjects/HomePage';

describe('Login', async ()=> {

    it('Should log in successfully', async ()=> {
        await loginPage.login();
        expect(await homePage.createBtn).toBePresent();
    });
});