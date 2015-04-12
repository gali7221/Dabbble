'use strict'

var app = angular.module('dabbble', ['dabbble.controllers', 'dabbble.filters', 'dabbble.services']);

//takes function that works with dependency injection.
//this is how we define which routes go to what controllers.
app.config(function($routeProvider){
	//has a .when method that takes pattern
	$routeProvider
	.when("/shots/:id",{controller:"ShotsCtrl", templateUrl:"partials/shot.html"})
	.when("/:list",{controller:"ShotsListCtrl", templateUrl:"partials/shots_list.html"})
	.otherwise({redirectTo: "/popular"});
})