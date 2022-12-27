const helpers = require('../Helpers/LoginAPI');
import axios from 'axios';
// import {LoginPage} from '../pageobjects/LoginPage';
// import {HomePage} from '../pageobjects/HomePage';
const loginPage = require('../pageobjects/LoginPage');
const homePage = require('../pageobjects/HomePage');

describe('Login', async ()=> {

    const loginCred = {
        url: 'https://login.invisionbeta.com/login-api/api/v2/login',
        body: {
            email: "romanbzhezytskyi@invisionapp.com",
            password: "Ghjcnjkjk88!",
            deviceID: "App"
        }
    }

    it('Should log in successfully', async ()=> {
        await helpers.loginAPI(loginCred);
        await homePage.goToHomePage();
        await expect(homePage.createBtn).toBePresent();
    });
})