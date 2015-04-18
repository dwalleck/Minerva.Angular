function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "app/index.html",
            data: { pageTitle: 'index' }
        })
        .state('pages', {
            abstract: true,
            url: "/pages",
            templateUrl: "app/common.html",
        })
        .state('pages.blank_page', {
            url: "/blank_page",
            templateUrl: "app/blank-page.html",
            data: { pageTitle: 'Blank page' }
        })
         .state('pages.blank_page2', {
            url: "/blank_page2",
            templateUrl: "views/blank-page2.html",
            data: { pageTitle: 'Another blank page' }
        })
}
angular
    .module('minerva')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });