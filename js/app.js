// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'ui-rangeSlider',
    'navigationservice'
]);


firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

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
	.state('wishlist', {
		url: "/wishlist",
		templateUrl: "views/template.html",
		controller: 'WishlistCtrl'
	})	
		.state('newarrivals', {
		url: "/newarrivals",
		templateUrl: "views/template.html",
		controller: 'NewarrivalsCtrl'
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
		.state('contact', {
			url: "/contact",
			templateUrl: "views/template.html",
			controller: 'ContactCtrl'
		})

	.state('account', {
			url: "/account",
			templateUrl: "views/template.html",
			controller: 'AccountCtrl'
		})
	.state('exclusive', {
			url: "/exclusive",
			templateUrl: "views/template.html",
			controller: 'ExclusiveCtrl'
		})
		.state('distribution', {
			url: "/distribution",
			templateUrl: "views/template.html",
			controller: 'DistributionCtrl'
		}) 
	
//	.state('brandhover', {
//			url: "/brandhover",
//			templateUrl: "views/template.html",
//			controller: 'BrandhoverCtrl'
//		})
//	
		.state('cart', {
			url: "/cart",
			templateUrl: "views/template.html",
			controller: 'CartCtrl'
		})
	
		.state('searchresult', {
			url: "/searchresult",
			templateUrl: "views/template.html",
			controller: 'SearchresultCtrl'
		})
		.state('deals', {
			url: "/deals",
			templateUrl: "views/template.html",  
			controller: 'DealsCtrl'
		})

		.state('about', {
			url: "/about",
			templateUrl: "views/template.html",
			controller: 'AboutCtrl'
		})
	
		.state('checkout', {
			url: "/checkout",
			templateUrl: "views/template.html",
			controller: 'CheckoutCtrl'
		})
	
	.state('storelocator', {
			url: "/storelocator",
			templateUrl: "views/template.html",
			controller: 'StorelocatorCtrl'
		})
		.state('brand', {
			url: "/brand",
			templateUrl: "views/template.html",
			controller: 'BrandsCtrl'
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


firstapp.directive('img', function ($compile, $parse) {
	return {
		restrict: 'E',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			if (!attrs.noloading) {
				$element.after("<img src='img/loading.gif' class='loading' />");
				var $loading = $element.next(".loading");
				$element.load(function () {
					$loading.remove();
					$(this).addClass("doneLoading");
				});
			} else {
				$($element).addClass("doneLoading");
			}
		}
	};
});