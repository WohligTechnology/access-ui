// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'ui-rangeSlider',
    'navigationservice'
]);


firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
    
    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('productdetail', {
        url: "/productdetail",
        templateUrl: "views/template.html",
        controller: 'ProductdetailCtrl'
    })

    .state('product', {
        url: "/product",
        templateUrl: "views/template.html",
        controller: 'ProductCtrl'
    }) 
		 .state('orderhistory', {
        url: "/orderhistory",
        templateUrl: "views/template.html",
        controller: 'OrderhistoryCtrl'
    }) 
        .state('cart', {
        url: "/cart",
        templateUrl: "views/template.html",
        controller: 'CartCtrl'
    })
  .state('login', {
        url: "/login",
        templateUrl: "views/template.html",
        controller: 'LoginCtrl'
    })  
        .state('forgotpassword', {
        url: "/forgotpassword",
        templateUrl: "views/template.html",
        controller: 'forgotpasswordCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});

