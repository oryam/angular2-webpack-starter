import { Component } from '@angular/core';
import {
  beforeEachProviders,
  describe,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { MyTestComponent } from './my-test.component';

describe('MyTestComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    MyTestComponent
  ]);

  it('should log ngOnInit', inject([ MyTestComponent ], (cmp) => {
    expect(cmp.name).toBe('MyTest');
  }));

});
