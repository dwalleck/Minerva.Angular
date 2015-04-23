(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("errorReportsResource",
                ["$resource",
                 "appSettings",
                    errorReportsResource])

    function errorReportsResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/errorReports/:id");
    }
}());