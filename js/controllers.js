var globalfunction = {};
var globalvariable = {};
var myfunction = '';
var msg = "my al popup";
var navbarjson = [{
    title: "Brands",
    href: "brand",
    class: ""
}, {
    title: "Product",
    href: "category",
    class: ""
}, {
    title: "New Arrivals",
    href: "newarrivals",
    class: ""
}, {
    title: "Deals",
    href: "deals",
    class: ""
}, {
    title: "Distribution",
    href: "distribution",
    class: ""
}, {
    title: "About Us",
    href: "about",
    class: ""
}];


angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'angular-flexslider', 'ngSanitize', 'ui-rangeSlider'])

.controller('AppCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    $scope.demo = "demo testing";
    myfunction = function() {
        NavigationService.gettotalcart(function(data) {
            $scope.totalcart = data;
        });
        NavigationService.totalcart(function(data) {
            $scope.amount = data;
        });
    }

    $scope.expresscheckout = function(total) {
        if (total != 0) {
            $location.url("/checkout");
        }
    }
    myfunction();
})

.controller('CategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("category");
    $scope.menutitle = NavigationService.makeactive("category");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.subscribe = {};

    NavigationService.getallcategory(function(data) {
        console.log(data);
        $scope.products = data;
    });

    $scope.categorydetail = function(id) {
        $location.url("/product/" + id + "/0/0");
    }

    $scope.demo2 = {
        range: {
            min: 0,
            max: 10050
        },
        minPrice: 0,
        maxPrice: 10050
    };
})

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.subscribe = {};
    $scope.msg = "";

    $scope.usersubscribtion = function() {
        $scope.allvalidation = [{
            field: $scope.subscribe.email,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.getsubscribe($scope.subscribe.email, function(data) {
                console.log(data);
                if (data == "true") {
                    $scope.msg = "Thank you for your subscribtion . ";
                } else {
                    $scope.msg = "Already subscribed";
                }
            });
        } else {
            $scope.msg = "Enter valid email id .";
        }
    }

    $scope.homeProducts = [];
    NavigationService.getHomeProducts(function(data) {
        if (data) {
            _.each(data, function(n) {
                if (n.firstsaleprice) {
                    if (n.specialpricefrom == "0000-00-00" && n.specialpriceto == "0000-00-00") {
                        n.showSalePrice = true;
                        console.log("in if");
                    } else if (n.specialpricefrom != "0000-00-00" && n.specialpriceto != "0000-00-00") {
                        var birth = new Date(n.specialpricefrom);
                        var death = new Date(n.specialpriceto);
                        var curr = new Date();
                        var diff = curr.getTime() - birth.getTime();
                        var diff2 = curr.getTime() - death.getTime();
                        var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                        var end = Math.floor(diff2 / (1000 * 60 * 60 * 24));
                        if (start >= 0 && end <= 0) {
                            n.showSalePrice = true;
                        }
                        console.log("in 1 else if");
                    } else if (n.specialpricefrom != "0000-00-00") {
                        var birth = new Date(n.specialpricefrom);
                        var curr = new Date();
                        var diff = curr.getTime() - birth.getTime();
                        var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                        if (start >= 0) {
                            n.showSalePrice = true;
                        }
                        console.log("in 2 else if");
                    } else if (n.specialpricefrom == "0000-00-00") {
                        n.showSalePrice = true;
                        console.log("in 3 else if");
                    }
                    console.log("Show Sale Price = " + n.showSalePrice);
                }
                $scope.homeProducts.push(n);
            });
        }
    });

    NavigationService.getHomeSlider(function(data) {
        if (data) {
            $scope.slides = data;
            console.log(data);
        }
    });

    $scope.goToProductDetail = function(id) {
        $location.url("/productdetail/" + id);
    }

    //    $scope.slides = [
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    //        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    //    ];
    // $scope.slides = [
    //     'img/slider/1.jpg',
    //     'img/slider/2.jpg',
    //     'img/slider/3.jpg',
    //     'img/slider/4.jpg'

    // ];


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


.controller('ProductCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $location, $timeout) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.pageno = 1;
    var lastpage = 0;
    $scope.price = {};
    $scope.price.minPrice = 0;
    $scope.price.maxPrice = 100;

    $scope.products = [];
    $scope.showfilter = [];
    $scope.dataload = "Loading ...";
    $scope.filters = {};
    $scope.filters.category = "";
    $scope.filters.color = "";
    $scope.filters.type = "";
    $scope.filters.material = "";
    $scope.filters.finish = "";
    $scope.filters.compatibledevice = "";
    $scope.filters.compatiblewith = "";
    $scope.filters.brand = "";
    $scope.filters.pricemin = "";
    $scope.filters.pricemax = "";
    $scope.filters.microphone = "";
    $scope.filters.size = "";
    $scope.filters.clength = "";
    $scope.filters.voltage = "";
    $scope.filters.capacity = "";

    $scope.colorfilter = [];

    $scope.getFilterResults = function() {
        $scope.pageno = 1;
        $scope.products = [];
        NavigationService.getproductbycategory(1, $scope.parent, $scope.filters, getproductbybrandcallback);
    }

    $scope.alignFilter = function(str) {
        $scope.filters[str] = "";
        var objsend = $scope.showfilter[str];
        var objfil = $scope.filters[str];
        console.log(objsend);
        _.each(objsend, function(n) {
            if (n.status) {
                objfil += n[str] + ",";
            }
        });
        objfil = objfil.substr(0, objfil.length - 1);
        $scope.filters[str] = objfil;
        console.log($scope.filters[str]);
        $scope.getFilterResults();
    }

    $scope.alignFilterId = function(str) {
        $scope.filters[str] = "";
        var objsend = $scope.showfilter[str];
        var objfil = $scope.filters[str];
        console.log(objsend);
        _.each(objsend, function(n) {
            if (n.status) {
                objfil += n.id + ",";
            }
        });
        objfil = objfil.substr(0, objfil.length - 1);
        $scope.filters[str] = objfil;
        console.log(objfil);
        $scope.getFilterResults();
    }

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 1) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }

    $scope.addtowishlist = function(product) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(product.id, function(data, status) {
                console.log(data);
                if (data == "true") {
                    product.fav = "fav";
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                } else if (data == "0") {
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                } else {
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                }
            });
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true,
                controller: 'ProductCtrl'
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }


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

    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [{
        stateOn: 'glyphicon-ok-sign',
        stateOff: 'glyphicon-ok-circle'
    }, {
        stateOn: 'glyphicon-star',
        stateOff: 'glyphicon-star-empty'
    }, {
        stateOn: 'glyphicon-heart',
        stateOff: 'glyphicon-ban-circle'
    }, {
        stateOn: 'glyphicon-heart'
    }, {
        stateOff: 'glyphicon-off'
    }];

    $scope.$watch('rate', function(val) {

            function sucess(data) {

                console.log(data);

            };

            function error(response) {

                console.log(response)

                alert("Can't post " + response.data + " Error:" + response.status);

            }



            if (val) {

                var data = {
                    rating: val,
                    user: "userId" // I'm not sure where is your userId

                }

                $http.post("yourUrl", data).then(sucess, error);


            }
        })
        // PRODUCTS SELECTED FROM CATEGORY
    var getproductbycategorycallback = function(data, status) {
        console.log(data.queryresult);
        $scope.products = data.queryresult;
    }
    $scope.parent = $stateParams.parent;
    $scope.category = $stateParams.category;

    //GO TO PRODUCT DETAIL
    $scope.getproductdetails = function(productid) {
        $location.url("/productdetail/" + productid);
    }

    var getproductbybrandcallback = function(data, status) {
        console.log(data);
        _.each(data.data.queryresult, function(n) {
            if (n.isfavid) {
                n.fav = "fav";
            }
            if (n.firstsaleprice) {
                if (n.specialpricefrom == "0000-00-00" && n.specialpriceto == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in if");
                } else if (n.specialpricefrom != "0000-00-00" && n.specialpriceto != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var death = new Date(n.specialpriceto);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var diff2 = curr.getTime() - death.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    var end = Math.floor(diff2 / (1000 * 60 * 60 * 24));
                    if (start >= 0 && end <= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 1 else if");
                } else if (n.specialpricefrom != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    if (start >= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 2 else if");
                } else if (n.specialpricefrom == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in 3 else if");
                }
                console.log("Show Sale Price = " + n.showSalePrice);
                if (n.showSalePrice == true) {
                    n.discountinper = Math.floor((1 - (parseFloat(n.firstsaleprice) / parseFloat(n.price)))*100);
                }
            }
            $scope.products.push(n);
        });
        $scope.products = _.uniq($scope.products);
        if ($scope.products == "") {
            $scope.dataload = "No data found";
        }
        lastpage = data.data.lastpage;

        if (data.filter) {
            if ($scope.filters.category == "" && data.filter.category) {
                $scope.showfilter.category = data.filter.category;
            }
            if ($scope.filters.color == "" && data.filter.color) {
                $scope.showfilter.color = data.filter.color;
            }
            if ($scope.filters.type == "" && data.filter.type) {
                $scope.showfilter.type = data.filter.type;
            }
            if ($scope.filters.material === "" && data.filter.material) {
                $scope.showfilter.material = data.filter.material;
            }
            if ($scope.filters.finish === "" && data.filter.finish) {
                $scope.showfilter.finish = data.filter.finish;
            }
            var arr = [];
            if ($scope.filters.compatibledevice === "" && data.filter.compatibledevice) {
                if (data.filter.compatibledevice.length > 1) {

                    _.each(data.filter.compatibledevice, function(n) {
                        n.compatibledevice = n.compatibledevice.split(",");
                        _.each(n.compatibledevice, function(m) {
                            arr.push({
                                "compatibledevice": _.trim(m)
                            });
                        });
                    });
                    arr = _.uniqBy(arr, 'compatibledevice');
                    $scope.showfilter.compatibledevice = arr;
                }
            }
            var arr2 = [];
            if ($scope.filters.compatiblewith === "" && data.filter.compatiblewith) {

                if (data.filter.compatiblewith.length > 1) {
                    _.each(data.filter.compatiblewith, function(n) {
                        n.compatiblewith = n.compatiblewith.split(",");
                        _.each(n.compatiblewith, function(m) {
                            arr2.push({
                                "compatiblewith": _.trim(m)
                            });
                        });
                    });
                    arr2 = _.uniqBy(arr2, 'compatiblewith');
                    $scope.showfilter.compatiblewith = arr2;
                }
            }
            if ($scope.filters.brand === "" && data.filter.brand) {
                $scope.showfilter.brand = data.filter.brand;
            }
            if ($scope.filters.microphone === "" && data.filter.microphone) {
                $scope.showfilter.microphone = data.filter.microphone;
            }
            if ($scope.filters.size === "" && data.filter.size) {
                $scope.showfilter.size = data.filter.size;
            }
            if ($scope.filters.clength === "" && data.filter.clength) {
                $scope.showfilter.clength = data.filter.clength;
            }
            if ($scope.filters.voltage === "" && data.filter.voltage) {
                $scope.showfilter.voltage = data.filter.voltage;
            }
            if ($scope.filters.capacity === "" && data.filter.capacity) {
                $scope.showfilter.capacity = data.filter.capacity;
            }
            if (data.filter.price && data.filter.price.min) {
                $scope.filters.pricemin = data.filter.price.min;
            }
            if (data.filter.price && data.filter.price.max) {
                $scope.filters.pricemax = data.filter.price.max;
            }
            console.log($scope.showfilter);
        }
    }

    $scope.brandid = $stateParams.brand;

    $scope.addMoreItems = function() {
        // console.log("lastpage=" + lastpage);
        // console.log("pageno=" + $scope.pageno);
        if ($scope.pageno <= lastpage) {
            ++$scope.pageno;
            if ($stateParams.brand != 0) {
                NavigationService.getproductbybrand($scope.pageno, $stateParams.brand, $scope.filters, getproductbybrandcallback);
            } else if ($stateParams.parent != 0) {
                NavigationService.getproductbycategory($scope.pageno, $scope.parent, $scope.filters, getproductbybrandcallback);
            } else {
                NavigationService.getallproduct($scope.pageno, getproductbybrandcallback);
            }
        }
    }

    // $scope.addMoreItems();

    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true,
                controller: 'ProductCtrl'
            });
            $timeout(function() {
                    xyz.close();
                }, 3000)
                //          $location.url("/cart");
            myfunction();
        });
    }

    $scope.clearFilters = function() {
        NavigationService.getFilters($stateParams.parent, $stateParams.brand, function(data) {
            if (data) {
                $scope.showfilter = data;
                if (data.compatibledevice && data.compatibledevice.length > 0) {
                    var arr = [];
                    _.each(data.compatibledevice, function(n) {
                        n.compatibledevice = n.compatibledevice.split(",");
                        _.each(n.compatibledevice, function(m) {
                            arr.push({
                                "compatibledevice": m
                            });
                        })
                    })
                    data.compatibledevice = arr;
                }
                if (data.compatiblewith && data.compatiblewith.length > 0) {
                    var arr = [];
                    _.each(data.compatiblewith, function(n) {
                        n.compatiblewith = n.compatiblewith.split(",");
                        _.each(n.compatiblewith, function(m) {
                            arr.push({
                                "compatiblewith": m
                            });
                        })
                    })
                    data.compatiblewith = arr;
                }
                $scope.filters.pricemin = data.price.min;
                $scope.filters.pricemax = data.price.max;
                $scope.pageno = 1;
                $scope.products = [];
                $scope.filters = {};
                $scope.filters.category = "";
                $scope.filters.color = "";
                $scope.filters.type = "";
                $scope.filters.material = "";
                $scope.filters.finish = "";
                $scope.filters.compatibledevice = "";
                $scope.filters.compatiblewith = "";
                $scope.filters.brand = "";
                $scope.filters.pricemin = "";
                $scope.filters.pricemax = "";
                $scope.filters.microphone = "";
                $scope.filters.size = "";
                $scope.filters.clength = "";
                $scope.filters.voltage = "";
                $scope.filters.capacity = "";

                if ($stateParams.brand != 0) {
                    NavigationService.getproductbybrand(1, $stateParams.brand, $scope.filters, getproductbybrandcallback);
                } else if ($stateParams.parent != 0) {
                    NavigationService.getproductbycategory(1, $scope.parent, $scope.filters, getproductbybrandcallback);
                } else {
                    NavigationService.getallproduct(1, getproductbybrandcallback);
                }
            }
        });
    }

    $scope.clearFilters();

})

