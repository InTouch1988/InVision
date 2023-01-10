import consoleLocators from "../locators/console.locators";
import ScreenCoords from '../interfaces/console/coordinates.interface';
import hotspotModalLocators from "../locators/hotspotModal.locators";
import consoleTopBar from "./consoleTopBar";
import HotspotCoords from "../interfaces/console/coordinates.interface";


class ConsoleLocators {

    get bottomBar() {
        return $(consoleLocators.bottomBar);
    }
    get hotspots() {
        return $$(consoleLocators.hotspots);
    }
    get projectScreen() {
        return $(consoleLocators.projectScreen);
    }
    get projectScreenImg() {
        return $(consoleLocators.projectScreenImg);
    }
    get thumbnailTrayBtn() {
        return $(consoleLocators.thumbnailTrayBtn);
    }
    get thumbnailTraySearch() {
        return $(consoleLocators.thumbnailTraSearch);
    }
    get bulkModalDeleteBtn() {
        return $(consoleLocators.bulkModalDeleteBtn);
    }
    get collaborateBtn() {
        return $(consoleLocators.collaborateBtn);
    }
    async gethotspotHandles() {
        return {
            topLeft: $('//div[@ng-show="!hotspot.designTool"][1]'),
            topRight: $('//div[@ng-show="!hotspot.designTool"][2]'),
            bottomLeft: $('//div[@ng-show="!hotspot.designTool"][3]'),
            bottomRight: $('//div[@ng-show="!hotspot.designTool"][4]')
        };
    }
    async getModeButton(modeName: string) {
        return $(`//li[contains(@class, 'list-item ${modeName}-mode')]`);
    }
    async getHotspotSize() {
        return this.hotspots[0].getSize('height');
    }
    async switchToMode(modeName: string) {
        await (await this.getModeButton(modeName)).click();
    }
    async createHotspot(coordinates: HotspotCoords) {
        (await this.projectScreen).dragAndDrop(coordinates.firstCoordinate, coordinates.secondCoordinate);
    }
    async selectHotspot() {
        await this.hotspots[0].waitForClickable();
        await this.hotspots[0].click();
    }
    async deleteSingleHotspot() {
        await (await consoleTopBar.bulkDeleteBtn).click();
        await expect(this.hotspots[0]).not.toBePresent();
    }
    async deleteAllHotspots() {
        await (await consoleTopBar.SelectAllbtn).waitForClickable();
        await (await consoleTopBar.bulkDeleteBtn).click();
        await (await this.bulkModalDeleteBtn).waitForClickable();
        await (await this.bulkModalDeleteBtn).click();
        await expect(this.hotspots[0]).not.toBePresent();
    }
    async isHotspotCreated() {
        await expect(await this.hotspots).toHaveLength(1);
    }
    async checkAndDeleteHotspots() {
        if (await this.hotspots.length > 0) {
            await browser.pause(1000);
            await (await this.projectScreen).waitForDisplayed();
            await (await this.projectScreenImg).waitForDisplayed();
            await this.selectHotspot();
            if (await this.hotspots.length > 1) {
                await this.deleteAllHotspots();
            } else {
                await this.deleteSingleHotspot();
            };
        };
    }
    async resizeHotspot(position: string) {
        const handle = await (await this.gethotspotHandles())[position as keyof typeof this.gethotspotHandles];
        await handle.dragAndDrop({x: -20, y: -20});
    }
    async createFreehand() {
        await (await this.collaborateBtn).waitForClickable();
        await (await this.collaborateBtn).click();
    }
};

export default new ConsoleLocators();