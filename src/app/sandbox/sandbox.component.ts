import { Component, OnInit } from '@angular/core';

import { SandMaterialComponent } from './material';

@Component({
  selector: 'sandbox',
  inputs: [],
  pipes: [],
  directives: [SandMaterialComponent],
  providers: [],
  template: require('./sandbox.component.html'),
  styles: [
    require('./sandbox.component.scss')
  ]
})
export class SandboxComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
}
