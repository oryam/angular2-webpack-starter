import { Component } from '@angular/core';
import {
  beforeEachProviders,
  describe,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppSandFormComponent } from './sand-form.component';

describe('AppSandFormComponent', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AppSandFormComponent
  ]);

  it('should have a name "AppSandForm"', inject([ AppSandFormComponent ], (cmp) => {
    expect(cmp.name).toBe('AppSandForm');
  }));

});
