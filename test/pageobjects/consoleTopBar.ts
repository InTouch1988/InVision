import consoleTopBarLocators from "../locators/console.topBar.locators";

class ConsoleTopBar {

    get bulkDeleteBtn() {
        return $(consoleTopBarLocators.bullDeleteBtn);
    }
    get SelectAllbtn() {
        return $(consoleTopBarLocators.selectAllBtn);
    }
};

export default new ConsoleTopBar();