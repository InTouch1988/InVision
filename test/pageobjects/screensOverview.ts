import screensOverviewLocators from '../locators/screensOverview.locators';
import homePage from './homePage';

class ScreensOverview {

    get viewScreenBtn() {
        return $(screensOverviewLocators.viewScreenBtn);
    }
    get addScreensContainer() {
        return $(screensOverviewLocators.addScreensContainer);
    }
    get addScreensBtn() {
        return $(screensOverviewLocators.addScreensBtn);
    }
    get screensContainer() {
        return $(screensOverviewLocators.screensContainer);
    }
    get screensList() {
        return $$(screensOverviewLocators.screensList);
    }
    get prototypeActionsMenu() {
        return $(screensOverviewLocators.prototypeActionsMenu);
    }
    async getPrototypeActionMenuItem(option: String) {
        return $(`//*[@data-test-id="helios-menu-item"] /div[contains(text(), "${option}")]`);
    }
    async openPrototypeActionsMenu() {
        await this.prototypeActionsMenu.waitForDisplayed();
        await this.prototypeActionsMenu.click();
    }
    async selectPrototypeActionOption(optionName: string) {
        await (await this.getPrototypeActionMenuItem(optionName)).waitForClickable();
        await (await this.getPrototypeActionMenuItem(optionName)).click();
    }
    async openDeviceTypeMenu() {
        await this.openPrototypeActionsMenu();
        await this.selectPrototypeActionOption('Change device type');

    }
    async openTestFileInConsole() {
        await homePage.openTestFile();
        await (await this.viewScreenBtn).waitForDisplayed();
        await (await this.viewScreenBtn).click();
    }
}

export default new ScreensOverview();