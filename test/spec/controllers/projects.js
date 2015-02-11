'use strict';

describe('Controller: ProjectsCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var ProjectsCtrl,
            scope,
            projects;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        projects = [{name: 'name'}];
        ProjectsCtrl = $controller('ProjectsCtrl', {
            $scope: scope,
            projects: projects
        });
    }));

    it('should attach vo to the scope', function () {
        expect(scope.vo).toBeDefined();
    });

    it('should attach projects to vo', function () {
        expect(scope.vo.projects).toBeDefined();
        expect(scope.vo.projects.length).toEqual(projects.length);
    });
});
