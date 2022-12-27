import { ProtoPageLocators } from "../locators/protoPageLocators";
import path from 'path';
import screensOverview from './screensOverview';

class Prototype {
    get createProtoBtn() {
        return $(ProtoPageLocators.createProtoBtn);
    };

    get protoNameInput() {
        return $(ProtoPageLocators.protoNameInput);
    };

    async deviceType(name: string) {
        return $(`//div[contains(@class, 'prototype-type-name') and text()='${name}']`);
    }

    async createPrototype(protoObject) {
        await this.protoNameInput.setValue(protoObject.name);
        await this.chooseProtoType(protoObject.type);
        await this.createProtoBtn.click();
        return this;
    }

    async chooseProtoType(protoType) {
        switch(protoType) {
            case 'Desktop':
                await (await this.deviceType(protoType)).click();
                break;
            case 'iPhone 13':
                await this.deviceType(protoType).click();
                break;
            case 'iPhone 13 Mini':
                await this.deviceType(protoType).click();
                break;
            case 'Android':
                await this.deviceType(protoType).click();
                break;
            case 'iPad':
                await (await this.deviceType(protoType)).click();
                break;
            case 'Android Tablet':
                await this.deviceType(protoType).click();
                break;
            case 'Apple Watch':
                await this.deviceType(protoType).click();
                break;
            case 'Android Wear':
                await this.deviceType(protoType).click();
                break;
            default:
                break;
        };
    };

    async uploadProtofile(protoObject) {
        let hiddenInput = await $('#main-upload');
        let filePath = await path.join(__dirname, protoObject.filePath);
        let remotePath = await browser.uploadFile(filePath);
        await screensOverview.addScreensBtn.waitForDisplayed();

        await browser.execute(() => {
            document.getElementById('main-upload').style.display = 'block';
        })
        await hiddenInput.setValue(remotePath);
        await screensOverview.screensContainer.waitForDisplayed();
        return this;
    }
}
export default new Prototype();