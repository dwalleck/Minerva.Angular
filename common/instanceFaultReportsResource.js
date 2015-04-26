(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("instanceFaultReportsResource",
                ["$resource",
                 "appSettings",
                    instanceFaultReportsResource])

    function instanceFaultReportsResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/instanceFaultReports/:id");
    }
}());