const loginPage = require('../pageobjects/LoginPage');
const homePage = require('../pageobjects/HomePage').default;
const screensOverview = require('../pageobjects/ScreensOverview');
import helpers from '../Helpers/FileNameGenerator';

describe('Drag and Drop screens', async () => {

    before(async () => {
        await loginPage.Login();
    })

    it('Drag and drop', async () => {
        await homePage.searchTestFile('Test Fixture');
        await homePage.openTestFile();
        await browser.pause(4000);

        const target = await $('//div[@class="EmptySectionStyled__EmptySectionWrapper-sc-7ifsyl-0 dvueDi"]');
        await target.waitForExist();
        let button = await $$('span[data-testid="screen-select-radio"]');
        await button[0].moveTo();
        await button[0].waitForClickable();
        await button[0].click();
        await browser.pause(3000);
        let draggable = await $$('div.screenV2__screenImageWrapper__1C9tf');
        await draggable[0].waitForExist();
        await draggable[0].dragAndDrop(target);
        await browser.pause(5000);
    })
})