describe('my-test', () => {

    beforeEach(() => {
        // TODO add route into @RouteConfig: 
        // { path: '/my-test', name: 'MyTest', component: MyTestComponent }
        browser.get('/#/my-test');
        browser.sleep(1000); // should be removed
    });

    it('should have name equal to "MyTest"', () => {
        let cmpDisplayed = element(by.className('my-test')).isDisplayed();
        expect(cmpDisplayed).toBe(true);
    });

});
