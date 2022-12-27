const changeDeviceModal = {
    cancelButton: '[data-testid="prototype-device-change-cancel"]',
    changeTypeButton: '[data-testid="prototype-device-change-submit"]',
    closeButton: '//*[contains(@class, "small-close-icon")]',
    currentlySelectedDeviceType: '//div[@data-testid="prototype-device-type" and @data-test-selected="true"]//span',
    currentlySelectedDeviceName: '//label[@data-testid="prototype-device-name" and @data-test-selected="true"]',
    changeTypeBtn: 'button[data-testid="prototype-device-change-submit"]'
}

export default changeDeviceModal;