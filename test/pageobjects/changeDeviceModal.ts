import changeDeviceModalLocators from '../locators/changeDeviceModalLocators';
import Device from '../interfaces/devices/device.interface';

class ChangeDeviceModal {

    get cancelButton() {
        return $(changeDeviceModalLocators.cancelButton);
    }
    get changeTypeButton() {
        return $(changeDeviceModalLocators.changeTypeButton);
    }
    get closeButton() {
        return $(changeDeviceModalLocators.closeButton);
    }
    get closeButton() {
        return $(changeDeviceModalLocators.closeButton);
    }
    get currentlySelectedDeviceType() {
        return $(changeDeviceModalLocators.currentlySelectedDeviceType).getText();
    }
    get currentlySelectedDeviceName() {
        return $(changeDeviceModalLocators.currentlySelectedDeviceName).getText();
    }
    get changeTypeBtn() {
        return $(changeDeviceModalLocators.changeTypeBtn);
    }
    async getDeviceTypeContainer(deviceType: string) {
        return $(`//*[@data-testid="prototype-device-type"]/span[contains(text(), "${deviceType}")]`);
    }
    async getdeviceNameCheckbox(deviceName: string) {
        return $(`//label[@data-testid="prototype-device-name" and text()="${deviceName}"]`);
    }
    async changeDeviceType(device: Device) {
        if (await (this.currentlySelectedDeviceType) !== device.deviceType) {
            await (await this.getDeviceTypeContainer(device.deviceType)).waitForClickable();
            await (await this.getDeviceTypeContainer(device.deviceType)).click();
            await browser.pause(1000);
        }
        if (await (this.currentlySelectedDeviceName) !== device.deviceName) {
            await (await this.getdeviceNameCheckbox(device.deviceName)).waitForClickable();
            await (await this.getdeviceNameCheckbox(device.deviceName)).click();
            await browser.pause(1000);
        }
        await (await this.changeTypeBtn).waitForClickable();
        await (await this.changeTypeBtn).click();
        expect(await this.changeTypeBtn).not.toBePresent();
    };
};

export default new ChangeDeviceModal();