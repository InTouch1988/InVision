import loginPage from '../pageobjects/LoginPage';
import screensOverview from '../pageobjects/ScreensOverview';
import homePage from '../pageobjects/homePage';
import changeDeviceModal from '../pageobjects/ChangeDeviceModal';

describe('Change Device Type', async () => {

    const devices = [
        {
          deviceType: 'Tablet',
          deviceNames: [ 'iPad - Portrait', 'iPad - Landscape', 'Android - Portrait', 'Android - Landscape' ]
        },
        {
          deviceType: 'Mobile',
          deviceNames: [ 'iPhone 13 - Portrait', 'iPhone 13 - Landscape', 'iPhone 13 Mini - Portrait', 'iPhone 13 Mini - Landscape', 'Android - Portrait', 'Android - Landscape' ]
        },
        {
          deviceType: 'Watch',
          deviceNames: [ 'Apple Watch', 'Android Watch' ]
        },
      ];

    before(async () => {
        await loginPage.login();
        await homePage.openTestFile();
    });

    devices.forEach(device => {
        device.deviceNames.forEach(deviceName => {
            const device2 = {
                deviceType: device.deviceType,
                deviceName: deviceName
            };
            it(`change device type to ${deviceName}`, async () => {
                await screensOverview.openDeviceTypeMenu();
                await changeDeviceModal.changeDeviceType(device2);
                await browser.refresh();
            });
        });
    });
});