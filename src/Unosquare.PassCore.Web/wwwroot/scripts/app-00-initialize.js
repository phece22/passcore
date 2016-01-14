﻿(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'vcRecaptcha']);

    app.filter('unsafe', ['$sce', function($sce) { return $sce.trustAsHtml; }]);
})();