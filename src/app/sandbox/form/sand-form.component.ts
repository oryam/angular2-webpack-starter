import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sand-form',
    inputs: [],
    pipes: [],
    directives: [],
    providers: [],
    template: require('./sand-form.component.html'),
    styles: [
        require('./sand-form.component.scss')
    ]
})
export class AppSandFormComponent implements OnInit {

    name = 'AppSandForm';

    constructor() {}
    ngOnInit() {}

}
