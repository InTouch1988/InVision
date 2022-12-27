import loginPage from '../pageobjects/loginPage';
import homePage from '../pageobjects/HomePage';
import screensOverview from '../pageobjects/screensOverview';
import freehand from '../pageobjects/freehand';
import specs from '../pageobjects/specs';
import boards from '../pageobjects/board';

describe('Create doc', async () => {

    before(async () => {
        await loginPage.Login();
    })

    afterEach(async () => {
        await homePage.goToHomePage();
    })

    it('Should successfully create a freehand', async () => {
        await homePage.createDoc('Blank Freehand');
        expect(await freehand.toolbar).toBePresent();
    })

    it('Should successfully create a prototype', async () => {
        await homePage.createDoc('Prototype');
        expect(await screensOverview.addScreensContainer).toBePresent();

    })
    it('Should successfully create a spec', async () => {
        await homePage.createDoc('Spec');
        expect(await specs.specCanvas).toBePresent();
    })
    it('Should successfully create a board', async () => {
        await homePage.createDoc('Board');
        expect(await boards.emptyBoardContainer).toBePresent();
    })
})