import { Component, OnInit } from '@angular/core';

@Component({
    selector: '<%= prefix %>-<%= name %>',
    inputs: [],
    pipes: [],
    directives: [],
    providers: [],
    template: require('./<%= name %>.component.html'),
    styles: [
        require('./<%= name %>.component.scss')
    ]
})
export class <%= classPrefix %><%= className %>Component implements OnInit {

    name = '<%= classPrefix %><%= className %>';

    constructor() {}
    ngOnInit() {}

}
