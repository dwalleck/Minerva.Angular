function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "app/index.html",
            data: { pageTitle: 'index' }
        })
}
angular
    .module('minerva')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });