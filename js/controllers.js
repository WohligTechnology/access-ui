var globalfunction = {};
var globalvariable = {};
var myfunction = '';
var msg = "my al popup";

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'angular-flexslider', 'ngSanitize', 'ui-rangeSlider'])

.controller('AppCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.demo = "demo testing";
    myfunction = function() {
        NavigationService.gettotalcart(function(data) {
            $scope.totalcart = data;
        });
        NavigationService.totalcart(function(data) {
            $scope.amount = data;
        });
    }
    myfunction();
})

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


.controller('ProductCtrl', function($scope, TemplateService, NavigationService, ngDialog, $stateParams, $location) {
    $scope.template = TemplateService.changecontent("product");
    $scope.menutitle = NavigationService.makeactive("Product");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.pageno = 0;
    var lastpage = 1;
    $scope.products = [];
    $scope.dataload = "Loading ...";




    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            ngDialog.open({
                template: 'views/content/popwish.html',
                scope: $scope
            });
        } else if (data == "0") {
            ngDialog.open({
                template: 'views/content/wishexist.html',
                scope: $scope
            });
        } else {
            ngDialog.open({
                template: 'views/content/failure.html',
                scope: $scope
            });
        }
    }
    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
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


    //	if ($scope.parent == 0 && $scope.category == 0) {
    //		console.log("no need ");
    //	} else {
    //		NavigationService.getproductbycategory($scope.parent, $scope.category).success(getproductbycategorycallback);
    //	}
    //
    //	if ($scope.parent == 0 && $scope.category == 0 && $stateParams.brand == 0) {
    //		NavigationService.getallproduct(function (data) {
    //			console.log(data);
    //			$scope.products = data.queryresult;
    //		});
    //	}


    //GO TO PRODUCT DETAIL
    $scope.getproductdetails = function(productid) {
        $location.url("/productdetail/" + productid);

    }


    var getproductbybrandcallback = function(data, status) {
        _.each(data.queryresult, function(n) {
            $scope.products.push(n);
        });

        if ($scope.products == "") {
            $scope.dataload = "No data found";
        }
        lastpage = data.lastpage;
    }
    $scope.brandid = $stateParams.brand;



    $scope.addMoreItems = function() {
        if (lastpage != $scope.pageno) {
            ++$scope.pageno;
            if ($scope.brandid != 0) {
                NavigationService.getproductbybrand($scope.brandid, $scope.pageno, getproductbybrandcallback);
            } else if ($scope.parent != 0 || $scope.category != 0) {
                NavigationService.getproductbycategory($scope.pageno, $scope.parent, $scope.category).success(getproductbybrandcallback);
            } else {
                NavigationService.getallproduct($scope.pageno, getproductbybrandcallback);
            }
        }
    }

    $scope.addMoreItems();


    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = 1;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            //			$location.url("/cart");
            myfunction();
        });
    }


})

.controller('CartCtrl', function($scope, TemplateService, NavigationService, $location) {
    $scope.template = TemplateService;
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.nodata = 'Loading..';
	$scope.nodatafound = true;

    $scope.gettotalcartfunction = function() {
        NavigationService.totalcart(function(data) {
            $scope.totalcart = data;
        });
    }

    $scope.gettotalcartfunction();



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
        $.jStorage.set("discountamount", $scope.discountamount);
        $location.url("/checkout");
    }



    var coupondetails = {};
    $scope.ispercent = 0;
    $scope.isamount = 0;
    $scope.isfreedelivery = 0;
    $scope.discountamount = 0;
    var couponsuccess = function(data, status) {
        if (data == 'false') {
            $scope.validcouponcode = 0;
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

            if ($.jStorage.get("user")) {
                console.log("user exist");
                _.each(data, function(n) {
                    n.options = {};
                    n.options.realname = n.name;
                    n.options.image = n.image;
                });
            }

            $scope.cart = data;
            if (data == '') {
			  $scope.nodatafound = true;
                $scope.nodata = "No Data found.";
            }else{
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
            $scope.account = {};
        }

    }

    //LOGIN 
    $scope.login = {};
    var getlogin = function(data, status) {
        console.log(data);
        console.log("in login");
        $.jStorage.set("user", data);
        if (data != "false") {
            $scope.msg = "Login Successful";
            $location.url("/home");
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
        console.log(data);
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

    $scope.fastsearch = function(search) {
        $location.url("/searchresult/" + search);
    }


    globalfunction.cart = function() {
        NavigationService.totalcart(function(data) {
            console.log(data);
            globalvariable.totalcart = data;
            console.log(globalvariable.totalcart);
        });
    }

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

.controller('ProductdetailCtrl', function($scope, TemplateService, NavigationService, $location, $stateParams, ngDialog) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("productdetail");
    $scope.menutitle = NavigationService.makeactive("Productdetail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.productid = $stateParams.id;

    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else if (data == "0") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        }
    }

    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        }
    }

    $scope.addtocart = function(product) {
        console.log(product);
        var selectedproduct = {};
        selectedproduct.product = product.id;
        selectedproduct.productname = product.name;
        selectedproduct.price = product.price;
        selectedproduct.quantity = product.quantity;
        NavigationService.addtocart(selectedproduct, function(data) {
            console.log(data);
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            //			$location.url("/cart");
            myfunction();
        });
    }

    var getproductdetailscallback = function(data, status) {
        console.log(data);
        $scope.product = data;
        if (data.product.quantity >= 1) {
            $scope.availability = "In Stock";
        } else {
            $scope.availability = "Out of Stock";
        }

        $scope.product.product.img = $scope.product.productimage[0].image;
        $scope.product.product.quantity = 1;

        $scope.productdetail = [];
        _.each($scope.product.productimage, function(n) {
            $scope.productdetail.push(n.image);
        });

        console.log($scope.productdetail);

    }
    NavigationService.getproductdetails($scope.productid).success(getproductdetailscallback);


    $scope.onimgclick = function(img) {
        console.log(img);
        $scope.product.product.img = img;
    }
})

