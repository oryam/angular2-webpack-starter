import { Component, OnInit } from '@angular/core';

import { MdToolbar } from '@angular2-material/toolbar';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
  selector: 'sand-material',
  inputs: [],
  pipes: [],
  directives: [
    MdToolbar,
    MATERIAL_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES
  ],
  providers: [],
  template: require('./sand-material.component.html'),
  styles: [
    require('./sand-material.component.scss')
  ]
})
export class SandMaterialComponent implements OnInit {

  materials: Array<any> = [
    { 'id': 1, 'name': 'Acrylic (Transparent)', 'quantity': '25', 'price': '$2.90' },
    { 'id': 2, 'name': 'Plywood (Birch)', 'quantity': '50', 'price': '$1.25' },
    { 'id': 3, 'name': 'Laminate (Gold on Blue)', 'quantity': '10', 'price': '$2.35' }
  ];

  constructor() { }
  ngOnInit() { }
}
