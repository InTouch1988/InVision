import consoleLocators from "../locators/console.locators";

class ConsoleLocators {

    get bottomBar() {
        return $(consoleLocators.bottomBar);
    }
    async getModeButton(modeName: string) {
        return $(`//li[contains(@class, 'list-item ${modeName}-mode')]`);
    }
};

export default new ConsoleLocators();