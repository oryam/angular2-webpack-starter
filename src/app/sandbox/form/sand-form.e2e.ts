describe('AppSandFormComponent', () => {

    beforeEach(() => {
        // TODO add route into @RouteConfig: 
        // { path: '/sand-form', name: 'SandForm', component: AppSandFormComponent }
        browser.get('/#/sand-form');
        browser.sleep(1000); // should be removed
    });

    it('should have an element with class "app-sand-form"', () => {
        let cmpDisplayed = element(by.className('app-sand-form')).isDisplayed();
        expect(cmpDisplayed).toBe(true);
    });

});
