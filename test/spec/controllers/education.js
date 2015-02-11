'use strict';

describe('Controller: EducationCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var EducationCtrl,
            scope,
            courses;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        courses = [{name: 'name'}];
        EducationCtrl = $controller('EducationCtrl', {
            $scope: scope,
            courses: courses
        });
    }));

    it('should attach vo to scope', function () {
        expect(scope.vo).toBeDefined();
    });

    it('should attach courses to vo', function () {
        expect(scope.vo.courses).toBeDefined();
        expect(scope.vo.courses.length).toEqual(courses.length);
    });
});
