const hotspotModalLocators = {
    saveHotspotBtn: '//button[@class="button" and contains(text(), "Save")]',
    hotspotMenu: 'div.hotspot-setup',
    cancelBtn: '//a[contains(text(), "cancel")]',
    closeBtn: '//div[contains(@class, "hotspot-setup")]//a[@class="close"]',
    linkToMenu: '//div[@class="section link-to"]//*[@class="dropdown-with-browse"]//h2',
    linkToOptionsList: '//*[@class="dropdown-with-browse"]//*[@class="menu"]//ul[@class="items"]',
    deleteBtn: '//*[@class="section actions"]//a[@class="delete"]',
    anchorBtn: 'a[class="button anchor"]',
    screenImg: 'img.screenImg'
}

export default hotspotModalLocators;