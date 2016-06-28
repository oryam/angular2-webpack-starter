import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from './user';
import { Address } from './address';

@Component({
    selector: 'app-sand-form',
    inputs: [],
    pipes: [],
    directives: [ REACTIVE_FORM_DIRECTIVES ],
    providers: [],
    template: require('./sand-form.component.html'),
    styles: [
        require('./sand-form.component.scss')
    ]
})
export class AppSandFormComponent implements OnInit {

    name = 'AppSandForm';

    user: User = {
        firstname: 'Buster',
        lastname: 'KEATON',
        phone: '1234567890',
        birth: '1895/10/04',
        address: {
            street: 'xxxxxxxx',
            city: 'Piquas',
            zip: '12345',
            country: 'US'
        }
    };

    validationForm = new FormGroup({
        firstname: new FormControl('Charlie', [
            Validators.required,
            Validators.minLength(2)
        ]),
        lastname: new FormControl('CHAPLIN', [
            Validators.required,
            Validators.minLength(2)
        ]),
        address: new FormGroup({
            zip: new FormControl('333', [
                Validators.required,
                Validators.minLength(3)
            ])
        })
    });

    constructor() { }
    ngOnInit() { }
    test(value, val) {
        console.log(value, val);
    }
}