.controller('CartCtrl', function($scope, TemplateService, NavigationService, $location, $timeout, ngDialog) {
    $scope.template = TemplateService;
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.nodata = 'Loading..';
    $scope.nodatafound = true;
    $scope.userdetail = {};

    $scope.gettotalcartfunction = function() {
        NavigationService.totalcart(function(data) {
            if ($scope.userdetail.credits) {
                $scope.totalcart = data - $scope.userdetail.credits;
                if ($scope.totalcart <= 0) {
                    $scope.totalcart = 0
                }
            } else {
                $scope.totalcart = data;
            }
        });
    }



    NavigationService.getuserdetails(function(data) {
        console.log(data);
        $scope.userdetail = data;
        $scope.gettotalcartfunction();
    });

    //check coupons
    $scope.discountamount = 0;

    function calcdiscountamount() {
        var data = NavigationService.getcoupondetails();
        var subtotal = parseFloat($scope.totalcart);
        console.log(data);
        if (data.coupontype == '1') {
            if (data.discountpercent != '0') {
                console.log("ABC");
                $scope.ispercent = parseFloat(data.discountpercent);
                $scope.discountamount = (subtotal * $scope.ispercent / 100);
            } else {
                $scope.isamount = parseFloat(data.discountamount);
                console.log("ABCD");
                $scope.discountamount = $scope.isamount;
            }
            if ($scope.totalcart < $scope.discountamount) {
                $scope.totalcart = 0;
            }
        }
        if (data.coupontype == '2') {
            console.log($scope.cart);

            var totallength = 0;
            _.each($scope.cart, function(cart) {
                totallength += parseInt(cart.qty);
            });
            var xproducts = parseInt(data.xproducts);
            var yproducts = parseInt(data.yproducts);
            var itter = Math.floor(totallength / xproducts) * yproducts;
            console.log("ITTER " + itter);
            var newcart = _.sortBy($scope.cart, function(cart) {
                cart.price = parseFloat(cart.price);
                cart.qty2 = parseInt(cart.qty);
                return parseFloat(cart.price);
            });
            //newcart=_.each(newcart, function(cart){  cart.price=parseFloat(cart.price);cart.qty=parseFloat(cart.qty); });
            console.log(newcart);
            $scope.discountamount = 0;
            for (var i = 0; i < itter; i++) {
                if (newcart[i].qty2 != 0) {
                    newcart[i].qty2--;
                    $scope.discountamount += newcart[i].price;
                }

            }
        }
        if (data.coupontype == '4') {
            console.log("FREE DELIVERY APPLIED");
            $scope.isfreedelivery = "Free Delivery";
            $scope.discountamount = 0;


        }

        $.jStorage.set("discountamount", $scope.discountamount);
    };

    $scope.tocheckout = function() {
        console.log("cart");
        NavigationService.checkoutCheck(function(data) {
            if (data.value == true) {
                $.jStorage.set("discountamount", $scope.discountamount);
                if ($.jStorage.get('coupon')) {
                    $.jStorage.set('coupon', _.merge($.jStorage.get('coupon'), {
                        'totalcart': $scope.totalcart - $scope.discountamount
                    }));
                } else {
                    $.jStorage.set('coupon', {
                        'totalcart': $scope.totalcart - $scope.discountamount
                    });
                }
                $location.url("/checkout");
            } else {
                var xyz = ngDialog.open({
                    template: '<div class="pop-up"><h5 class="popup-wishlist">Some product has more than quantity available</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                    plain: true,
                    controller: 'ProductCtrl'
                });
                $timeout(function() {
                    xyz.close();
                }, 3000)
            }
        })

    }



    var coupondetails = {};
    $scope.ispercent = 0;
    $scope.isamount = 0;
    $scope.isfreedelivery = 0;
    $scope.discountamount = 0;
    var couponsuccess = function(data, status) {
        if (data == 'false') {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Invalid coupon code</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true,
                controller: 'CartCtrl'
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else {
            console.log("Show it");
            $scope.validcouponcode = 1;

            NavigationService.setcoupondetails(data);
            calcdiscountamount();

        }
    }



    $scope.checkcoupon = function(couponcode) {
        console.log(couponcode);
        NavigationService.getdiscountcoupon(couponcode).success(couponsuccess);
    };

    //discrount coupons


    // add and subtract from cart
    var cartt = function(data, status) {
        console.log(data);
        $scope.gettotalcartfunction();
        $scope.getcartfunction();
        myfunction();
    };

    $scope.changeqty = function(mycart, option) {

        if (option == '+') {
            ++mycart.qty;
        } else {
            if (mycart.qty > 1)
                --mycart.qty;
        }
        var selectedproduct = {};
        selectedproduct.product = mycart.id;
        selectedproduct.productname = mycart.options.realname;
        selectedproduct.price = mycart.price;
        selectedproduct.quantity = mycart.qty;
        NavigationService.addtocart(selectedproduct, cartt);
    };


    //add and subtract from cart



    $scope.getcartfunction = function() {
        NavigationService.getcart(function(data) {
            console.log(data);
            $scope.cart = data;
            _.each($scope.cart, function(n) {
                if (n.qty > n.maxQuantity) {
                    n.msg = "Quantity more than available quantity";
                } else {
                    n.msg = "";
                }
            })
            if (data == '') {
                $scope.nodatafound = true;
                $scope.nodata = "No Data found.";
            } else {
                $scope.nodatafound = false;
            }
        });
    }

    $scope.getcartfunction();

    //delete cart
    $scope.deletecart = function(cart) {
        console.log(cart);
        NavigationService.deletecart(cart.id, function(data) {
            console.log(data);
            $scope.getcartfunction();
            $scope.gettotalcartfunction();
            myfunction();
        });
    }


})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $state, $location, $interval, $window) {

    console.log($state.current.name);
    $scope.template = TemplateService;
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    //CREATE ACCOUNT
    $scope.account = {};

    var registerusercallback = function(data, status) {
        console.log(data);
        console.log("registerlogin");
        if (data != "false") {
            $.jStorage.set("user", data);
            $location.url("/home");
            $window.location.reload();

        } else {
            $scope.msgregister = "This Email Id is already registered with us or Error In Registration";
            $scope.msg = "";
            $scope.account = {};
        }
    }
    $scope.registeruser = function() {
        $scope.allvalidation = [{
            field: $scope.account.firstname,
            validation: ""
        }, {
            field: $scope.account.lastname,
            validation: ""
        }, {
            field: $scope.account.email,
            validation: ""
        }, {
            field: $scope.account.password,
            validation: ""
        }, {
            field: $scope.account.confirmpassword,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.registeruser($scope.account, registerusercallback);
        } else {
            $scope.msgregister = "Invalid data try again!!";
            $scope.msg = "";
            $scope.account = {};
        }

    }

    //LOGIN
    $scope.login = {};
    var getlogin = function(data, status) {
        console.log(data);
        console.log("in login");
        if (data != "false") {
            $.jStorage.set("user", data);
            $scope.msg = "Login Successful";
            $location.url("/home");
        } else {
            $scope.msg = "Invalid Email Or Password";
        }
        $scope.msgregister = "";
    };
    $scope.userlogin = function(login) {
        $scope.allvalidation = [{
            field: $scope.login.email,
            validation: ""
        }, {
            field: $scope.login.password,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.loginuser(login, getlogin);
        } else {
            $scope.msg = "Invalid data try again!!";
            $scope.msgregister = "";
            $scope.login = {};
        }
    };

    // GOOGLE AND FACEBOOK LOGIN
    var checktwitter = function(data, status) {
        if (data != "false") {
            $interval.cancel(stopinterval);
            ref.close();
            NavigationService.authenticate().success(authenticatesuccess);
        } else {

        }

    };

    var callAtIntervaltwitter = function() {
        NavigationService.authenticate().success(checktwitter);
    };
    var authenticatesuccess = function(data, status) {
        if (data != "false") {
            $.jStorage.set("user", data);
            user = data;
            $location.url("/app/home");
        }
    };

    $scope.facebooklogin = function() {
        ref = window.open(adminhauth + 'login/Facebook?returnurl=http://www.wohlig.com', '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('exit', function(event) {
            NavigationService.authenticate().success(authenticatesuccess);
            $interval.cancel(stopinterval);
        });
    }
    $scope.googlelogin = function() {
        ref = window.open(adminhauth + 'login/Google?returnurl=http://www.wohlig.com', '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('exit', function(event) {
            NavigationService.authenticate().success(authenticatesuccess);
            $interval.cancel(stopinterval);
        });
    }
})

.controller('forgotpasswordCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("forgotpassword");
    $scope.menutitle = NavigationService.makeactive("Forgotpassword");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    var forgotPasswordcallback = function(data, status) {
        console.log(data);
    }
    $scope.forgotPassword = function(email) {
        NavigationService.forgotPassword(email, forgotPasswordcallback);
    }
})

.controller('headerctrl', function($scope, TemplateService, NavigationService, $location, $window) {

    // WISHLIST

    window.scrollTo(0, 0);

    $scope.fastsearch = function(search) {
        $location.url("/searchresult/" + search);
    }

    myfunction = function() {
        NavigationService.gettotalcart(function(data) {
            $scope.totalcart = data;
        });
        NavigationService.totalcart(function(data) {
            $scope.amount = data;
        });
    }

    globalfunction.cart = function() {
        NavigationService.totalcart(function(data) {
            console.log(data);
            globalvariable.totalcart = data;
            console.log(globalvariable.totalcart);
        });
    }
    globalfunction.cart();
    myfunction();

    $scope.getwishlistproduct = function() {
        $location.url("/wishlist");
    }
    $scope.showusername = '';

    if (!$.jStorage.get("user")) {
        $scope.showlogin = true;
        $scope.showlogindropdown = false;
    } else {
        $scope.showlogin = false;
        $scope.showlogindropdown = true;
        if (!$.jStorage.get("user").name || $.jStorage.get("user").name == "") {
            if ($.jStorage.get("user").firstname && $.jStorage.get("user").firstname != '')
                $scope.showusername += $.jStorage.get("user").firstname;
            if ($.jStorage.get("user").lastname && $.jStorage.get("user").lastname != '')
                $scope.showusername += " " + $.jStorage.get("user").lastname;
            //                console.log($scope.showusername);
        } else {
            $scope.showusername = $.jStorage.get("user").name;
            //                console.log($scope.showusername);
        }
    }
    var logoutcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            console.log("flush");
            $.jStorage.flush();
            $scope.showlogindropdown = false;
            $location.url("/home");
            $window.location.reload();
        }
    }
    $scope.logout = function() {
        NavigationService.logout(logoutcallback);
    }
    $scope.template = TemplateService;

    $scope.brandhover = [
        "img/brands/acmemade.jpeg",
        "img/brands/adonit.png",
        "img/brands/autodrive.png",
        "img/brands/b&oplay.png",
        "img/brands/beats.png",
        "img/brands/dell.png",
        "img/brands/Adidas.png",
        "img/brands/dolcegabbana.jpg",
        "img/brands/gas.jpg",
        "img/brands/gstarraw.png",
        "img/brands/hp.png",
        "img/brands/jackjones.png",
        "img/brands/levis.png",
        "img/brands/motorola.png",
        "img/brands/sony.png",
        "img/brands/tommy.jpg"
    ];
})

.controller('ProductdetailCtrl', function($scope, TemplateService, NavigationService, $location, $stateParams, ngDialog, $filter, $timeout) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("productdetail");
    $scope.menutitle = NavigationService.makeactive("Productdetail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.productid = $stateParams.id;
    $scope.playvideo = false;
    $scope.showSalePrice = false;
    $scope.notqty = true;
    $scope.change = {};
    $scope.change.qty = 1;

    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            $scope.product.product.fav = "fav";
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true,
                controller: 'ProductdetailCtrl'
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else if (data == "0") {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }

    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }

    $scope.quantityChange = function(qty) {
        console.log(qty);
        // console.log($scope.product.product.quantity);
        if (!qty && qty == null) {
            $scope.notqty = false;
        } else {
            $scope.notqty = true;
        }
    }

    $scope.addtocart = function(product, qty) {
        console.log(product);
        if (qty <= $scope.product.product.quantity) {
            var selectedproduct = {};
            selectedproduct.product = product.id;
            selectedproduct.productname = product.name;
            selectedproduct.price = product.price;
            selectedproduct.quantity = qty;
            NavigationService.addtocart(selectedproduct, function(data) {
                console.log(data);
                var xyz = ngDialog.open({
                    template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                    plain: true
                });
                $timeout(function() {
                        xyz.close();
                    }, 3000)
                    //          $location.url("/cart");
                myfunction();
            });
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Invalid Quantity</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }

    }

    var getproductdetailscallback = function(data, status) {
        console.log(data);
        $scope.product = data;
        if ($scope.product.product.quantity == 0) {
            $scope.notqty = false;
        }
        if ($scope.product.product.user) {
            $scope.product.product.fav = "fav";
        }
        if (data.product.quantity >= 1) {
            $scope.availability = "In Stock";
        } else {
            $scope.availability = "Out of Stock";
            $scope.notqty = false;
        }

        $scope.product.product.img = $filter("serverimage")($scope.product.productimage[0].image);
        // $scope.product.product.quantity = 1;

        $scope.productdetail = [];
        $scope.product.productimage = _.sortBy($scope.product.productimage, ['order']);
        _.each($scope.product.productimage, function(n) {
            $scope.productdetail.push({
                image: $filter("serverimage")(n.image),
                check: 1
            });
        });
        if (data.product.videourl != '') {
            $scope.productdetail.push({
                image: "http://img.youtube.com/vi/" + data.product.videourl + "/default.jpg",
                url: data.product.videourl,
                check: 0
            });
        }

        if ($scope.product.product.firstsaleprice) {
            if ($scope.product.product.specialpricefrom == "0000-00-00" && $scope.product.product.specialpriceto == "0000-00-00") {
                $scope.showSalePrice = true;
                console.log("in if");
            } else if ($scope.product.product.specialpricefrom != "0000-00-00" && $scope.product.product.specialpriceto != "0000-00-00") {
                var birth = new Date($scope.product.product.specialpricefrom);
                var death = new Date($scope.product.product.specialpriceto);
                var curr = new Date();
                var diff = curr.getTime() - birth.getTime();
                var diff2 = curr.getTime() - death.getTime();
                var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                var end = Math.floor(diff2 / (1000 * 60 * 60 * 24));
                if (start >= 0 && end <= 0) {
                    $scope.showSalePrice = true;
                }
                console.log("in 1 else if");
            } else if ($scope.product.product.specialpricefrom != "0000-00-00") {
                var birth = new Date($scope.product.product.specialpricefrom);
                var curr = new Date();
                var diff = curr.getTime() - birth.getTime();
                var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                if (start >= 0) {
                    $scope.showSalePrice = true;
                }
                console.log("in 2 else if");
            } else if ($scope.product.product.specialpricefrom == "0000-00-00") {
                $scope.showSalePrice = true;
                console.log("in 3 else if");
            }
            if ($scope.showSalePrice == true) {
                // $scope.product.product.discountinper = Math.round(parseFloat($scope.product.product.firstsaleprice) / parseFloat($scope.product.product.price) * 100);
                $scope.product.product.discountinper = Math.floor((1 - (parseFloat($scope.product.product.firstsaleprice) / parseFloat($scope.product.product.price)))*100);
            }
            console.log("Show Sale Price = " + $scope.showSalePrice);
        } else {
            $scope.showSalePrice = false;
        }
    }
    NavigationService.getproductdetails($scope.productid).success(getproductdetailscallback);


    $scope.onimgclick = function(img) {
        // console.log(img);
        if (img.check == 0) {
            $scope.playvideo = true;
            $scope.product.product.img = img.url;
        } else {
            $scope.playvideo = false;
            $scope.product.product.img = img.image;
        }
    }

    $scope.makeactive = function(product) {
        $scope.productdetail = [];
        $scope.product = {};
        $location.url("/productdetail/" + product.id);
        // NavigationService.getproductdetails(product.id).success(getproductdetailscallback);
    }

    $scope.showDesc = true;
    $scope.showSpec = false;
    $scope.descAcvtive = "";
    $scope.specAcvtive = "grey-btn";
    $scope.ShowDescHideSpec = function() {
        $scope.showDesc = true;
        $scope.showSpec = false;
        $scope.descAcvtive = "";
        $scope.specAcvtive = "grey-btn";
    }
    $scope.ShowSpecHideDesc = function() {
        $scope.showDesc = false;
        $scope.showSpec = true;
        $scope.descAcvtive = "grey-btn";
        $scope.specAcvtive = "";
    }

})

.controller('OrderhistoryCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("orderhistory");
    $scope.menutitle = NavigationService.makeactive("Orderhistory");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.pageno = 1;
    $scope.user = $.jStorage.get("user");
    $scope.orders = [];
    $scope.lastpage = 0;
    $scope.dataload = "Loading..";

    $scope.lodemore = function() {
        NavigationService.myorders($scope.pageno, function(data) {
            console.log(data.queryresult);
            $scope.lastpage = data.lastpage;
            _.each(data.queryresult, function(n) {
                $scope.orders.push(n);
            })
            if ($scope.orders == "") {
                $scope.dataload = "No data found !";
            }
        });

    }

    $scope.lodemore();
    $scope.loadMoreOrders = function() {
        $scope.pageno++;
        if ($scope.lastpage >= $scope.pageno) {
            $scope.lodemore();
        }

    }

})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.allvalidation = [];

    $scope.contact = {};
    var usercontactcallback = function(data, status) {
        if (data) {
            $scope.msgsuccess = "Successfully Submitted!!";
            $scope.msg = "";
            clearvalidation($scope.allvalidation);
        } else {
            $scope.msg = "Invalid data try again!!";
            $scope.msgsuccess = "";
        }


    }
    $scope.usercontact = function(contact) {
        $scope.allvalidation = [{
            field: $scope.contact.name,
            validation: ""
        }, {
            field: $scope.contact.email,
            validation: ""
        }, {
            field: $scope.contact.comment,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.usercontact(contact, usercontactcallback);
        } else {
            $scope.msg = "Please fill mandatory fields!!";
            $scope.msgsuccess = "";
        }

    }
})

.controller('StorelocatorCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("storelocator");
    $scope.menutitle = NavigationService.makeactive("StoreLocator");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('ResetpasswordCtrl', function($scope, TemplateService, NavigationService, $stateParams, ngDialog, $timeout) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("resetpassword");
        $scope.menutitle = NavigationService.makeactive("Resetpassword");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.forgot = [];
        $scope.forgot.hashcode = $stateParams.id;
        //  REDIRECT CHANGE PASSWORD STARTS
        var newPasswordSuccess = function(data, status) {
            if (data == '1') {
                $location.url("/login");
            } else {
                $scope.msg = "Sorry not able to change password..Try Again!";
            }
        }
        $scope.newPassword = function() {
            console.log($scope.forgot);
            $scope.allvalidation = [{
                field: $scope.forgot.newpassword,
                validation: ""
            }, {
                field: $scope.forgot.confirmpassword,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);
            if (check) {
                NavigationService.newPassword($scope.forgot).success(newPasswordSuccess);
            } else {
                var xyz = ngDialog.open({
                    template: '<div class="pop-up"><h5 class="popup-wishlist">Invalid data try again!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                    plain: true
                });
                $timeout(function() {
                    xyz.close();
                }, 3000)
            }

        }
    })
    .controller('changepasswordCtrl', function($scope, TemplateService, NavigationService, $stateParams, ngDialog, $timeout) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("changepassword");
        $scope.menutitle = NavigationService.makeactive("Changepassword");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.changePassword = {};

        $scope.popups = function(msg) {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">' + msg + '</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }

        $scope.newPassword = function() {
            $scope.allvalidation = [{
                field: $scope.changePassword.oldpassword,
                validation: ""
            }, {
                field: $scope.changePassword.newpassword,
                validation: ""
            }, {
                field: $scope.changePassword.confirmpassword,
                validation: ""
            }];
            var check = formvalidation($scope.allvalidation);
            if (check) {
                if ($scope.changePassword.newpassword === $scope.changePasswordconfirmpassword) {
                    NavigationService.changepassword($scope.changePassword, function(data) {
                        console.log(data);
                        if (data == 0) {
                            $scope.popups("Wrong Password");
                        } else {
                            $scope.popups("Password changed Successfully");
                        }
                    })
                } else {
                    $scope.popups("New password and Confirm password should be same");
                }
            } else {
                $scope.popups("All fields are mandatory");
            }
        }

    })

.controller('AccountCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("account");
    $scope.menutitle = NavigationService.makeactive("Account");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.user = {};

    var updateusercallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">User updated</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Fail to update</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }

    }
    $scope.updateuser = function(user) {
        $scope.allvalidation = [{
            field: $scope.user.email,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.updateuser(user, updateusercallback);
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Invalid data try again!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }



    // User details by default

    NavigationService.getuserdetails(function(data, status) {
        console.log("user details");
        console.log(data);
        $scope.user = data;
    });
})

.controller('AddwishCtrl', function($scope, TemplateService, NavigationService, ngDialog) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("popwish");
    $scope.menutitle = NavigationService.makeactive("Addwish");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 5) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }


    var getaboutuscallback = function(data, status) {
        console.log(data);
        $scope.celebimages = data.queryresult;
        console.log($scope.celebimages);
    }
    NavigationService.getaboutus(getaboutuscallback);

})

.controller('NewarrivalsCtrl', function($scope, TemplateService, NavigationService, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("newarrivals");
    $scope.menutitle = NavigationService.makeactive("Deals");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.pageno = 0;
    $scope.dataload = "Loading ...";
    $scope.products = [];

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 2) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }

    var lastpage = 1;

    $scope.demo2 = {
        range: {
            min: 0,
            max: 10050
        },
        minPrice: 0,
        maxPrice: 10050
    };

    var getexclusiveandnewarrivalcallback = function(data, status) {
        console.log(data);
        _.each(data.queryresult, function(n) {
            if (n.isfavid) {
                n.fav = "fav";
            }
            if (n.firstsaleprice) {
                if (n.specialpricefrom == "0000-00-00" && n.specialpriceto == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in if");
                } else if (n.specialpricefrom != "0000-00-00" && n.specialpriceto != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var death = new Date(n.specialpriceto);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var diff2 = curr.getTime() - death.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    var end = Math.floor(diff2 / (1000 * 60 * 60 * 24));
                    if (start >= 0 && end <= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 1 else if");
                } else if (n.specialpricefrom != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    if (start >= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 2 else if");
                } else if (n.specialpricefrom == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in 3 else if");
                }
                console.log("Show Sale Price = " + n.showSalePrice);
                if (n.showSalePrice == true) {
                    n.discountinper = Math.floor((1 - (parseFloat(n.firstsaleprice) / parseFloat(n.price)))*100);
                }
            }
            $scope.products.push(n);
        });

        console.log($scope.products);
        if ($scope.products == "") {
            $scope.dataload = "No data found !";
        }
    }

    $scope.addMoreItems = function() {
        if (lastpage != $scope.pageno) {
            ++$scope.pageno;
            NavigationService.getexclusiveandnewarrival($scope.pageno, 2, getexclusiveandnewarrivalcallback);
        }
    }

    $scope.addMoreItems();





    $scope.openModal = function(s) {
        console.log(s)
        ngDialog.open({
            template: 'views/content/popwish.html',
            scope: $scope
        });
    }


    $scope.getproductdetails = function(productid) {
        console.log(productid);
        $location.url("/productdetail/" + productid);

    }

    //  var addtowishlistcallback = function (data, status) {
    //      console.log(data);
    //      if (data == "true") {
    //          ngDialog.open({
    //              template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //              plain: true
    //          });
    //      } else if (data == "0") {
    //          ngDialog.open({
    //              template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //              plain: true
    //          });
    //      } else {
    //          ngDialog.open({
    //              template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
    //              plain: true
    //          });
    //      }
    //  }
    $scope.addtowishlist = function(product) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(product.id, function(data, status) {
                console.log(data);
                if (data == "true") {
                    product.fav = "fav";
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                } else if (data == "0") {
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                } else {
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                }
            });
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }

    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                    xyz.close();
                }, 3000)
                //          $location.url("/cart");
            myfunction();
        });
    }


})



.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout, $interval, $location) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("checkout");
    $scope.menutitle = NavigationService.makeactive("CheckOut");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.openblock = {};
    $scope.openship = {};
    $scope.openship.open = "closemodalship";
    $scope.showcheckout = true;
    $scope.openblockvalue = false;
    $scope.showshipping = false;
    $scope.register = false;
    $scope.checkout = {};
    $scope.paymentinfo = false;
    $scope.noamount = false;
    $scope.discount = 0;


    $scope.login = {};
    $scope.showcontinue = false;
    $scope.openblock.radiovalue = "checkoutasguest";

    //PREFILLED USER DATA
    NavigationService.getuserdetails(function(data) {
        console.log(data);
        $scope.checkout = data;
    });

    //SOCIAL LOGIN

    // GOOGLE AND FACEBOOK LOGIN
    var checktwitter = function(data, status) {
        if (data != "false") {
            $interval.cancel(stopinterval);
            ref.close();
            NavigationService.authenticate().success(authenticatesuccess);
        } else {

        }

    };

    var callAtIntervaltwitter = function() {
        NavigationService.authenticate().success(checktwitter);
    };
    var authenticatesuccess = function(data, status) {
        if (data != "false") {
            $.jStorage.set("user", data);
            user = data;
            window.location.reload();
        }
    };

    $scope.facebooklogin = function() {
        ref = window.open(adminhauth + 'login/Facebook?returnurl=http://www.wohlig.com', '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('exit', function(event) {
            NavigationService.authenticate().success(authenticatesuccess);
            $interval.cancel(stopinterval);
        });
    }
    $scope.googlelogin = function() {
        ref = window.open(adminhauth + 'login/Google?returnurl=http://www.wohlig.com', '_blank', 'location=no');
        stopinterval = $interval(callAtIntervaltwitter, 2000);
        ref.addEventListener('exit', function(event) {
            NavigationService.authenticate().success(authenticatesuccess);
            $interval.cancel(stopinterval);
        });
    }

    //CREATE ACCOUNT
    $scope.account = {};

    var registerusercallback = function(data, status) {
        console.log(data);
        console.log("registerlogin");
        if (data != "false") {
            $.jStorage.set("user", data);
            $scope.showlogin = false;
            $scope.showcontinue = true;
            $scope.openblockvalue = true;
            $window.location.reload();

        } else {
            $scope.msg = "This Email Id is already registered with us or Error In Registration";
            $scope.account = {};
        }
    }
    $scope.registeruser = function() {
        $scope.allvalidation = [{
            field: $scope.account.firstname,
            validation: ""
        }, {
            field: $scope.account.lastname,
            validation: ""
        }, {
            field: $scope.account.email,
            validation: ""
        }, {
            field: $scope.account.password,
            validation: ""
        }, {
            field: $scope.account.confirmpassword,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.registeruser($scope.account, registerusercallback);
        } else {
            $scope.msgregister = "Invalid data try again!!";
            $scope.msg = "";
        }

    }



    // SHOW LOGIN BLOCK

    $scope.checklogin = $.jStorage.get("user");
    $scope.showlogin = {};
    if ($scope.checklogin != null) {
        $scope.showlogin = false;
        $scope.showcontinue = true;
        $scope.openblockvalue = true;
    } else {
        $scope.showlogin = true;
    }

    //login
    var getlogin = function(data, status) {
        console.log(data);
        console.log("in login");
        $.jStorage.set("user", data);
        if (data != "false") {
            $scope.msg = "Login Successful";
            $scope.showlogin = false;
            $scope.showcontinue = true;
            $scope.openblockvalue = true;
            window.reload();
        } else {
            $scope.msg = "Invalid Email Or Password";
        }
    };
    $scope.userlogin = function(login) {
        $scope.allvalidation = [{
            field: $scope.login.email,
            validation: ""
        }, {
            field: $scope.login.password,
            validation: ""
        }];
        var check = formvalidation($scope.allvalidation);
        if (check) {
            NavigationService.loginuser(login, getlogin);
        } else {
            $scope.msg = "Invalid data try again!!";
            $scope.msgregister = "";
            $scope.login = {};
        }
    };

    //order products
    NavigationService.totalcart(function(data) {
        $scope.totalcart = data;
        if ($.jStorage.get('coupon').couponcode && $.jStorage.get('coupon').couponcode != null) {
            $scope.couponhave = $.jStorage.get('coupon').couponcode;
        } else {
            $scope.couponhave = 0;
        }
        $scope.allamount = $.jStorage.get('coupon').totalcart;
        if ($.jStorage.get("discountamount")) {
            $scope.discount = $.jStorage.get("discountamount");
            // if ($scope.discount>$scope.totalcart) {
            //   $scope.totalcart = 0;
            // }
        }
    });




    //register on login

    $scope.registerifnot = function() {
        if ($scope.openblock.radiovalue == "register") {
            $scope.register = true;
        } else {
            $scope.register = false;
        }
    }

    //continue billing

    $scope.continuebilling = function() {
        $scope.openblockvalue = true;
        $scope.showcontinue = true;
    }

    $scope.showLoading = false;
    //continue shipping billing
    $scope.shippingbilling = function() {
        console.log("test billing");
        console.log($scope.openship.open);
        var check = false;
        if ($scope.openship.open == "closemodalship") {
            $scope.allvalidation = [{
                field: $scope.checkout.firstname,
                validation: ""
            }, {
                field: $scope.checkout.lastname,
                validation: ""
            }, {
                field: $scope.checkout.email,
                validation: ""
            }, {
                field: $scope.checkout.billingaddress,
                validation: ""
            }, {
                field: $scope.checkout.billingcity,
                validation: ""
            }, {
                field: $scope.checkout.billingstate,
                validation: ""
            }, {
                field: $scope.checkout.billingpincode,
                validation: ""
            }, {
                field: $scope.checkout.billingcountry,
                validation: ""
            }, {
                field: $scope.checkout.billingcontact,
                validation: ""
            }];
            check = formvalidation($scope.allvalidation);

        } else {
            console.log("on shipping");
            $scope.allvalidation = [{
                field: $scope.checkout.firstname,
                validation: ""
            }, {
                field: $scope.checkout.lastname,
                validation: ""
            }, {
                field: $scope.checkout.email,
                validation: ""
            }, {
                field: $scope.checkout.billingaddress,
                validation: ""
            }, {
                field: $scope.checkout.billingcity,
                validation: ""
            }, {
                field: $scope.checkout.billingstate,
                validation: ""
            }, {
                field: $scope.checkout.billingpincode,
                validation: ""
            }, {
                field: $scope.checkout.billingcountry,
                validation: ""
            }, {
                field: $scope.checkout.billingcontact,
                validation: ""
            }, {
                field: $scope.checkout.shippingname,
                validation: ""
            }, {
                field: $scope.checkout.shippingaddress,
                validation: ""
            }, {
                field: $scope.checkout.shippingcity,
                validation: ""
            }, {
                field: $scope.checkout.shippingstate,
                validation: ""
            }, {
                field: $scope.checkout.shippingpincode,
                validation: ""
            }, {
                field: $scope.checkout.shippingcountry,
                validation: ""
            }, {
                field: $scope.checkout.customernote,
                validation: ""
            }];
            check = formvalidation($scope.allvalidation);
        }

        if (check) {
            //                  NavigationService.registeruser($scope.account, registerusercallback);
            console.log("all fill");
            if ($scope.allamount == 0) {
                $scope.noamount = true;
            } else {
                $scope.paymentinfo = true;
            }

            $scope.showLoading = true;
            NavigationService.getcart(function(data) {
                console.log(data);
                $scope.cart = data;

                $scope.checkout.cart = $scope.cart;
                if (NavigationService.getuser()) {
                    $scope.checkout.user = $.jStorage.get("user").id;
                } else {
                    $scope.checkout.user = 0;
                }
                NavigationService.placeorder($scope.checkout, function(data) {
                    console.log(data);
                    $scope.orderid = data;
                    $scope.amount = $scope.totalcart - $scope.discount;
                    $scope.showLoading = false;
                    // ngDialog.open({
                    //     template: '<div class="pop-up"><h5 class="popup-wishlist">Order placed</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                    //     plain: true
                    // });
                });

            });

        } else {
            $scope.checkoutmsg = "Please fill mandatory fields!! OR Invalid data !!";
            $timeout(function() {
                $scope.checkoutmsg = "";
            }, 8000);
            $scope.msg = "";
        }


    }

    //      placeorder

    $scope.placeorder = function() {
        console.log();
        $scope.showLoading = true;
        NavigationService.getcart(function(data) {
            console.log(data);
            $scope.cart = data;

            $scope.checkout.cart = $scope.cart;
            if (NavigationService.getuser()) {
                $scope.checkout.user = $.jStorage.get("user").id;
            } else {
                $scope.checkout.user = 0;
            }
            NavigationService.placeorder($scope.checkout, function(data) {
                console.log(data);
                $scope.showLoading = false;
                ngDialog.open({
                    template: '<div class="pop-up"><h5 class="popup-wishlist">Order placed</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                    plain: true
                });
            });

        });

    }

    // SHOW ONLY CHECKOUT
    //    console.log(openship);

})

.controller('DealsCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("deals");
    $scope.menutitle = NavigationService.makeactive("Deals");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 3) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }

    $scope.dealsimg = [];

    $scope.sliderclick = function(id) {
        NavigationService.getofferproducts(id.id, function(data) {
            console.log(data);
            $scope.deals = [];
            $scope.deals[0] = data.offerdetails;
            $scope.deals[0].offerproducts = data.offerproducts;
            console.log($scope.deals);

        })
    }

    var getofferdetailscallback = function(data, status) {
        console.log(data.offer[0]);
        $scope.deals = data.offer[0];

        $scope.slideoffer = [];
        _.each(data.offer[0], function(n) {
            _.each(n.offerproducts, function(m) {
                if (m.image1) {
                    $scope.slideoffer.push({
                        "id": n.id,
                        "img": m.image1
                    });
                }
            });

        });
        console.log($scope.slideoffer);


        $scope.pastdeals = data.pastoffer;
        $scope.pastdealproducts = data.pastofferproducts;
        $scope.upcomingoffer = data.upcomingoffer;
        $scope.upcomingofferproducts = data.upcomingofferproducts;
        console.log($scope.dealslide);
        _.each($scope.dealslide, function(n) {
            $scope.dealsimg.push(n.image);
        })
    }
    NavigationService.getofferdetails(getofferdetailscallback);

    $scope.demo2 = {
        range: {
            min: 0,
            max: 10050
        },
        minPrice: 0,
        maxPrice: 10050
    };
    //  $scope.deals = [{
    //      imageprd: "img/product/iphone.jpg",
    //      imageprd2: "img/product/iphone6.jpg",
    //      descp: "Iphone6 cases and covers",
    //      imageoff1: "img/product/iphone6ho.jpg",
    //      imageoff2: "img/product/iphone2.jpg",
    //      descpoff: "Iphone cases and covers",
    //      price: "45,000.00"
    //    }, {
    //      imageprd: "img/product/iphone.jpg",
    //      imageprd2: "img/product/iphone6.jpg",
    //      descp: "Iphone6 cases and covers",
    //      imageoff1: "img/product/iphone6ho.jpg",
    //      imageoff2: "img/product/iphone2.jpg",
    //      descpoff: "Iphone cases and covers",
    //      price: "45,000.00"
    //    }];
    //  $scope.updeals = [{
    //      imageprd: "img/product/iphone.jpg",
    //      imageprd2: "img/product/iphone6.jpg",
    //      descp: "Iphone6 cases and covers",
    //      imageoff1: "img/product/iphone6ho.jpg",
    //      imageoff2: "img/product/iphone2.jpg",
    //      descpoff: "Iphone cases and covers",
    //      price: "45,000.00"
    //    }];
})

.controller('DistributionCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("distribution");
    $scope.menutitle = NavigationService.makeactive("Distribution");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.pageno = 0;
    var lastpage = 1;
    $scope.distributer = [];

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 4) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }

    var getbrandsuccess = function(data, status) {
        _.each(data.queryresult, function(n) {
            $scope.distributer.push(n);
        });

        lastpage = data.lastpage;
    }

    $scope.addMoreItems = function() {
        if (lastpage != $scope.pageno) {
            ++$scope.pageno;
            NavigationService.getbrand($scope.pageno, getbrandsuccess);
        }
    }

    $scope.addMoreItems();
})

.controller('TermsConditionCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("termscondition");
        $scope.menutitle = NavigationService.makeactive("TermsCondition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('PrivacyCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("privacy");
        $scope.menutitle = NavigationService.makeactive("Privacy");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('SorryCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("sorry");
        $scope.menutitle = NavigationService.makeactive("Sorry");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        NavigationService.getorderbyorderid($stateParams.order, function(data) {
            $scope.order = data;
        })

    })
    .controller('ThankyouCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("thankyou");
        $scope.menutitle = NavigationService.makeactive("Thank You");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        console.log($stateParams.order);
        NavigationService.getorderbyorderid($stateParams.order, function(data) {
            $scope.order = data;
        })

    })
    .controller('FaqCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.template = TemplateService.changecontent("faq");
        $scope.menutitle = NavigationService.makeactive("Faq");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.selectFAQ = [];
        $scope.selectFAQ[1] = true;
        $scope.switchFAQ = function(key) {
            for (i = 0; i < 9; i++) {
                $scope.selectFAQ[i] = false;
            }
            console.log($scope.selectFAQ);
            console.log(key);
            switch (key) {
                case 1:
                    $scope.selectFAQ[1] = true;
                    break;
                case 2:
                    $scope.selectFAQ[2] = true;
                    break;
                case 3:
                    $scope.selectFAQ[3] = true;
                    break;
                case 4:
                    $scope.selectFAQ[4] = true;
                    break;
                case 5:
                    $scope.selectFAQ[5] = true;
                    break;
                case 6:
                    $scope.selectFAQ[6] = true;
                    break;
                case 7:
                    $scope.selectFAQ[7] = true;
                    break;
                case 8:
                    $scope.selectFAQ[8] = true;
                    break;

            };

        }
    })

.controller('ExclusiveCtrl', function($scope, TemplateService, NavigationService, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("exclusive");
    $scope.menutitle = NavigationService.makeactive("Exclusive");
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
    var getexclusiveandnewarrivalcallback = function(data, status) {
        console.log(data.queryresult);
        $scope.products = data.queryresult;
        console.log($scope.products);
    }
    NavigationService.getexclusiveandnewarrival(1, getexclusiveandnewarrivalcallback);


    $scope.getproductdetails = function(productid) {
        console.log(productid);
        $location.url("/productdetail/" + productid);

    }

    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else if (data == "0") {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }
    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }

    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                    xyz.close();
                }, 3000)
                //          $location.url("/cart");
            myfunction();
        });
    }



})

.controller('BrandsCtrl', function($scope, TemplateService, NavigationService, $location) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("brand");
    $scope.menutitle = NavigationService.makeactive("Brands");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.brandimages = [];
    $scope.pageno = 0;
    var lastpage = 1;

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 0) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }


    var getbrandsuccess = function(data, status) {
        console.log(data.queryresult);
        _.each(data.queryresult, function(n) {
            $scope.brandimages.push(n);
        });

        lastpage = data.lastpage;
    }


    $scope.addMoreItems = function() {
        console.log("load more444444");
        if (lastpage != $scope.pageno) {
            ++$scope.pageno;
            NavigationService.getbrand($scope.pageno, getbrandsuccess);
        }
    }

    $scope.addMoreItems();



    $scope.getproductbybrand = function(id) {
        $location.url("/product/" + 0 + "/" + 0 + "/" + id);
    }

})

.controller('WishlistCtrl', function($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("wishlist");
    $scope.menutitle = NavigationService.makeactive("Wishlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.loading = "loading..";

    // WISHLIST PRODUCTS

    $scope.getproductdetails = function(productid) {
        console.log(productid);
        $location.url("/productdetail/" + productid);

    }

    var getwishlistproductcallback = function(data, status) {
        $scope.products = data.queryresult;
        console.log($scope.products);
        if (data.queryresult == '') {
            $scope.loading = "No data found..";
        } else {
            $scope.loading = "";
        }
    }
    NavigationService.getwishlistproduct(getwishlistproductcallback);

    // DELETE PRODUCT FROM WISHLIST
    var removefromwishlist = function(data, status) {
        console.log(data);
        if (data == 1) {
            //          ngDialog.open({
            //              template: 'views/content/deletewish.html',
            //              scope: $scope
            //          });
            NavigationService.getwishlistproduct(getwishlistproductcallback);
        }

    }
    $scope.removefromwishlist = function(productid) {
        NavigationService.removefromwishlist(productid, removefromwishlist);
    }
    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                    xyz.close();
                }, 3000)
                //          $location.url("/cart");
            myfunction();
        });
    }

})

.controller('SearchresultCtrl', function($scope, TemplateService, NavigationService, $stateParams, ngDialog, $location, $timeout) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("searchresult");
    $scope.menutitle = NavigationService.makeactive("SearchResult");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.searchfor = $stateParams.search;

    $scope.getproductdetails = function(productid) {
        console.log(productid);
        $location.url("/productdetail/" + productid);

    }

    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else if (data == "0") {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }
    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }

    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            $timeout(function() {
                    xyz.close();
                }, 3000)
                //          $location.url("/cart");
            myfunction();
        });
    }

    $scope.products = [];
    NavigationService.search($stateParams.search, function(data) {
        console.log(data);
        _.each(data, function(n) {
            if (n.isfavid) {
                n.fav = "fav";
            }
            if (n.firstsaleprice) {
                if (n.specialpricefrom == "0000-00-00" && n.specialpriceto == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in if");
                } else if (n.specialpricefrom != "0000-00-00" && n.specialpriceto != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var death = new Date(n.specialpriceto);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var diff2 = curr.getTime() - death.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    var end = Math.floor(diff2 / (1000 * 60 * 60 * 24));
                    if (start >= 0 && end <= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 1 else if");
                } else if (n.specialpricefrom != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    if (start >= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 2 else if");
                } else if (n.specialpricefrom == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in 3 else if");
                }
                console.log("Show Sale Price = " + n.showSalePrice);
                if (n.showSalePrice == true) {
                    n.discountinper = Math.floor((1 - (parseFloat(n.firstsaleprice) / parseFloat(n.price)))*100);
                }
            }
            $scope.products.push(n);
        });
        // $scope.products = data;
    });

})

.controller('submenuctrl', function($scope, TemplateService, NavigationService, $rootScope, $location, $state, $location) {
    console.log($state.current.name);
    $scope.template = TemplateService;
    $scope.submenuval = ['views/content/brandhover.html', 'views/content/producthover.html'];
    $scope.submenu = [];
    $scope.parent = {};
    $scope.category = {};
    $scope.pageno = 1;
    $scope.splideno = 0;
    $scope.slides = [];

    //PRODUCT HOVER CLICK

    $scope.categorydetailhover = function(id) {
        $location.url("/product/" + id + "/0/0");
    }

    NavigationService.getallcategories(function(data) {
        console.log(data);
        $scope.categories = data;
    });

    // Brand on hover

    var getbrandsuccess = function(data, status) {
        $scope.lastpage = data.lastpage;
        $scope.splideno = data.lastpage;
        var brands = _.chunk(data.queryresult, 4);
        var brands2 = _.chunk(brands, 4);
        $scope.brandhover = brands2;
        console.log($scope.brandhover);
        //add slide
        // $scope.addSlide = function() {
        //     var newWidth = 600 + slides.length + 1;
        //     slides.push({
        //         image: '//placekitten.com/' + newWidth + '/300',
        //         text: [slides.length % $scope.splideno] + ' ' + [slides.length % $scope.splideno]
        //     });
        // };
        // for (var i = 0; i < $scope.splideno; i++) {
        //     $scope.addSlide();
        // }
    }
    NavigationService.getAllBrands($scope.pageno, getbrandsuccess);



    $scope.getproductbycategoryhover = function(parent) {
        console.log("go to product");
        $location.url("/product/" + parent + "/0/0");

    }
    $scope.showsubmenu = function(data) {
        $scope.submenu[data] = true;
    };
    $scope.hidesubmenu = function(data) {
        $scope.submenu[data] = false;
    };

    $scope.getproductbybrand = function(id) {
        $location.url("/product/" + 0 + "/" + 0 + "/" + id);
    }

    $scope.slidebrands = function(pageno) {
        NavigationService.getbrand(pageno, function(data) {
            $scope.lastpage = data.lastpage;
            $scope.brandhover = data.queryresult;
        });
    }

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];



    $scope.navbar = navbarjson;

    $scope.navigate = function(page) {
        console.log(page);
        for (var i = 0; i < navbarjson.length; i++) {
            if (navbarjson[i].title == page.title) {
                console.log(navbarjson[i].title);
                navbarjson[i].class = "color";
            } else {
                navbarjson[i].class = "";
            }
            $location.url("/" + page.href);
        }
    }

})

