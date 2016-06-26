describe('Sandbox', () => {

    beforeEach(() => {
        // change hash depending on router LocationStrategy
        browser.get('/#/sandbox');
    });

    it('should have side menu opened', () => {
        let sidenavOpened = element(by.tagName('md-sidenav')).isDisplayed();
        expect(sidenavOpened).toBe(true);
    });

    it('should close side menu', () => {
        element(by.buttonText('Menu 1')).click();
        browser.sleep(1000);
        let sidenavOpened = element(by.tagName('md-sidenav')).isDisplayed();
        expect(sidenavOpened).toBe(false);
    });

});
