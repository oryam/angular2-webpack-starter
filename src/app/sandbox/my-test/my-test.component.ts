import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-test',
    inputs: [],
    pipes: [],
    directives: [],
    providers: [],
    template: require('./my-test.component.html'),
    styles: [
        require('./my-test.component.scss')
    ]
})
export class MyTestComponent implements OnInit {

    name = 'MyTest';

    constructor() {}
    ngOnInit() {}

}
