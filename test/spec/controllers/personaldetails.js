'use strict';

describe('Controller: PersonaldetailsCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var PersonaldetailsCtrl,
            scope,
            personalData,
            socialLinks;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        personalData = {firstname: 'firstname'};
        socialLinks = {github: 'url'};
        PersonaldetailsCtrl = $controller('PersonaldetailsCtrl', {
            $scope: scope,
            personalData: personalData,
            socialLinks: socialLinks
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
});
