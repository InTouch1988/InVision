import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';
import freehand from "../../pageobjects/freehand";

describe('Creating a freehand', async () => {

    before(async () => {
        await browser.maximizeWindow();
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
    });

    it('Creating a freehand via Collaborate button', async () => {
        await consoleMode.createFreehand();
        expect(await freehand.toolbar).toBePresent();
    });
})