'use strict';

import Relateditems from '../relateditems';

describe('Relateditems View', function() {

  beforeEach(() => {
    this.relateditems = new Relateditems();
  });

  it('Should run a few assertions', () => {
    expect(this.relateditems).toBeDefined();
  });

});
