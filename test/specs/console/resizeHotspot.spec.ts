import loginPage from "../../pageobjects/loginPage";
import screensOverview from "../../pageobjects/screensOverview";
import consoleMode from '../../pageobjects/console';
import hotspotModal from '../../pageobjects/hotspotModal';

describe('Check hotspot resizing', async () => {

    const hotspotData = {
        firstCoordinate: {x: 50, y: 50}, 
        secondCoordinate: {x: 100, y: 100}
    };
    const handlesPosition: string[] = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

    before(async () => {
        await browser.maximizeWindow();
        await loginPage.login();
        await screensOverview.openTestFileInConsole();
        await consoleMode.switchToMode('build');
    });

    handlesPosition.forEach(position => {
        it(`Check hotspot resizing from ${position} corner`, async () => {
            await (await consoleMode.projectScreen).waitForDisplayed();
            await consoleMode.createHotspot(hotspotData);
            await browser.pause(1000);
            const initSize = await consoleMode.getHotspotSize();
            console.log(await initSize);
            await consoleMode.resizeHotspot(position);
            await browser.pause(1000);
            const endtSize = await consoleMode.getHotspotSize();
            console.log(await endtSize);
            expect(await endtSize).not.toEqual(await initSize);
        });
    });
})