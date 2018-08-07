'use strict';

import Mvfans from '../mvfans';

describe('Mvfans View', function() {

  beforeEach(() => {
    this.mvfans = new Mvfans();
  });

  it('Should run a few assertions', () => {
    expect(this.mvfans).toBeDefined();
  });

});
