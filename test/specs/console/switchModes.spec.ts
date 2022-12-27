import loginPage from "../../pageobjects/loginPage";
import homePage from '../../pageobjects/homePage';
import screensOverview from '../../pageobjects/screensOverview';
import consoleMode from '../../pageobjects/console';

describe('Switch between modes', async () => {
    const mode: string[] = ['play', 'build', 'comment', 'inspect'];

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
    });

    mode.forEach(element => {
        it (`Switch to ${element} mode`, async () => {
            await (await consoleMode.bottomBar).waitForDisplayed();
            await (await consoleMode.getModeButton(element)).click();
            await browser.pause(1000);
            expect(await browser).toHaveUrlContaining(element);
        });
    });
});