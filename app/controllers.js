/*app.controller('MainCtrl', function($scope) {
	this.projectBoldName = 'App';
	this.projectName = 'Name';
    this.userName = 'Example user';
    this.headerText = 'AngularJS Starter Project';
    this.descriptionText = 'Here you can quickly bootstrap your AngularJS project.';

});*/

(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('MainCtrl',
                     MainCtrl)

    function MainCtrl($scope) {
        var vm = this;

        vm.projectBoldName = 'App';
        vm.projectName = 'Name';
        vm.userName = 'Example user';
        vm.headerText = 'AngularJS Starter Project';
        vm.descriptionText = 'Here you can quickly bootstrap your AngularJS project.';
    }
})();