.controller('OrderhistoryCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("orderhistory");
    $scope.menutitle = NavigationService.makeactive("Orderhistory");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
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
            $scope.contact = {};
		   clearvalidation($scope.allvalidation);
        } else {
            $scope.msg = "Invalid data try again!!";
            $scope.msgsuccess = "";
            $scope.contact = {};
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

.controller('ResetpasswordCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
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
        NavigationService.newPassword($scope.forgot).success(newPasswordSuccess);
    }
})

.controller('AccountCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("account");
    $scope.menutitle = NavigationService.makeactive("Account");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.user = {};

    var updateusercallback = function(data, status) {
        console.log(data);
        if (data == "1") {
            $scope.msgsuccess = "User updated";
        } else {
            $scope.msgfailure = "fail to update"
        }

    }
    $scope.updateuser = function(user) {
        NavigationService.updateuser(user, updateusercallback)
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
    $scope.menutitle = NavigationService.makeactive("New Arrivals");
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
        console.log(data);
        $scope.products = data.queryresult;
        console.log($scope.products);
    }
    NavigationService.getexclusiveandnewarrival(2, getexclusiveandnewarrivalcallback);

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

    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else if (data == "0") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        }
    }
    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
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
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            //			$location.url("/cart");
            myfunction();
        });
    }


})



.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, ngDialog) {
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
    $scope.discount = 0;
    $scope.discount = $.jStorage.get("discountamount");
    $scope.login = {};
    $scope.showcontinue = false;
    $scope.openblock.radiovalue = "checkoutasguest";


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
            $scope.account = {};
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


    //continue shipping billing
    $scope.shippingbilling = function() {
        console.log("test billing");
        console.log($scope.openship.open);
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
            var check = formvalidation($scope.allvalidation);

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
            var check = formvalidation($scope.allvalidation);
        }

        if (check) {
            //					NavigationService.registeruser($scope.account, registerusercallback);
            console.log("all fill");

            $scope.paymentinfo = true;
        } else {
            $scope.msgregister = "Invalid data try again!!";
            $scope.msg = "";
            $scope.account = {};
        }


    }

    //		placeorder

    $scope.placeorder = function() {
        console.log();


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

    $scope.dealsimg = [];

    //    var getofferdetailscallback = function (data, status) {
    //        $scope.dealslide = data.offers;
    //        console.log($scope.dealslide);
    //        _.each($scope.dealslide, function (n) {
    //            $scope.dealsimg.push(n.image);
    //        }
    //    }
    //    NavigationService.getofferdetails(getofferdetailscallback);
    $scope.dealslide = [
        "img/product/iphone.jpg",
        "img/product/iphone6.jpg",
        "img/product/macbook.png",
        "img/product/iphone6ho.jpg",
        "img/product/glass.jpg"
    ];
    $scope.demo2 = {
        range: {
            min: 0,
            max: 10050
        },
        minPrice: 0,
        maxPrice: 10050
    };
    $scope.deals = [{
        imageprd: "img/product/iphone.jpg",
        imageprd2: "img/product/iphone6.jpg",
        descp: "Iphone6 cases and covers",
        imageoff1: "img/product/iphone6ho.jpg",
        imageoff2: "img/product/glass.jpg",
        descpoff: "Iphone cases and covers",
        price: "45,000.00"
    }, {
        imageprd: "img/product/iphone.jpg",
        imageprd2: "img/product/iphone6.jpg",
        descp: "Iphone6 cases and covers",
        imageoff1: "img/product/iphone6ho.jpg",
        imageoff2: "img/product/glass.jpg",
        descpoff: "Iphone cases and covers",
        price: "45,000.00"
    }];
    $scope.updeals = [{
        imageprd: "img/product/iphone.jpg",
        imageprd2: "img/product/iphone6.jpg",
        descp: "Iphone6 cases and covers",
        imageoff1: "img/product/iphone6ho.jpg",
        imageoff2: "img/product/glass.jpg",
        descpoff: "Iphone cases and covers",
        price: "45,000.00"
    }];
})

