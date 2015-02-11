'use strict';

describe('Controller: SkillsCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var SkillsCtrl,
            scope,
            mainSkills,
            categories;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        mainSkills = [{name: 'skill'}];
        categories = [{name: 'category'}];
        SkillsCtrl = $controller('SkillsCtrl', {
            $scope: scope,
            mainSkills: mainSkills,
            categories: categories
        });
    }));

    it('should attach vo to the scope', function () {
        expect(scope.vo).toBeDefined();
    });

    it('should set showOthers to vo', function () {
        expect(scope.vo.showOthers).toBeDefined();
    });

    it('should set showOthers to false', function () {
        expect(scope.vo.showOthers).toBe(false);
    });

    it('should attach mainSkills to vo', function () {
        expect(scope.vo.mainSkills).toBeDefined();
        expect(scope.vo.mainSkills.length).toEqual(mainSkills.length);
    });

    it('should attach categories to vo', function () {
        expect(scope.vo.categories).toBeDefined();
        expect(scope.vo.categories.length).toEqual(categories.length);
    });
});
