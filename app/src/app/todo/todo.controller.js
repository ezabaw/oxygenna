'use strict';

/**
 * @ngdoc function
 * @name TodoController
 * @module triAngularTodo
 * @kind function
 *
 * @description
 *
 * Handles the todo app model and controls
 */
angular.module('triAngularTodo')
.controller('TodoController', function ($scope, $state, $mdDialog) {    
    
    $scope.messages = [
	    {description: "Material Design", priority: "high", selected: true},	    
	    {description: "Deploy to Server", priority: "low", selected: true},
	    {description: "Cloud Sync", priority: "medium", selected: false},
	    {description: "Test Configurations", priority: "low", selected: false},
	];

	$scope.orderTasks = function(task) {
		switch(task.priority){
			case 'high':
				return 1;
			case 'medium':
				return 2;
			case 'low':
				return 3;
			default: // no priority set
				return 4;
		}
	};

	$scope.addTodo = function( ev ){			
	   $mdDialog.show({
            templateUrl: 'app/todo/add-todo-dialog.tmpl.html',
            targetEvent: ev,
            controller: 'DialogController'
        })
        .then(function(answer) {                           
            $scope.messages.push(answer);      
        });
	}; 
});