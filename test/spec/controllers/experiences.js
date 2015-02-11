'use strict';

describe('Controller: ExperiencesCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var ExperiencesCtrl,
            scope,
            jobs;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        jobs = [{company: 'company'}];
        ExperiencesCtrl = $controller('ExperiencesCtrl', {
            $scope: scope,
            jobs: jobs
        });
    }));

    it('should attach vo to scope', function () {
        expect(scope.vo).toBeDefined();
    });

    it('should attach jobs to vo', function () {
        expect(scope.vo.jobs).toBeDefined();
        expect(scope.vo.jobs.length).toEqual(jobs.length);
    });
});
