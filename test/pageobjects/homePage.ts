import homePageLocators from '../locators/homePage.locators';

class HomePage {
    
    get createBtn() {
        return $(homePageLocators.createBtn);
    }
    get docList() {
        return $$(homePageLocators.docList);
    }
    get searchInput() {
        return $(homePageLocators.searchInput);
    }
    get protoNameInput() {
        return $(homePageLocators.protoNameInput);
    }
    get specNameInput() {
        return $(homePageLocators.specNameInput);
    }
    get boardNameInput() {
        return $(homePageLocators.boardNameInput);
    }
    get createSpecBtn() {
        return $(homePageLocators.createSpecBtn);
    }
    get createBoardBtn() {
        return $(homePageLocators.createBoardBtn);
    }
    get dropDownMenuContainer() {
        return $(homePageLocators.dropDownMenuContainer);
    }
    get testFile() {
        return $(homePageLocators.testFile);
    }
    async searchTestFile(name) {
        this.searchInput.setValue(name);
        await browser.keys('Return');
    }
    async openTestFile() {
        await this.testFile.waitForClickable();
        await this.testFile.click();
    }
    async openCreateDocMenu() {
        await this.createBtn.waitForClickable();
        await this.createBtn.click();
    }
    async createDoc(docType) {
        await this.openCreateDocMenu();
        await this.dropDownMenuContainer.waitForDisplayed();

        switch(docType) {
            case 'Blank Freehand':
                await this.docList[0].click();
                break;
            case 'Meeting Agenda':
                await this.docList[1].click();
                break;
            case 'Brainstorming':
                await this.docList[2].click();
                break;  
            case 'Wireframe':
                await this.docList[3].click();
                break;
            case 'Mind Map':
                await this.docList[4].click();
                break;
            case 'Work Prioritization Matrix':
                await this.docList[5].click();
                break;
            case 'Quick retrospective':
                await this.docList[6].click();
                break;
            case 'Prototype':
                await this.docList[7].click();
                await this.protoNameInput.waitForDisplayed();
                break;
            case 'Spec':
                await this.docList[8].click();
                await this.SpecNameInput.setValue('Some new Spec');
                await this.createSpecBtn.click();
                break;
            case 'Board':
                await this.docList[9].click();
                await this.boardNameInput.setValue('Some new Board');
                await this.createBoardBtn.click();
                break;
            default:
                break;
        }
    }
    async goToHomePage() {
        await browser.url('https://blue.invisionbeta.com/homepage');
    }
}

export default new HomePage();