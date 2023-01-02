const hotspotModalLocators = {
    saveHotspotBtn: '//button[@class="button" and contains(text(), "Save")]',
    hotspotMenu: 'div.hotspot-setup',
    cancelBtn: '//a[contains(text(), "cancel")]',
    closeBtn: '//div[contains(@class, "hotspot-setup")]//a[@class="close"]',
    linkToMenu: '//div[@dropdown-data]//h2[contains(text(), "Select a destination")]'
}

export default hotspotModalLocators;