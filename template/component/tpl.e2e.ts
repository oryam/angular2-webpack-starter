describe('<%= classPrefix %><%= className %>Component', () => {

    beforeEach(() => {
        // TODO add route into @RouteConfig: 
        // { path: '/<%= name %>', name: '<%= className %>', component: <%= classPrefix %><%= className %>Component }
        browser.get('/#/<%= name %>');
        browser.sleep(1000); // should be removed
    });

    it('should have an element with class "<%= prefix %>-<%= name %>"', () => {
        let cmpDisplayed = element(by.className('<%= prefix %>-<%= name %>')).isDisplayed();
        expect(cmpDisplayed).toBe(true);
    });

});
