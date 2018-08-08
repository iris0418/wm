'use strict';

import Mixins from '../mixins';

describe('Mixins View', function() {

  beforeEach(() => {
    this.mixins = new Mixins();
  });

  it('Should run a few assertions', () => {
    expect(this.mixins).toBeDefined();
  });

});
