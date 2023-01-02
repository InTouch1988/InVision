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
    get linkToMenu() {
        return $(hotspotModalLocators.linkToMenu);
    }
}

export default new HotspotModal();