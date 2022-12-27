const exp = require('constants');
const path = require('path');
const loginPage = require('../pageobjects/LoginPage');
const homePage = require('../pageobjects/HomePage');
const screensOverview = require('../pageobjects/ScreensOverview');
const prototypePage = require('../pageobjects/PrototypePage');

describe('Screens uploading', async () => {
    const loginCred = {
        login: 'romanbzhezytskyi@invisionapp.com',
        password: 'Ghjcnjkjk88!'
    };
    const prototype = {
        name: 'Some name',
        type: 'iPad',
        filePath: '../data/Unknown.jpg'
    }
    before(async () => {
        await loginPage.login(loginCred);
    });

    it('Should successfully upload screens', async () => {
        await homePage.createDoc('Prototype');
        await prototypePage.createPrototype(prototype);
        await screensOverview.addScreensContainer.waitForExist();
        await prototypePage.uploadProtofile(prototype);
        expect(await screensOverview.screensList).toHaveLength(1);
    });
});