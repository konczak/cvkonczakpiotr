'use strict';

describe('Controller: TodoCtrl', function () {

    // load the controller's module
    beforeEach(module('konczakpiotrcvApp'));

    var TodoCtrl,
            scope,
            todos;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        todos = [{title: 'todo'}];
        TodoCtrl = $controller('TodoCtrl', {
            $scope: scope,
            todos : todos
        });
    }));

    it('should attach vo to the scope', function () {
        expect(scope.vo).toBeDefined();
    });

    it('should attach todos to vo', function () {
        expect(scope.vo.todos).toBeDefined();
        expect(scope.vo.todos.length).toEqual(todos.length);
    });
});
