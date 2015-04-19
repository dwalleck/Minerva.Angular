(function () {
    "use strict";

    angular
        .module('minerva')
        .controller('MailgunSettingsListCtrl',
                     ['mailgunSettingsResource',
                         MailgunSettingsListCtrl])

    function MailgunSettingsListCtrl(mailgunSettingsResource) {
        var vm = this;

        mailgunSettingsResource.query(function (data) {
            vm.mailgunSettings = data;
        });

    }
}());
