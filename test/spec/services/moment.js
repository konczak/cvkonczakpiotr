'use strict';

describe('Service: moment', function () {

    // load the service's module
    beforeEach(module('konczakpiotrcvApp'));

    // instantiate service
    var moment;
    beforeEach(inject(function (_momentService_) {
        moment = _momentService_;
    }));

    it('should do something', function () {
        expect(moment).toBeDefined();
    });

});
