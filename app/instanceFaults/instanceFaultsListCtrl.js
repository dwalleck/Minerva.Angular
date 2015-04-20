(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('InstanceFaultsListCtrl',
                     [InstanceFaultsListCtrl])

    function InstanceFaultsListCtrl() {
        var vm = this;

        vm.faults = [{
            name: "['HANDLE_INVALID', 'VM', 'OpaqueRef<uuid>]",
            count: 14
        }, {
            name: "No valid host was found. Exceeded max scheduling attempts 3 for instance<uuid> Last exception: ['Traceback (most recent call last):\n', ' File \"/opt/rackstack/rackstack.228.11/nova/lib/python2.7/site-packages/nova/compute/\"",
            count: 7
        }, {
            name: "Migration pre-check error: Migrate Receive failed",
            count: 2
        }, {
            name: "Connection to neutron failed: ('Connection aborted.', BadStatusLine(\"''\",)) ",
            count: 2
        }, {
            name: "Instance<uuid>cannot be rescued: Driver Error: ['HANDLE_INVALID', 'VM', 'OpaqueRef<uuid>]",
            count: 1
        }, {
            name: "Unexpected task state: expecting ['rebuilding'] but the actual state is deleting",
            count: 1
        }];

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