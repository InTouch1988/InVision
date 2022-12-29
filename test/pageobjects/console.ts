import consoleLocators from "../locators/console.locators";
import ScreenCoords from '../interfaces/console/coordinates.interface';


class ConsoleLocators {

    get bottomBar() {
        return $(consoleLocators.bottomBar);
    }
    get saveHotspotBtn() {
        return $(consoleLocators.saveHotspotBtn);
    }
    get hotspotMenu() {
        return $(consoleLocators.hotspotMenu);
    }
    get projecrScreen() {
        return $(consoleLocators.projectScreen);
    }
    async getModeButton(modeName: string) {
        return $(`//li[contains(@class, 'list-item ${modeName}-mode')]`);
    }
    async switchToMode(modeName: string) {
        await (await this.getModeButton(modeName)).click();
    }
    async createHotspot(startCoords: ScreenCoords, endCoords: ScreenCoords) {
        (await this.projecrScreen).dragAndDrop(startCoords, endCoords);
        await (await this.saveHotspotBtn).waitForDisplayed();
        await (await this.saveHotspotBtn).click();
    }
};

export default new ConsoleLocators();