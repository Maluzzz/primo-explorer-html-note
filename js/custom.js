(function() {
    "use strict"
    'use strict'
    var items = 0 //More than a item
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
        var itemSize = vm.parentCtrl.loc.items.length - 1
        if (itemSize < items) {
            items = 0
        }
        let location = vm.parentCtrl.loc.items[items].fullItemFields[2] //Where usually it's locate "Public Note" field 
        if (!location) { location = '<p></p>' }
        //Remove the content that it's not ok
        var isNote = location.includes('Nota') //Only remove the field if it's a note
        if (isNote) {
            vm.parentCtrl.loc.items[items].fullItemFields[2] = ''
            location = location.replace('Opciones:', '') //Removing Bad naming
            location = location.replace('Nota:', '')
            location = location.replace('Public Note:', '') //English Case
        }
        items++
        vm.getQuery = getQuery;

        function getQuery() {
            return location //Return the correct string
        }
    }]);

})();
