import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';
import hotspotModal from '../../pageobjects/hotspotModal';

describe('Check hotspot resizing', async () => {

    const hotspotData = {
        firstCoordinate: {x: 50, y: 50}, 
        secondCoordinate: {x: 100, y: 100}
    };

    before(async () => {
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });

    it('Check hotspot resizing from each corner', async () => {
        await consoleMode.checkAndDeleteHotspots();
        await (await consoleMode.projectScreen).waitForDisplayed();
        await consoleMode.createHotspot(hotspotData);
        await browser.pause(2000);
        const size = await consoleMode.hotspots[0].getSize();
        console.log(await size);
        const obj = consoleMode.hotspotHandles();
        const handle = await (await consoleMode.hotspotHandles())['topLeft'];
        await handle.dragAndDrop({x: -20, y: -20});
        await browser.pause(2000);
        
    });
})