.controller('DistributionCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("distribution");
    $scope.menutitle = NavigationService.makeactive("Distribution");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    var getbrandsuccess = function(data, status) {
        $scope.distributer = data.queryresult;
        console.log($scope.distributer);
    }
    NavigationService.getbrand(getbrandsuccess);

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
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else if (data == "0") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        }
    }
    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
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
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            //			$location.url("/cart");
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
    var getbrandsuccess = function(data, status) {
        $scope.brandimages = data.queryresult;
        console.log($scope.brandimages);
    }
    NavigationService.getbrand(getbrandsuccess);

    $scope.getproductbybrand = function(id) {
        $location.url("/product/" + 0 + "/" + 0 + "/" + id);
    }

})

.controller('WishlistCtrl', function($scope, TemplateService, NavigationService, ngDialog) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("wishlist");
    $scope.menutitle = NavigationService.makeactive("Wishlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    // WISHLIST PRODUCTS

    $scope.getproductdetails = function(productid) {
        console.log(productid);
        $location.url("/productdetail/" + productid);

    }

    var getwishlistproductcallback = function(data, status) {
        $scope.products = data.queryresult;
        console.log($scope.products);
    }
    NavigationService.getwishlistproduct(getwishlistproductcallback);

    // DELETE PRODUCT FROM WISHLIST
    var removefromwishlist = function(data, status) {
        console.log(data);
        if (data == 1) {
            //			ngDialog.open({
            //				template: 'views/content/deletewish.html',
            //				scope: $scope
            //			});
            NavigationService.getwishlistproduct(getwishlistproductcallback);
        }

    }
    $scope.removefromwishlist = function(productid) {
        console.log(productid);
        NavigationService.removefromwishlist(productid, removefromwishlist);
    }

})

.controller('SearchresultCtrl', function($scope, TemplateService, NavigationService, $stateParams, ngDialog, $location) {
    $scope.template = TemplateService;
    $scope.template = TemplateService.changecontent("searchresult");
    $scope.menutitle = NavigationService.makeactive("SearchResult");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.getproductdetails = function(productid) {
        console.log(productid);
        $location.url("/productdetail/" + productid);

    }

    var addtowishlistcallback = function(data, status) {
        console.log(data);
        if (data == "true") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">your product has been Added to wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else if (data == "0") {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Already added to wishlist!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Oops something went wrong!!</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
        }
    }
    $scope.addtowishlist = function(productid) {
        if (NavigationService.getuser()) {
            NavigationService.addtowishlist(productid, addtowishlistcallback);
        } else {
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Login for wishlist</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
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
            ngDialog.open({
                template: '<div class="pop-up"><h5 class="popup-wishlist">Added to cart</h5><span class="closepop" ng-click="closeThisDialog(value);">X</span></div>',
                plain: true
            });
            //			$location.url("/cart");
            myfunction();
        });
    }


    NavigationService.search($stateParams.search, function(data) {
        console.log(data);
        $scope.products = data;
    });

})

.controller('submenuctrl', function($scope, TemplateService, NavigationService, $rootScope, $location, $state) {
    console.log($state.current.name);
    $scope.template = TemplateService;
    $scope.submenuval = ['views/content/brandhover.html', 'views/content/producthover.html'];
    $scope.submenu = [];
    $scope.parent = {};
    $scope.category = {};

    // Brand on hover

    var getbrandsuccess = function(data, status) {
        $scope.brandhover = data.queryresult;
    }
    NavigationService.getbrand(getbrandsuccess);



    $scope.getproductbycategory = function(parent, category) {
        console.log("parent" + parent + "   cate=" + category);
        $location.url("/product/" + parent + "/" + category + "/0");
    }
    $scope.showsubmenu = function(data) {
        console.log(data);
        $scope.submenu[data] = true;
    };
    $scope.hidesubmenu = function(data) {
        console.log(data);
        $scope.submenu[data] = false;
    };

    $scope.getproductbybrand = function(id) {
        $location.url("/product/" + 0 + "/" + 0 + "/" + id);
    }

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }

});