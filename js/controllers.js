angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'valdr', 'angular-flexslider', 'ngSanitize'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

//    $scope.slides = [
//        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
//        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
//        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
//        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
//    ];
      $scope.slides = [
        'img/slider/1.jpg',
        'img/slider/2.jpg',
        'img/slider/3.jpg',
        'img/slider/4.jpg'
        
    ];
    
            $scope.products = [{
            image: "img/product/1.png"


        }, {
            image: "img/product/2.png"


        }, {
            image: "img/product/3.png"

        }, {
            image: "img/product/4.png"

        }];
})


.controller('InfiniteCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("infinite");
    $scope.menutitle = NavigationService.makeactive("Infinite Scroll");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    //Infinite scroll
    $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.loadMore = function() {
        var last = $scope.images[$scope.images.length - 1];
        for (var i = 1; i <= 8; i++) {
            $scope.images.push(last + i);
        }
    };
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});