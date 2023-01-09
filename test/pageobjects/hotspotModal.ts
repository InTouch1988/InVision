import hotspotModalLocators from "../locators/hotspotModal.locators";
import consoleMode from "../pageobjects/console";
import LinkToMenu from "../interfaces/console/linkToMenu.interface";

class HotspotModal {

    get saveHotspotBtn() {
        return $(hotspotModalLocators.saveHotspotBtn);
    }
    get hotspotMenu() {
        return $(hotspotModalLocators.hotspotMenu);
    }
    get cancelBtn() {
        return $(hotspotModalLocators.cancelBtn);
    }
    get closeBtn() {
        return $(hotspotModalLocators.closeBtn);
    }
    get deleteBtn() {
        return $(hotspotModalLocators.deleteBtn);
    }
    get linkToMenu() {
        return $(hotspotModalLocators.linkToMenu);
    }
    get linkToOptionsList() {
        return $(hotspotModalLocators.linkToOptionsList);
    }
    get screenImg() {
        return $(hotspotModalLocators.screenImg);
    }
    get anchorPositionBtn() {
        return $(hotspotModalLocators.anchorPositionBtn);
    }
    get externalUrlInput() {
        return $(hotspotModalLocators.ExternalUrlInput);
    }
    async saveHotspot() {
        await (await this.saveHotspotBtn).click();
    }
    async openLinkToMenu() {
        await (await this.linkToMenu).click();
        await (await this.linkToOptionsList).waitForDisplayed();
    }
    async getLinkToOption(optionName: string) {
        return $(`//li[@class="item ng-scope" and contains(@data-search, "${optionName}")]`);
    }
    async selectLinkToMenuOption(optionName: string) {
        await (await this.getLinkToOption(optionName)).click();
    }
    async setAnchorPosition() {
        await (await this.anchorPositionBtn).waitForClickable();
        await (await this.anchorPositionBtn).click();
        await (await this.screenImg).waitForDisplayed();
        await (await this.screenImg).click();
    }
    async setUrlAdress(address: LinkToMenu) {
        await (await this.externalUrlInput).waitForClickable();
        await (await this.externalUrlInput).setValue(address.urlAddress);
    }
    async saveHotspotAndCheck() {
        await this.saveHotspot();
        await consoleMode.isHotspotCreated();
    }
}

export default new HotspotModal();