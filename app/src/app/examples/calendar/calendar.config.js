(function() {
    'use strict';

    angular
        .module('app.examples.calendar')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/examples/calendar');

        $stateProvider
        .state('calendar-layout', {
            abstract: true,
            templateUrl: 'app/calendar/layouts/calendar-layout.tmpl.html',
        })

        .state('calendar-layout.default', {
            views: {
                sidebarLeft: {
                    templateUrl: 'components/sidebar-left/sidebar-left.tmpl.html',
                    controller: 'SidebarLeftController'
                },
                toolbar: {
                    templateUrl: 'app/calendar/toolbar.tmpl.html',
                    controller: 'CalendarToolbarController'
                },
                content: {
                    template: '<div flex ui-view layout="column"></div>'
                }
            }
        });

        // Create a state for our seed test page
        $stateProvider
        .state('calendar-layout.default.main', {
            // set the url of this page
            url: '/calendar',
            // set the html template to show on this page
            templateUrl: 'app/calendar/calendar.tmpl.html',
            // set the controller to load for this page
            controller: 'CalendarController'
        });

        triMenuProvider.addMenu({
            // give the menu a name to show (should be translatable and in the il8n folder json)
            name: 'MENU.CALENDAR.CALENDAR',
            // point this menu to the state we created in the $stateProvider above
            state: 'calendar-layout.default.main',
            // set the menu type to a link
            type: 'link',
            // set an icon for this menu
            icon: 'icon-today',
            // set a proirity for this menu item, menu is sorted by priority
            priority: 2.3
        });
    }
})();