const consoleLocators = {
    hotspots: 'div.hotspot',
    bottomBar: '#bottom_bar',
    projectScreen: '.projectScreen',
    projectScreenImg: '//img[contains(@class, "projectScreen") and contains(@src, "https")]',
    thumbnailTrayBtn: 'a[ng-click="toggleThumbnailTray()"]',
    thumbnailTraSearch: '#search_bar',
    bulkModalDeleteBtn: '//div[@role="dialog"]//button[text()="Delete"]'
}

export default consoleLocators;