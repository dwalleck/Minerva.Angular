(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('InstanceFaultsListCtrl',
                     ['instanceFaultReportsResource',
                         InstanceFaultsListCtrl])

    function InstanceFaultsListCtrl(instanceFaultReportsResource) {
        var vm = this;

        instanceFaultReportsResource.query(function (data) {
            vm.faults = data;
        });

        vm.faultsByHost = [{
            name: "c-10-13-139-8",
            count: 3
        }, {
            name: "c-10-13-135-242",
            count: 3
        }, {
            name: "c-10-13-134-222",
            count: 3
        }, {
            name: "c-10-13-138-206",
            count: 2
        }, {
            name: "c-10-13-136-52",
            count: 2
        }, {
            name: "c-10-13-135-143",
            count: 2
        }];

    }
}());