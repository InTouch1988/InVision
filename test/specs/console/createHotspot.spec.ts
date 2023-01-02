import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';

describe('Creat a hotspot', async () => {

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });
    
    it('Creat a hotspot', async () => {
        await (await consoleMode.projectScreen).waitForDisplayed();
        await consoleMode.createHotspot({x: 50, y: 50}, {x: 100, y: 100});
    });
});