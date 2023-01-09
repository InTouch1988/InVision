const hotspotModalLocators = {
    saveHotspotBtn: '//button[@class="button" and contains(text(), "Save")]',
    hotspotMenu: 'div.hotspot-setup',
    cancelBtn: '//a[contains(text(), "cancel")]',
    closeBtn: '//div[contains(@class, "hotspot-setup")]//a[@class="close"]',
    linkToMenu: '//div[@class="section link-to"]//*[@class="dropdown-with-browse"]//h2',
    linkToOptionsList: '//*[@class="dropdown-with-browse"]//*[@class="menu"]//ul[@class="items"]',
    deleteBtn: '//*[@class="section actions"]//a[@class="delete"]',
    screenImg: 'img.screenImg',
    anchorPositionBtn: '//li[contains(@ng-show, "shouldShowThisOption")]//a[@class="button anchor"]',
    ExternalUrlInput: 'input[ng-model="hotspot.metaData.url"]'
}

export default hotspotModalLocators;