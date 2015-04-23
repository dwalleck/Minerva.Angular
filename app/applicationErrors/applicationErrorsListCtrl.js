(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('ApplicationErrorsListCtrl',
                     ['errorReportsResource',
                         ApplicationErrorsListCtrl])

    function ApplicationErrorsListCtrl(errorReportsResource) {
        var vm = this;

        errorReportsResource.query(function (data) {
            vm.errors = data;
        });
    }
}());