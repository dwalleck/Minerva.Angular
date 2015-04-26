(function () {
    "use strict";

    angular
        .module("common.services",
                    ["ngResource"])
    	.constant("appSettings",
        {
            serverPath: "http://10.69.245.64"
        });
}());