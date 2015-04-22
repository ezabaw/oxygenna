'use strict';

/**
 * @ngdoc module
 * @name triAngularElements
 * @description
 *
 * The `triAngularElements` module adds the example elements pages & menus
 */
angular.module('triAngularElements', [])
.config(function ($translatePartialLoaderProvider, $stateProvider) {
    $translatePartialLoaderProvider.addPart('app/elements');

    $stateProvider
    .state('private.admin.toolbar.default.buttons', {
        url: '/elements/buttons',
        templateUrl: 'app/elements/buttons.tmpl.html',
        controller: 'ButtonsController'
    })
    .state('private.admin.toolbar.default.icons', {
        url: '/elements/icons',
        templateUrl: 'app/elements/icons.tmpl.html',
        controller: 'IconsController',
        resolve: {
            icons: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'elements/icons',
                });
            }
        }
    })
    .state('private.admin.toolbar.default.checkboxes', {
        url: '/elements/checkboxes',
        templateUrl: 'app/elements/checkboxes.tmpl.html'
    })
    .state('private.admin.toolbar.default.radios', {
        url: '/elements/radios',
        templateUrl: 'app/elements/radios.tmpl.html'
    })
    .state('private.admin.toolbar.default.toolbars', {
        url: '/elements/toolbars',
        templateUrl: 'app/elements/toolbars.tmpl.html'
    })
    .state('private.admin.toolbar.default.tooltips', {
        url: '/elements/tooltips',
        templateUrl: 'app/elements/tooltips.tmpl.html'
    })
    .state('private.admin.toolbar.default.whiteframes', {
        url: '/elements/whiteframes',
        templateUrl: 'app/elements/whiteframes.tmpl.html'
    })
    .state('private.admin.toolbar.default.sliders', {
        url: '/elements/sliders',
        templateUrl: 'app/elements/sliders.tmpl.html'
    })
    .state('private.admin.toolbar.default.toasts', {
        url: '/elements/toasts',
        templateUrl: 'app/elements/toasts.tmpl.html',
        controller: 'ToastsController'
    })
    .state('private.admin.toolbar.default.progress', {
        url: '/elements/progress',
        templateUrl: 'app/elements/progress.tmpl.html',
        controller: 'ProgressController'
    })
    .state('private.admin.toolbar.default.switches', {
        url: '/elements/switches',
        templateUrl: 'app/elements/switches.tmpl.html',
        controller: 'SwitchesController'
    })
    .state('private.admin.toolbar.default.dialogs', {
        url: '/elements/dialogs',
        templateUrl: 'app/elements/dialogs.tmpl.html',
        controller: 'DialogsController'
    })
    .state('private.admin.toolbar.default.tabs', {
        url: '/elements/tabs',
        templateUrl: 'app/elements/tabs.tmpl.html',
        controller: 'TabsController'
    })
    .state('private.admin.toolbar.default.sidebars', {
        url: '/elements/sidebars',
        templateUrl: 'app/elements/sidebars.tmpl.html',
        controller: 'SidebarsController'
    })
    .state('private.admin.toolbar.default.grids', {
        url: '/elements/grids',
        templateUrl: 'app/elements/grids.tmpl.html',
        controller: 'GridsController'
    })
    .state('private.admin.toolbar.default.selects', {
        url: '/elements/selects',
        templateUrl: 'app/elements/selects.tmpl.html'
    })
    .state('private.admin.toolbar.default.lists', {
        url: '/elements/lists',
        templateUrl: 'app/elements/lists.tmpl.html',
        controller: 'ListsController',
        resolve: {
            emails: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'email/inbox',
                });
            },
        }
    })
    .state('private.admin.toolbar.default.chips', {
        url: '/elements/chips',
        templateUrl: 'app/elements/chips.tmpl.html',
        controller: 'ChipsController',
        resolve: {
            contacts: function($http, API_CONFIG) {
                return $http({
                    method: 'GET',
                    url: API_CONFIG.url + 'email/contacts',
                });
            }
        }
    })
    .state('private.admin.toolbar.default.cards', {
        url: '/elements/cards',
        templateUrl: 'app/elements/cards.tmpl.html'
    });
})
.run(function(SideMenu) {
    SideMenu.addMenu({
        name: 'ELEMENTS.MENU.ELEMENTS',
        icon: 'icon-school',
        type: 'dropdown',
        priority: 3.1,
        children: [{
            name: 'ELEMENTS.MENU.BUTTONS',
            type: 'link',
            url: 'elements/buttons'
        },{
            name: 'ELEMENTS.MENU.CARDS',
            type: 'link',
            url: 'elements/cards'
        },{
            name: 'ELEMENTS.MENU.CHECKBOXES',
            type: 'link',
            url: 'elements/checkboxes'
        },{
            name: 'ELEMENTS.MENU.CHIPS',
            type: 'link',
            url: 'elements/chips'
        },{
            name: 'ELEMENTS.MENU.DIALOGS',
            type: 'link',
            url: 'elements/dialogs'
        },{
            name: 'ELEMENTS.MENU.GRIDS',
            type: 'link',
            url: 'elements/grids'
        },{
            name: 'ELEMENTS.MENU.ICONS',
            type: 'link',
            url: 'elements/icons'
        },{
            name: 'ELEMENTS.MENU.LISTS',
            type: 'link',
            url: 'elements/lists'
        },{
            name: 'ELEMENTS.MENU.PROGRESS',
            type: 'link',
            url: 'elements/progress'
        },{
            name: 'ELEMENTS.MENU.RADIOS',
            type: 'link',
            url: 'elements/radios'
        },{
            name: 'ELEMENTS.MENU.SELECTS',
            type: 'link',
            url: 'elements/selects'
        },{
            name: 'ELEMENTS.MENU.SIDEBARS',
            type: 'link',
            url: 'elements/sidebars'
        },{
            name: 'ELEMENTS.MENU.SLIDERS',
            type: 'link',
            url: 'elements/sliders'
        },{
            name: 'ELEMENTS.MENU.SWITCHES',
            type: 'link',
            url: 'elements/switches'
        },{
            name: 'ELEMENTS.MENU.TABS',
            type: 'link',
            url: 'elements/tabs'
        },{
            name: 'ELEMENTS.MENU.TOASTS',
            type: 'link',
            url: 'elements/toasts'
        },{
            name: 'ELEMENTS.MENU.TOOLBARS',
            type: 'link',
            url: 'elements/toolbars'
        },{
            name: 'ELEMENTS.MENU.TOOLTIPS',
            type: 'link',
            url: 'elements/tooltips'
        },{
            name: 'ELEMENTS.MENU.WHITEFRAMES',
            type: 'link',
            url: 'elements/whiteframes'
        }]
    });
});

