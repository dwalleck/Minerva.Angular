function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state('index', {
            url: "/index",
            templateUrl: "app/index.html",
            data: { pageTitle: 'index' }
        })
    .state('reports', {
        abstract: true,
        url: "/reports",
        templateUrl: "app/common.html",
    })
    .state('reports.instance_faults', {
        url: "/instance_faults",
        templateUrl: "app/instanceFaults/instanceFaultsListView.html",
        data: { pageTitle: 'Instance Faults' }
    })
    .state('reports.app_errors', {
        url: "/app_errors",
        templateUrl: "views/app-errors.html",
        data: { pageTitle: 'Application Errors' }
    })
    .state('reports.issues', {
        url: "/issues",
        templateUrl: "app/issues/issuesSummaryView.html",
        data: { pageTitle: 'Issues' }
    })
    .state('cafe', {
        abstract: true,
        url: "/cafe",
        templateUrl: "app/common.html",
    })
    .state('cafe.accounts', {
        url: "/accounts",
        templateUrl: "views/accounts.html",
        data: { pageTitle: 'Accounts' }
    })
    .state('cafe.configurations', {
        url: "/configurations",
        templateUrl: "views/configurations.html",
        data: { pageTitle: 'Configurations' }
    })
    .state('cafe.resource_usage', {
        url: "/resource_usage",
        templateUrl: "views/resource-usage.html",
        data: { pageTitle: 'Resource Usage' }
    })
    .state('settings', {
        abstract: true,
        url: "/settings",
        templateUrl: "app/common.html",
    })
    .state('settings.mailgunSettings', {
        url: "/mailgunSettings",
        templateUrl: "app/settings/mailgunSettingsListView.html",
        data: { pageTitle: 'Mailgun Settings' }
    })
}
angular
    .module('minerva')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });