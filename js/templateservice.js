var templateservicemod = angular.module('templateservicemod', ['navigationservice']);
templateservicemod.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "Google";
    this.metadesc = "Home";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.headermenu = "views/headermenu.html";
        this.header = "views/header.html";
        this.menu = "views/menu.html";
        this.slider = "views/slider.html";
        this.content = "views/content/content.html";
        this.kart = "views/kart.html";
        this.footermenu = "views/footermenu.html";
        this.footer = "views/footer.html";
    };

    this.changecontent = function (page) {
        this.init();
        var data = this;
        data.content = "views/content/" + page + ".html";
        return data;
    };

    this.init();

});

//templateservicemod.controller('submenuctrl', ['$scope', 'TemplateService','navigationservice', function ($scope, TemplateService, MainJson, $rootScope, NavigationService) {
//    $scope.submenuval = ['views/content/brandhover.html', 'views/content/producthover.html'];
//    $scope.submenu = [];
//    $scope.parent = {};
//    $scope.category = {};
//    var getproductbycategorycallback = function (data, status) {
//        console.log(data);
//    }
//    $scope.getproductbycategory = function (parent, category) {
//        console.log(NavigationService);
////        NavigationService.getproductbycategory(parent, category).success(getproductbycategorycallback);
//    }
//    $scope.showsubmenu = function (data) {
//        console.log(data);
//        $scope.submenu[data] = true;
//    };
//    $scope.hidesubmenu = function (data) {
//        console.log(data);
//        $scope.submenu[data] = false;
//    };
//}]);