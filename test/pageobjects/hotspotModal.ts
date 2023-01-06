import hotspotModalLocators from "../locators/hotspotModal.locators";

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
    get anchorBtn() {
        return $(hotspotModalLocators.anchorBtn);
    }
    get screenImg() {
        return $(hotspotModalLocators.screenImg);
    }
    async saveHotspot() {
        await (await this.saveHotspotBtn).click();
    }
    async openLinkToMenu() {
        await (await this.linkToMenu).click();
        await (await this.linkToOptionsList).waitForDisplayed();
    }
    async getLinkToOption(optionName: LinkToOptions) {
        return $(`//li[@class="item ng-scope" and @data-search="${optionName}"]`);
    }
    async selectLinkToMenuOption(optionName: LinkToOptions) {
        await (await this.getLinkToOption(optionName)).click();
    }
    async setAnchorPosition() {
        await (await this.anchorBtn).waitForClickable();
        await (await this.anchorBtn).click();
        await (await this.screenImg).waitForDisplayed();
        await (await this.screenImg).click();
    }
}

export default new HotspotModal();