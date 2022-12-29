import loginPage from "../../pageobjects/loginPage";
import homePage from "../../pageobjects/homePage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';

describe('Check color', async () => {

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });
    
    it('Check color', async () => {
        await (await consoleMode.projecrScreen).waitForDisplayed();
        await consoleMode.createHotspot({x: 50, y: 50}, {x: 100, y: 100});
        await browser.pause(5000);
    });
});