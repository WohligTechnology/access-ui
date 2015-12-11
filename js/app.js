// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'ui-rangeSlider',
    'navigationservice'
]);


firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

        .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('productdetail', {
            url: "/productdetail/:id",
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
        url: "/product/:parent/:category/:brand",
        templateUrl: "views/template.html",
        controller: 'ProductCtrl'
    })


    .state('termscondition', {
        url: "/termscondition",
        templateUrl: "views/template.html",
        controller: 'TermsConditionCtrl'
    })

    .state('category', {
            url: "/category",
            templateUrl: "views/template.html",
            controller: 'CategoryCtrl'
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

    //  .state('brandhover', {
    //          url: "/brandhover",
    //          templateUrl: "views/template.html",
    //          controller: 'BrandhoverCtrl'
    //      })
    //  
    .state('cart', {
            url: "/cart",
            templateUrl: "views/template.html",
            controller: 'CartCtrl'
        })
        .state('popup', {
            url: "/popupwish",
            templateUrl: "views/template.html",
            controller: 'AddwishCtrl'
        })

    .state('searchresult', {
            url: "/searchresult/:search",
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

    .state('privacy', {
            url: "/privacy",
            templateUrl: "views/template.html",
            controller: 'PrivacyCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: "views/template.html",
            controller: 'FaqCtrl'
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

    .state('resetpassword/:id', {
            url: "/resetpassword",
            templateUrl: "views/template.html",
            controller: 'ResetpasswordCtrl'
        })
        .state('forgotpassword', {
            url: "/forgotpassword",
            templateUrl: "views/template.html",
            controller: 'forgotpasswordCtrl'
        })
        .state('brandproducts', {
            url: "/brandproducts/:brand",
            templateUrl: "views/template.html",
            controller: 'brandProductsCtrl'
        })

    $urlRouterProvider.otherwise("/home");
    //    $locationProvider.html5Mode(true);
    //    $locationProvider.hashPrefix('!');

});

firstapp.filter('serverimage', function() {
    return function(image) {
        if (image)
            return adminimage + image;
        else
            return "img/noimage.png";
    };
})

var formvalidation = function(allvalidation) {
    var isvalid2 = true;
    for (var i = 0; i < allvalidation.length; i++) {
        console.log("checking");
        console.log(allvalidation[i].field);
        if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
            allvalidation[i].validation = "ng-invalid";
            isvalid2 = false;
        }
    }
    return isvalid2;
};

var clearvalidation = function(allvalidation) {
    console.log(allvalidation);
    for (var i = 0; i < allvalidation.length; i++) {
        allvalidation[i].validation = "";
    }
};

firstapp.directive('myloading', function() {
    return {
        restrict: 'E',
        scope: {
            obj: '='
        },
        template: '<div>Hello, {{obj}}!</div>'
    };
});
//
//firstapp.directive('myloading', function($http) {
//    return {
//        restrict: 'A',
//        scope: {
//            obj: "=",
//        },
//        template: '{{obj1}}',
//
//        controller: function($scope) {
//            
//         $scope.obj1  = $scope.obj;
//
//        }
//    };
//});


firstapp.directive('youtube', function($sce) {
    return {
        restrict: 'A',
        scope: {
            code: '='
        },
        replace: true,
        //        template: '<iframe style="overflow:hidden;width:100%;" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
        template: '<iframe style="overflow:hidden;" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
        link: function(scope) {
            scope.$watch('code', function(newVal) {
                if (newVal) {
                    scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
                }
            });
        }
    };
});

firstapp.filter('cut', function() {
    return function(value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});

firstapp.filter('rawHtml', ['$sce',
    function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }
]);


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive("disableRightClick", function() {
    return {
        restict: 'A',
        link: function(scope, el) {
            el.bind("contextmenu", function(e) {
                e.preventDefault();
            });
        }
    };
});
