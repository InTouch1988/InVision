const loginPage = require('../pageobjects/LoginPage');
const homePage = require('../pageobjects/HomePage').default;

describe('Search file', async ()=> {

    it('Should successfully search and display a file', async ()=> {
        await loginPage.Login();
        await homePage.plusBtn.click();

        function clickBtn(name) {
            let buttons = $(`//button[contains(@class, "new-project-modal") and text()="Create new ${name}"]`);
            buttons.click();
        }
        clickBtn('prototype');
        await browser.pause(2000);
        // if (await homePage.allDocuments.length > 1 && await homePage.testDocument.isExisting()) {
        //     await homePage.findDocument();
        // } else {
        //     await homePage.CreateDocument('freehand', 'SearchExample');
        //     await homePage.goToHomePage();
        //     await homePage.searchInput.waitForDisplayed();
        //     await homePage.findDocument();   
        // }
        // expect(await homePage.allDocuments.length == 1).toBeTruthy();
        // expect(await homePage.testDocName).toEqual('SearchExample');
    })
})