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
    const linkToOptions: string[] = ['Link Back / Close', 'Previous Screen in Series', 'Next Screen in Series'];
    const urlAddress: string = 'google.com';

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });

    beforeEach(async () => {
        await consoleMode.checkAndDeleteHotspots();
        await (await consoleMode.projectScreen).waitForDisplayed();
        await consoleMode.createHotspot(hotspotData);
        await hotspotModal.openLinkToMenu();
    });

    linkToOptions.forEach(optionName => {
        it(`Create a hotspot with "${optionName}" option`, async () => {
            await hotspotModal.selectLinkToMenuOption(optionName);
            await hotspotModal.saveHotspotAndCheck();
        });
    });

    it('Create a hotspot with "Another point on this screen" option', async () => {
        await hotspotModal.selectLinkToMenuOption('Another point on this screen');
        await hotspotModal.setAnchorPosition();
        await hotspotModal.saveHotspotAndCheck();
    });

    it('Create a hotspot with "External URL" option', async () => {
        await hotspotModal.selectLinkToMenuOption('External URL');
        await hotspotModal.setUrlAdress(urlAddress);
        await hotspotModal.saveHotspotAndCheck();
    })
});