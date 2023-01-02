import consoleLocators from "../locators/console.locators";
import ScreenCoords from '../interfaces/console/coordinates.interface';


class ConsoleLocators {

    get bottomBar() {
        return $(consoleLocators.bottomBar);
    }
    get projectScreen() {
        return $(consoleLocators.projectScreen);
    }
    get thumbnailTrayBtn() {
        return $(consoleLocators.thumbnailTrayBtn);
    }
    get thumbnailTraySearch() {
        return $(consoleLocators.thumbnailTraSearch);
    }
    async getModeButton(modeName: string) {
        return $(`//li[contains(@class, 'list-item ${modeName}-mode')]`);
    }
    async switchToMode(modeName: string) {
        await (await this.getModeButton(modeName)).click();
    }
    async createHotspot(startCoords: ScreenCoords, endCoords: ScreenCoords) {
        (await this.projectScreen).dragAndDrop(startCoords, endCoords);
    }
};

export default new ConsoleLocators();