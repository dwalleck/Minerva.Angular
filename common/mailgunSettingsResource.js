(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("mailgunSettingsResource",
                ["$resource",
                 "appSettings",
                    mailgunSettingsResource])

    function mailgunSettingsResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/mailgunSettings/:id");
    }
}());