.controller('brandProductsCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $location, $timeout) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.pageno = 1;
    var lastpage = 0;
    $scope.price = {};
    $scope.price.minPrice = 0;
    $scope.price.maxPrice = 100;

    $scope.products = [];
    $scope.showfilter = [];
    $scope.dataload = "Loading ...";
    $scope.filters = {};
    $scope.filters.category = "";
    $scope.filters.color = "";
    $scope.filters.type = "";
    $scope.filters.material = "";
    $scope.filters.finish = "";
    $scope.filters.compatibledevice = "";
    $scope.filters.compatiblewith = "";
    $scope.filters.brand = "";
    $scope.filters.pricemin = "";
    $scope.filters.pricemax = "";
    $scope.filters.microphone = "";
    $scope.filters.size = "";
    $scope.filters.clength = "";
    $scope.filters.voltage = "";
    $scope.filters.capacity = "";

    $scope.colorfilter = [];

    $scope.getFilterResults = function() {
        $scope.pageno = 1;
        $scope.products = [];
        NavigationService.getproductbybrand(1, $stateParams.brand, $scope.filters, getproductbybrandcallback);
    }

    $scope.alignFilter = function(str) {
        $scope.filters[str] = "";
        var objsend = $scope.showfilter[str];
        var objfil = $scope.filters[str];
        console.log(objsend);
        _.each(objsend, function(n) {
            if (n.status) {
                objfil += n[str] + ",";
            }
        });
        objfil = objfil.substr(0, objfil.length - 1);
        $scope.filters[str] = objfil;
        console.log($scope.filters[str]);
        $scope.getFilterResults();
    }

    $scope.alignFilterId = function(str) {
        $scope.filters[str] = "";
        var objsend = $scope.showfilter[str];
        var objfil = $scope.filters[str];
        console.log(objsend);
        _.each(objsend, function(n) {
            if (n.status) {
                objfil += n.id + ",";
            }
        });
        objfil = objfil.substr(0, objfil.length - 1);
        $scope.filters[str] = objfil;
        console.log(objfil);
        $scope.getFilterResults();
    }

    for (var i = 0; i < navbarjson.length; i++) {
        if (i == 0) {
            navbarjson[i].class = "color";
        } else {
            navbarjson[i].class = "";
        }
    }

    $scope.addtowishlist = function(product) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(product.id, function(data, status) {
                console.log(data);
                if (data == "true") {
                    product.fav = "fav";
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                } else if (data == "0") {
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                } else {
                    var xyz = ngDialog.open({
                        template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                        plain: true
                    });
                    $timeout(function() {
                        xyz.close();
                    }, 3000)
                }
            });
        } else {
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true,
                controller: 'ProductCtrl'
            });
            $timeout(function() {
                xyz.close();
            }, 3000)
        }
    }


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

    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.ratingStates = [{
        stateOn: 'glyphicon-ok-sign',
        stateOff: 'glyphicon-ok-circle'
    }, {
        stateOn: 'glyphicon-star',
        stateOff: 'glyphicon-star-empty'
    }, {
        stateOn: 'glyphicon-heart',
        stateOff: 'glyphicon-ban-circle'
    }, {
        stateOn: 'glyphicon-heart'
    }, {
        stateOff: 'glyphicon-off'
    }];

    $scope.$watch('rate', function(val) {

            function sucess(data) {

                console.log(data);

            };

            function error(response) {

                console.log(response)

                alert("Can't post " + response.data + " Error:" + response.status);

            }



            if (val) {

                var data = {
                    rating: val,
                    user: "userId" // I'm not sure where is your userId

                }

                $http.post("yourUrl", data).then(sucess, error);


            }
        })
        // PRODUCTS SELECTED FROM CATEGORY
    var getproductbycategorycallback = function(data, status) {
        console.log(data.queryresult);
        $scope.products = data.queryresult;
    }

    //GO TO PRODUCT DETAIL
    $scope.getproductdetails = function(productid) {
        $location.url("/productdetail/" + productid);
    }

    var getproductbybrandcallback = function(data, status) {
        console.log(data);
        _.each(data.data.queryresult, function(n) {
            if (n.isfavid) {
                n.fav = "fav";
            }
            if (n.firstsaleprice) {
                if (n.specialpricefrom == "0000-00-00" && n.specialpriceto == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in if");
                } else if (n.specialpricefrom != "0000-00-00" && n.specialpriceto != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var death = new Date(n.specialpriceto);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var diff2 = curr.getTime() - death.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    var end = Math.floor(diff2 / (1000 * 60 * 60 * 24));
                    if (start >= 0 && end <= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 1 else if");
                } else if (n.specialpricefrom != "0000-00-00") {
                    var birth = new Date(n.specialpricefrom);
                    var curr = new Date();
                    var diff = curr.getTime() - birth.getTime();
                    var start = Math.floor(diff / (1000 * 60 * 60 * 24));
                    if (start >= 0) {
                        n.showSalePrice = true;
                    }
                    console.log("in 2 else if");
                } else if (n.specialpricefrom == "0000-00-00") {
                    n.showSalePrice = true;
                    console.log("in 3 else if");
                }
                console.log("Show Sale Price = " + n.showSalePrice);
                if (n.showSalePrice == true) {
                    n.discountinper = Math.floor((1 - (parseFloat(n.firstsaleprice) / parseFloat(n.price)))*100);
                }
            }
            $scope.products.push(n);
        });
        $scope.products = _.uniq($scope.products);
        if ($scope.products == "") {
            $scope.dataload = "No data found";
        }
        lastpage = data.data.lastpage;

        if (data.filter) {
            if ($scope.filters.category == "" && data.filter.category) {
                $scope.showfilter.category = data.filter.category;
            }
            if ($scope.filters.color == "" && data.filter.color) {
                $scope.showfilter.color = data.filter.color;
            }
            if ($scope.filters.type == "" && data.filter.type) {
                $scope.showfilter.type = data.filter.type;
            }
            if ($scope.filters.material == "" && data.filter.material) {
                $scope.showfilter.material = data.filter.material;
            }
            if ($scope.filters.finish == "" && data.filter.finish) {
                $scope.showfilter.finish = data.filter.finish;
            }
            var arr = [];
            if ($scope.filters.compatibledevice == "" && data.filter.compatibledevice) {
                if (data.filter.compatibledevice.length > 1) {

                    _.each(data.filter.compatibledevice, function(n) {
                        n.compatibledevice = n.compatibledevice.split(",");
                        _.each(n.compatibledevice, function(m) {
                            arr.push({
                                "compatibledevice": _.trim(m)
                            });
                        })
                    })
                    arr = _.uniqBy(arr, 'compatibledevice');
                    $scope.showfilter.compatibledevice = arr;
                }
            }
            var arr2 = [];
            if ($scope.filters.compatiblewith == "" && data.filter.compatiblewith) {
                if (data.filter.compatiblewith.lenght > 1) {
                    _.each(data.filter.compatiblewith, function(n) {
                        n.compatiblewith = n.compatiblewith.split(",");
                        _.each(n.compatiblewith, function(m) {
                            arr2.push({
                                "compatiblewith": _.trim(m)
                            });
                        })
                    })
                    arr2 = _.uniqBy(arr2, 'compatiblewith');
                    $scope.showfilter.compatiblewith = arr2;
                }
            }
            // if ($scope.filters.brand == "" && data.filter.brand) {
            //     $scope.showfilter.brand = data.filter.brand;
            // }
            if ($scope.filters.microphone == "" && data.filter.microphone) {
                $scope.showfilter.microphone = data.filter.microphone;
            }
            if ($scope.filters.size == "" && data.filter.size) {
                $scope.showfilter.size = data.filter.size;
            }
            if ($scope.filters.clength == "" && data.filter.clength) {
                $scope.showfilter.clength = data.filter.clength;
            }
            if ($scope.filters.voltage == "" && data.filter.voltage) {
                $scope.showfilter.voltage = data.filter.voltage;
            }
            if ($scope.filters.capacity == "" && data.filter.capacity) {
                $scope.showfilter.capacity = data.filter.capacity;
            }
            if (data.filter.price && data.filter.price.min) {
                $scope.filters.pricemin = data.filter.price.min;
            }
            if (data.filter.price && data.filter.price.max) {
                $scope.filters.pricemax = data.filter.price.max;
            }
            console.log($scope.showfilter);
        }
    }

    $scope.brandid = $stateParams.brand;

    $scope.addMoreItems = function() {
        // console.log("lastpage=" + lastpage);
        // console.log("pageno=" + $scope.pageno);
        if ($scope.pageno <= lastpage) {
            ++$scope.pageno;
            NavigationService.getproductbybrand($scope.pageno, $stateParams.brand, $scope.filters, getproductbybrandcallback);
        }
    }

    // $scope.addMoreItems();

    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            var xyz = ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true,
                controller: 'ProductCtrl'
            });
            $timeout(function() {
                    xyz.close();
                }, 3000)
                //          $location.url("/cart");
            myfunction();
        });
    }

    $scope.clearFilters = function() {
        NavigationService.getFilters($stateParams.parent, $stateParams.brand, function(data) {
            if (data) {
                $scope.showfilter = data;
                if (data.compatibledevice && data.compatibledevice.length > 0) {
                    var arr = [];
                    _.each(data.compatibledevice, function(n) {
                        n.compatibledevice = n.compatibledevice.split(",");
                        _.each(n.compatibledevice, function(m) {
                            arr.push({
                                "compatibledevice": m
                            });
                        })
                    })
                    data.compatibledevice = arr;
                }
                if (data.compatiblewith && data.compatiblewith.length > 0) {
                    var arr = [];
                    _.each(data.compatiblewith, function(n) {
                        n.compatiblewith = n.compatiblewith.split(",");
                        _.each(n.compatiblewith, function(m) {
                            arr.push({
                                "compatiblewith": m
                            });
                        })
                    })
                    data.compatiblewith = arr;
                }
                $scope.filters.pricemin = data.price.min;
                $scope.filters.pricemax = data.price.max;
                $scope.pageno = 1;
                $scope.products = [];
                $scope.filters = {};
                $scope.filters.category = "";
                $scope.filters.color = "";
                $scope.filters.type = "";
                $scope.filters.material = "";
                $scope.filters.finish = "";
                $scope.filters.compatibledevice = "";
                $scope.filters.compatiblewith = "";
                $scope.filters.brand = "";
                $scope.filters.pricemin = "";
                $scope.filters.pricemax = "";
                $scope.filters.microphone = "";
                $scope.filters.size = "";
                $scope.filters.clength = "";
                $scope.filters.voltage = "";
                $scope.filters.capacity = "";

                NavigationService.getproductbybrand(1, $stateParams.brand, $scope.filters, getproductbybrandcallback);
            }
        });
    }

    $scope.clearFilters();

})
