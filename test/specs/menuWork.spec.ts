const loginPage = require('../pageobjects/LoginPage');
const homePage = require('../pageobjects/HomePage');

describe('Screens uploading', async () => {
    const menuOptions = [{option: 'Prototype'}, {option: 'Blank Freehand'}];
    const loginCred = {
        login: 'romanbzhezytskyi@invisionapp.com',
        password: 'Ghjcnjkjk88!'
    }; 
    before(async () => {
        await loginPage.login(loginCred);
    })
    beforeEach(async () => {
        await homePage.goToHomePage();
    })
    menuOptions.forEach(menuoption => {
        it(`Check menu ${menuoption.option}`, async () => {
            await homePage.createDoc(menuoption.option);
        });
    });
});