const HomePageLocators = {
    createBtn: 'button[data-testid="create-menu-trigger"]',
    searchField: '//input[@data-testid="search-input-field"]',
    specNameInput: '//input[@id="name-your-spec"]',
    boardNameInput: '//input[@id="name-your-board"]',
    createSpecBtn: '//div[contains(@class, "create-space")]//button[text()="Create"]',
    createBoardBtn: '//button[@id="btn-create-board"]',
    dropDownMenuContainer: '//div[@data-testid="hds-dropdown-menu-wrap"]',
    docList: '//div[@data-testid="hds-dropdown-menu-wrap"]//li[@class="hds-menu-li"]',
    testFile: 'div[data-id="23084038"]'
};

export default HomePageLocators;