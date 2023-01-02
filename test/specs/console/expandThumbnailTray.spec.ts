import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';

describe('Expand thumbnail tray', async () => {

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });
    
    it('Expand thumbnail tray', async () => {
        await (await consoleMode.projectScreen).waitForDisplayed();
        await (await consoleMode.thumbnailTrayBtn).click();
        await expect(consoleMode.thumbnailTraySearch).toBeClickable();
    });
});