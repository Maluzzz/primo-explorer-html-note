(function() {
    "use strict"
    'use strict'


    var app = angular.module('viewCustom', ['angularLoad'])

    /**Define compomponent prmLocationItemAfter to insert the new content. */
    app.component('prmLocationItemAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'prmLocationItemAfterController',
        template: ` <div ng-bind-html=$ctrl.getQuery() style="
        padding: 20px;
    "></div>`,
    })


    /** Define controller to pick the html code and send to the componet.  */
    app.controller('prmLocationItemAfterController', [function() {
        var vm = this
        let location = vm.parentCtrl.loc.items[0].fullItemFields[2] //Where usually it's locate "Public Note" field 
        vm.parentCtrl.loc.items[0].fullItemFields[2] = '' //Remove the content that it's not ok

        vm.getQuery = getQuery;
        location = location.replace('Opciones:', '') //Removing Bad naming
        location = location.replace('Nota:', '')
        location = location.replace('Public Note:', '') //English Case
        function getQuery() {
            return location //Return the correct string
        }
    }]);

})();