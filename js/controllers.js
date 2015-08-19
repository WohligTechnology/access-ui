angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'valdr', 'angular-flexslider', 'ngSanitize' , 'ui-rangeSlider'])

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


.controller('ProductCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

  $scope.demo2 = {
            range: {
                min: 0,
                max: 10050
            },
            minPrice: 0,
            maxPrice: 10050
        };
         $scope.brands = [{
            name: "Apple"


        }, {
            name: "nokia"


        }, {
            name: "samsung"

        }, {
            name: "mi"

        }, {
            name: "micromax"

        }];
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
});