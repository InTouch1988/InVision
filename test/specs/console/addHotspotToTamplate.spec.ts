import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';
import hotspotModal from '../../pageobjects/hotspotModal';
import consoleTopBar from "../../pageobjects/consoleTopBar";

describe('Adding hotspot to template', async () => {

    const hotspotData = {
        firstCoordinate: {x: 50, y: 50}, 
        secondCoordinate: {x: 100, y: 100}
    };

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });

    after(async () => {
        await consoleTopBar.deleteTemplate();
    });

    it('Adding hotspot to template', async () => {
        await consoleMode.createHotspot(hotspotData);
        await hotspotModal.openLinkToMenu();
        await hotspotModal.selectLinkToMenuOption('Next Screen in Series');
        await hotspotModal.setTemplateName();
        await hotspotModal.saveHotspot();
        await browser.pause(1000);
        expect(await consoleTopBar.gettemplateMenuText()).toHaveTextContaining('1 Hotspot Template Applied');
    });
})