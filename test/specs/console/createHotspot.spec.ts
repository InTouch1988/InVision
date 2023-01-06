import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';
import hotspotModal from '../../pageobjects/hotspotModal';
import topBar from '../../pageobjects/consoleTopBar';

describe('Create hotspots', async () => {

    const hotspotData = {
        firstCoordinate: {x: 50, y: 50}, 
        secondCoordinate: {x: 100, y: 100}
    };

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });

    beforeEach(async () => {
        if (await consoleMode.hotspots.length > 0) {
            await browser.pause(1000);
            await (await consoleMode.projectScreen).waitForDisplayed();
            await (await consoleMode.projectScreenImg).waitForDisplayed();
            await consoleMode.selectHotspot();
            if (await consoleMode.hotspots.length > 1) {
                await consoleMode.deleteAllHotspots();
            } else {
                await consoleMode.deleteSingleHotspot();
            };
        };
        await (await consoleMode.projectScreen).waitForDisplayed();
        await consoleMode.createHotspot(hotspotData);
        await hotspotModal.openLinkToMenu();
    });
    
    it('Create a hotspot with Next Screen in Series option', async () => {
        await hotspotModal.selectLinkToMenuOption('Next Screen in Series');
        await hotspotModal.saveHotspot();
        await consoleMode.isHotspotCreated();
    });

    it('Create a hotspot with Another point on this screen option', async () => {
        await hotspotModal.selectLinkToMenuOption('Another point on this screen');
        await hotspotModal.setAnchorPosition();
        await hotspotModal.saveHotspot();
        await consoleMode.isHotspotCreated();
    });
});