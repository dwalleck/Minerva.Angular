(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('ApplicationErrorsListCtrl',
                     [ApplicationErrorsListCtrl])

    function ApplicationErrorsListCtrl() {
        var vm = this;

        vm.errors = [{
            message: "Error during ComputeManager._poll_bandwidth_usage: 'BandwidthUsage' object has no attribute 'instance_uuid' ",
            log: "nova_compute",
            count: 16310
        }, {
            message: "Error updating resources for node %s: 'NoneType' object has no attribute 'get'",
            log: "nova_compute",
            count: 8901 
        }, {
            message: "AMQP server <ip>:5672 closed the connection. Check login credentials: Socket closed",
            log: "nova_compute",
            count: 1318
        }, {
            message: "_FOR_DIVISION_BY_ZERO,TRADITIONAL,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION _check_effective_sql_mode /opt/rackstack/neutron/neutron.180.5/neutron/lib/python2.7/site-packages/oslo_db/sqlalchemy/session.py:513 ",
            log: "neutron",
            count: 1005
        }, {
            message: "The call to version timed out. args={'dom_id': <dom_id>, 'id': '<uuid>', 'timeout': '60', 'host_uuid': '<uuid>'} ",
            log: "nova_compute",
            count: 665
        }];
    }
}());