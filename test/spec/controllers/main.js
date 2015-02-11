'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var MainCtrl,
            scope,
            personalData,
            socialLinks,
            courses,
            jobs,
            projects,
            mainSkills,
            categories;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        personalData = {firstname: 'firstname'};
        socialLinks = {github: 'url'};
        courses = [{name: 'name'}];
        jobs = [{company: 'company'}];
        projects = [{name: 'name'}];
        mainSkills = [{name: 'skill'}];
        categories = [{name: 'category'}];
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            personalData: personalData,
            socialLinks: socialLinks,
            courses: courses,
            jobs: jobs,
            projects: projects,
            mainSkills: mainSkills,
            categories: categories
        });
    }));

    it('should attach vo to the scope', function () {
        expect(scope.vo).toBeDefined();
    });

    it('should attach personalData to vo', function () {
        expect(scope.vo.personalData).toBeDefined();
    });

    it('should attach socialLinks to vo', function () {
        expect(scope.vo.socialLinks).toBeDefined();
    });

    it('should attach courses to vo', function () {
        expect(scope.vo.courses).toBeDefined();
        expect(scope.vo.courses.length).toEqual(courses.length);
    });

    it('should attach jobs to vo', function () {
        expect(scope.vo.jobs).toBeDefined();
        expect(scope.vo.jobs.length).toEqual(jobs.length);
    });

    it('should attach projects to vo', function () {
        expect(scope.vo.projects).toBeDefined();
        expect(scope.vo.projects.length).toEqual(projects.length);
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
