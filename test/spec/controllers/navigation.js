'use strict';

describe('Controller: NavigationCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var NavigationCtrl,
            scope,
            location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$location_) {
        location = _$location_;
        scope = $rootScope.$new();
        NavigationCtrl = $controller('NavigationCtrl', {
            $scope: scope
        });
    }));

    it('should attach vo to the scope', function () {
        expect(scope.vo).toBeDefined();
    });

    describe('function: hasPrevious', function () {

        it('should attach hasPrevious function to vo', function () {
            expect(scope.vo.hasPrevious).toBeDefined();
            expect(typeof scope.vo.hasPrevious).toBe('function');
        });

        it('should return false in hasPrevious when location is /personalDetails', function () {
            location.path('/personalDetails');
            expect(scope.vo.hasPrevious()).toBe(false);
        });

        it('should return false in hasPrevious when location is not supported', function () {
            location.path('/someStrangeLocation');
            expect(scope.vo.hasPrevious()).toBe(false);
        });

        it('should return true in hasPrevious when location is /education', function () {
            location.path('/education');
            expect(scope.vo.hasPrevious()).toBe(true);
        });

        it('should return true in hasPrevious when location is /experiences', function () {
            location.path('/experiences');
            expect(scope.vo.hasPrevious()).toBe(true);
        });

        it('should return true in hasPrevious when location is /projects', function () {
            location.path('/projects');
            expect(scope.vo.hasPrevious()).toBe(true);
        });

        it('should return true in hasPrevious when location is /skills', function () {
            location.path('/skills');
            expect(scope.vo.hasPrevious()).toBe(true);
        });

        it('should return true in hasPrevious when location is /todo', function () {
            location.path('/todo');
            expect(scope.vo.hasPrevious()).toBe(true);
        });

        it('should return true in hasPrevious when location is /allInOnePage', function () {
            location.path('/allInOnePage');
            expect(scope.vo.hasPrevious()).toBe(true);
        });
    });

    describe('function: hasNext', function () {

        it('should attach hasNext function to vo', function () {
            expect(scope.vo.hasNext).toBeDefined();
            expect(typeof scope.vo.hasNext).toBe('function');
        });

        it('should return false in hasNext when location is /allInOnePage', function () {
            location.path('/allInOnePage');
            expect(scope.vo.hasNext()).toBe(false);
        });

        it('should return false in hasNext when location is not supported', function () {
            location.path('/someStrangeLocation');
            expect(scope.vo.hasNext()).toBe(false);
        });

        it('should return true in hasNext when location is /personalDetails', function () {
            location.path('/personalDetails');
            expect(scope.vo.hasNext()).toBe(true);
        });

        it('should return true in hasNext when location is /education', function () {
            location.path('/education');
            expect(scope.vo.hasNext()).toBe(true);
        });

        it('should return true in hasNext when location is /experiences', function () {
            location.path('/experiences');
            expect(scope.vo.hasNext()).toBe(true);
        });

        it('should return true in hasNext when location is /projects', function () {
            location.path('/projects');
            expect(scope.vo.hasNext()).toBe(true);
        });

        it('should return true in hasNext when location is /skills', function () {
            location.path('/skills');
            expect(scope.vo.hasNext()).toBe(true);
        });

        it('should return true in hasNext when location is /todo', function () {
            location.path('/todo');
            expect(scope.vo.hasNext()).toBe(true);
        });
    });

    describe('function: openPrevious', function () {

        it('should attach openPrevious function to vo', function () {
            expect(scope.vo.openPrevious).toBeDefined();
            expect(typeof scope.vo.openPrevious).toBe('function');
        });
        
        it('should change location path to /todo when location is /allInOnePage', function () {
            location.path('/allInOnePage');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/todo');
        });
        
        it('should change location path to /skills when location is /todo', function () {
            location.path('/todo');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/skills');
        });
        
        it('should change location path to /projects when location is /skills', function () {
            location.path('/skills');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/projects');
        });
        
        it('should change location path to /experiences when location is /projects', function () {
            location.path('/projects');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/experiences');
        });
        
        it('should change location path to /education when location is /experiences', function () {
            location.path('/experiences');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/education');
        });
        
        it('should change location path to /personalDetails when location is /education', function () {
            location.path('/education');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/personalDetails');
        });
        
        it('should not change location path when location is /personalDetails', function () {
            location.path('/personalDetails');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/personalDetails');
        });
        
        it('should not change location path when location is not supported', function () {
            location.path('/someStrangeLocation');
            scope.vo.openPrevious();
            expect(location.path()).toBe('/someStrangeLocation');
        });
    });

    describe('function: openNext', function () {

        it('should attach openNext function to vo', function () {
            expect(scope.vo.openNext).toBeDefined();
            expect(typeof scope.vo.openNext).toBe('function');
        });
        
        it('should change location path to /education when location is /personalDetails', function () {
            location.path('/personalDetails');
            scope.vo.openNext();
            expect(location.path()).toBe('/education');
        });
        
        it('should change location path to /experiences when location is /education', function () {
            location.path('/education');
            scope.vo.openNext();
            expect(location.path()).toBe('/experiences');
        });
        
        it('should change location path to /projects when location is /experiences', function () {
            location.path('/experiences');
            scope.vo.openNext();
            expect(location.path()).toBe('/projects');
        });
        
        it('should change location path to /skills when location is /projects', function () {
            location.path('/projects');
            scope.vo.openNext();
            expect(location.path()).toBe('/skills');
        });
        
        it('should change location path to /todo when location is /skills', function () {
            location.path('/skills');
            scope.vo.openNext();
            expect(location.path()).toBe('/todo');
        });
        
        it('should change location path to /allInOnePage when location is /todo', function () {
            location.path('/todo');
            scope.vo.openNext();
            expect(location.path()).toBe('/allInOnePage');
        });
        
        it('should not change location path when location is /allInOnePage', function () {
            location.path('/allInOnePage');
            scope.vo.openNext();
            expect(location.path()).toBe('/allInOnePage');
        });
        
        it('should not change location path when location is not supported', function () {
            location.path('/someStrangeLocation');
            scope.vo.openNext();
            expect(location.path()).toBe('/someStrangeLocation');
        });
    });
});
