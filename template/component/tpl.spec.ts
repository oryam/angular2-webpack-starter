import { Component } from '@angular/core';
import {
  beforeEachProviders,
  describe,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { <%= classPrefix %><%= className %>Component } from './<%= name %>.component';

describe('<%= classPrefix %><%= className %>Component', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    <%= classPrefix %><%= className %>Component
  ]);

  it('should have a name "<%= classPrefix %><%= className %>"', inject([ <%= classPrefix %><%= className %>Component ], (cmp) => {
    expect(cmp.name).toBe('<%= classPrefix %><%= className %>');
  }));

});
