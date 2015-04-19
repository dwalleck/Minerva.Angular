(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('MailgunSettingsListCtrl',
                     MailgunSettingsListCtrl)

    function MailgunSettingsListCtrl($scope) {
        var vm = this;

        /*mailgunSettingsResource.query(function (data) {
            vm.mailgunSettings = data;
        });*/

        vm.mailgunSettings = [
        {
            "name": "test",
            "api_url": "Leaf Rake",
            "api_key": "GDN-0011",
        },
        {
            "name": "test2",
            "api_url": "Garden Cart",
            "api_key": "GDN-0023",
        },
        ];
    }
}());
