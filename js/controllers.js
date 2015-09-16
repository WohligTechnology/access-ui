angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'valdr', 'angular-flexslider', 'ngSanitize', 'ui-rangeSlider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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


.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $stateParams, $location) {
	$scope.template = TemplateService.changecontent("product");
	$scope.menutitle = NavigationService.makeactive("Product");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	var addtowishlistcallback = function (data, status) {
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
	$scope.addtowishlist = function (productid) {
		NavigationService.addtowishlist(productid, addtowishlistcallback);
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

	$scope.hoveringOver = function (value) {
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

	$scope.$watch('rate', function (val) {

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
	var getproductbycategorycallback = function (data, status) {
		console.log(data.queryresult);
		$scope.products = data.queryresult;
	}
	$scope.parent = $stateParams.parent;
	$scope.category = $stateParams.category;
	if ($scope.parent == 0 && $scope.category == 0) {
		console.log("no need ");
	} else {
		NavigationService.getproductbycategory($scope.parent, $scope.category).success(getproductbycategorycallback);
	}


	//GO TO PRODUCT DETAIL
	$scope.getproductdetails = function (productid) {
		$location.url("/productdetail/" + productid);

	}


	var getproductbybrandcallback = function (data, status) {
		$scope.products = data.queryresult;
	}
	$scope.brandid = $stateParams.brand;
	if ($scope.brandid == 0) {

	} else {
		NavigationService.getproductbybrand($scope.brandid, getproductbybrandcallback);
	}
	
	
	$scope.addtocart = function(product){
		console.log(product);
		var selectedproduct = {};
		selectedproduct.product = product.id;
		selectedproduct.productname = product.name;
		selectedproduct.price = product.price;
		selectedproduct.quantity = 1;
		NavigationService.addtocart(selectedproduct, function(data){
			console.log(data);
		});
	}
	

})

.controller('CartCtrl', function ($scope, TemplateService, NavigationService, $location) {
	$scope.template = TemplateService;
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("cart");
	$scope.menutitle = NavigationService.makeactive("Cart");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('LoginCtrl', function ($scope, TemplateService, NavigationService, $state, $location, $interval, $window) {

	console.log($state.current.name);
	$scope.template = TemplateService;
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("login");
	$scope.menutitle = NavigationService.makeactive("Login");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	//CREATE ACCOUNT
	$scope.account = {};

	var registerusercallback = function (data, status) {
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
	$scope.registeruser = function () {
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
	var getlogin = function (data, status) {
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
	$scope.userlogin = function (login) {
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
	var checktwitter = function (data, status) {
		if (data != "false") {
			$interval.cancel(stopinterval);
			ref.close();
			NavigationService.authenticate().success(authenticatesuccess);
		} else {

		}

	};

	var callAtIntervaltwitter = function () {
		NavigationService.authenticate().success(checktwitter);
	};
	var authenticatesuccess = function (data, status) {
		console.log(data);
		if (data != "false") {
			$.jStorage.set("user", data);
			user = data;
			$location.url("/app/home");
		}
	};

	$scope.facebooklogin = function () {
		ref = window.open(adminhauth + 'login/Facebook?returnurl=http://www.wohlig.com', '_blank', 'location=no');
		stopinterval = $interval(callAtIntervaltwitter, 2000);
		ref.addEventListener('exit', function (event) {
			NavigationService.authenticate().success(authenticatesuccess);
			$interval.cancel(stopinterval);
		});
	}
	$scope.googlelogin = function () {
		ref = window.open(adminhauth + 'login/Google?returnurl=http://www.wohlig.com', '_blank', 'location=no');
		stopinterval = $interval(callAtIntervaltwitter, 2000);
		ref.addEventListener('exit', function (event) {
			NavigationService.authenticate().success(authenticatesuccess);
			$interval.cancel(stopinterval);
		});
	}
})

.controller('forgotpasswordCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("forgotpassword");
	$scope.menutitle = NavigationService.makeactive("Forgotpassword");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	var forgotPasswordcallback = function (data, status) {
		console.log(data);
	}
	$scope.forgotPassword = function (email) {
		NavigationService.forgotPassword(email, forgotPasswordcallback);
	}
})

.controller('headerctrl', function ($scope, TemplateService, NavigationService, $location, $window) {

		// WISHLIST

		$scope.getwishlistproduct = function () {
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
		var logoutcallback = function (data, status) {
			console.log(data);
			if (data == "true") {
				console.log("flush");
				$.jStorage.flush();
				$scope.showlogindropdown = false;
				$location.url("/home");
				$window.location.reload();
			}
		}
		$scope.logout = function () {
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
	.controller('ProductdetailCtrl', function ($scope, TemplateService, NavigationService, $location, $stateParams) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("productdetail");
		$scope.menutitle = NavigationService.makeactive("Productdetail");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.productid = $stateParams.id;
		var getproductdetailscallback = function (data, status) {
			console.log(data);
		}
		NavigationService.getproductdetails($scope.productid).success(getproductdetailscallback);
		$scope.productdetail = [
   "img/product/6.jpg",
   "img/product/7.jpg",
   "img/product/8.jpg",
   "img/product/9.jpg",
   "img/product/10.jpg",
   "img/product/11.jpg",
   "img/product/13.jpg"
  ];
	})
	.controller('OrderhistoryCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("orderhistory");
		$scope.menutitle = NavigationService.makeactive("Orderhistory");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('ContactCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("contact");
		$scope.menutitle = NavigationService.makeactive("Contact");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		$scope.contact = {};
		var usercontactcallback = function (data, status) {
			console.log("before");
			console.log(data);
			console.log("aftr");
			if (data) {
				$scope.msgsuccess = "Successfully Submitted!!";
				$scope.msg = "";
				$scope.contact = {};
			} else {
				$scope.msg = "Invalid data try again!!";
				$scope.msgsuccess = "";
				$scope.contact = {};
			}
		}
		$scope.usercontact = function (contact) {
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
				$scope.contact = {};
			}

		}
	})
	.controller('StorelocatorCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("storelocator");
		$scope.menutitle = NavigationService.makeactive("StoreLocator");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('ResetpasswordCtrl', function ($scope, TemplateService, NavigationService, $stateParams) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("resetpassword");
		$scope.menutitle = NavigationService.makeactive("Resetpassword");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		$scope.forgot = [];
		$scope.forgot.hashcode = $stateParams.id;
		//  REDIRECT CHANGE PASSWORD STARTS
		var newPasswordSuccess = function (data, status) {
			if (data == '1') {
				$location.url("/login");
			} else {
				$scope.msg = "Sorry not able to change password..Try Again!";
			}
		}
		$scope.newPassword = function () {
			console.log($scope.forgot);
			NavigationService.newPassword($scope.forgot).success(newPasswordSuccess);
		}
	})
	.controller('AccountCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("account");
		$scope.menutitle = NavigationService.makeactive("Account");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.user = {};
		var updateusercallback = function (data, status) {
			console.log(data);
			if (data == "true") {
				$scope.msgsuccess = "Updated Successfully!";
				$scope.msgfailure = "";
				$scope.user = {};
			} else {
				$scope.user = {};
				$scope.msgfailure = "Sorry Try Again!";
				$scope.msgsuccess = "";
			}

		}
		$scope.updateuser = function (user) {
			NavigationService.updateuser(user, updateusercallback)
		}
	})
	.controller('AddwishCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("popwish");
		$scope.menutitle = NavigationService.makeactive("Addwish");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();


	})

.controller('AboutCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("about");
	$scope.menutitle = NavigationService.makeactive("About");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	var getaboutuscallback = function (data, status) {
		console.log(data);
		$scope.celebimages = data.queryresult;
		console.log($scope.celebimages);
	}
	NavigationService.getaboutus(getaboutuscallback);
})

.controller('NewarrivalsCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
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

	var getexclusiveandnewarrivalcallback = function (data, status) {
		console.log(data);
		$scope.products = data.queryresult;
		console.log($scope.products);
	}
	NavigationService.getexclusiveandnewarrival(getexclusiveandnewarrivalcallback);

	$scope.openModal = function (s) {
		console.log(s)
		ngDialog.open({
			template: 'views/content/popwish.html',
			scope: $scope
		});
	}

})



.controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService) {
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
	// SHOW LOGIN BLOCK

	$scope.checklogin = $.jStorage.get("user");
	$scope.showlogin = {};
	if ($scope.checklogin != null) {
		$scope.showlogin = false;
	} else {
		$scope.showlogin = true;
	}


	//register on login

	$scope.registerifnot = function () {
		if ($scope.openblock.radiovalue == "register") {
			$scope.register = true;
		} else {
			$scope.register = false;
		}
	}

	//continue billing

	$scope.continuebilling = function () {
		$scope.openblockvalue = true;
	}


	//continue shipping billing
	$scope.shippingbilling = function () {
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
				
			}else{
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
	
		$scope.placeorder = function(){
			console.log();
			
			NavigationService.placeorder($scope.checkout, function(data){
				console.log(data);
			});
			
		}
	
		// SHOW ONLY CHECKOUT
		//    console.log(openship);

})

.controller('DealsCtrl', function ($scope, TemplateService, NavigationService) {
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
	$scope.deals = [
		{
			imageprd: "img/product/iphone.jpg",
			imageprd2: "img/product/iphone6.jpg",
			descp: "Iphone6 cases and covers",
			imageoff1: "img/product/iphone6ho.jpg",
			imageoff2: "img/product/glass.jpg",
			descpoff: "Iphone cases and covers",
			price: "45,000.00"
  },
		{
			imageprd: "img/product/iphone.jpg",
			imageprd2: "img/product/iphone6.jpg",
			descp: "Iphone6 cases and covers",
			imageoff1: "img/product/iphone6ho.jpg",
			imageoff2: "img/product/glass.jpg",
			descpoff: "Iphone cases and covers",
			price: "45,000.00"
  }
 ];
	$scope.updeals = [
		{
			imageprd: "img/product/iphone.jpg",
			imageprd2: "img/product/iphone6.jpg",
			descp: "Iphone6 cases and covers",
			imageoff1: "img/product/iphone6ho.jpg",
			imageoff2: "img/product/glass.jpg",
			descpoff: "Iphone cases and covers",
			price: "45,000.00"
  }
 ];
})

.controller('DistributionCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("distribution");
	$scope.menutitle = NavigationService.makeactive("Distribution");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	var getbrandsuccess = function (data, status) {
		$scope.distributer = data.queryresult;
		console.log($scope.distributer);
	}
	NavigationService.getbrand(getbrandsuccess);

})

.controller('ExclusiveCtrl', function ($scope, TemplateService, NavigationService) {
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
	var getexclusiveandnewarrivalcallback = function (data, status) {
		console.log(data);
		$scope.products = data.queryresult;
		console.log($scope.products);
	}
	NavigationService.getexclusiveandnewarrival(getexclusiveandnewarrivalcallback);

})

.controller('BrandsCtrl', function ($scope, TemplateService, NavigationService, $location) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("brand");
	$scope.menutitle = NavigationService.makeactive("Brands");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	var getbrandsuccess = function (data, status) {
		$scope.brandimages = data.queryresult;
		console.log($scope.brandimages);
	}
	NavigationService.getbrand(getbrandsuccess);

	$scope.getproductbybrand = function (id) {
		$location.url("/product/" + 0 + "/" + 0 + "/" + id);
	}

})

.controller('WishlistCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("wishlist");
	$scope.menutitle = NavigationService.makeactive("Wishlist");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	// WISHLIST PRODUCTS

	var getwishlistproductcallback = function (data, status) {
		$scope.products = data.queryresult;
		console.log($scope.products);
	}
	NavigationService.getwishlistproduct(getwishlistproductcallback);

	// DELETE PRODUCT FROM WISHLIST
	var removefromwishlist = function (data, status) {
		console.log(data);
		if (data == 1) {
			ngDialog.open({
				template: 'views/content/deletewish.html',
				scope: $scope
			});
			NavigationService.getwishlistproduct(getwishlistproductcallback);
		}

	}
	$scope.removefromwishlist = function (productid) {
		NavigationService.removefromwishlist(productid, removefromwishlist);
	}

})

.controller('SearchresultCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("searchresult");
	$scope.menutitle = NavigationService.makeactive("SearchResult");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();


	$scope.products = [{
		image: "img/product/5.jpg",
		image1: "img/product/5.jpg",
		name: "Apple",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
		price: "47000.00"

    }, {
		image: "img/product/6.jpg",
		image1: "img/product/5.jpg",
		name: "Apple Macbook",
		desc: "This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
		price: "48000.00"

    }, {
		image: "img/product/7.jpg",
		image1: "img/product/5.jpg",
		name: "Apple air",
		desc: "but the majority have suffered alteration in some form. ",
		price: "42000.00"

    }, {
		image: "img/product/8.jpg",
		image1: "img/product/5.jpg",
		name: "samsung",
		desc: "distracted by the readable content of a page when looking at its layout. ",
		price: "72000.00"

    }];

})

.controller('submenuctrl', function ($scope, TemplateService, NavigationService, $rootScope, $location, $state) {
	console.log($state.current.name);
	$scope.template = TemplateService;
	$scope.submenuval = ['views/content/brandhover.html', 'views/content/producthover.html'];
	$scope.submenu = [];
	$scope.parent = {};
	$scope.category = {};

	$scope.getproductbycategory = function (parent, category) {
		console.log("parent" + parent + "   cate=" + category);
		$location.url("/product/" + parent + "/" + category + "/0");
	}
	$scope.showsubmenu = function (data) {
		console.log(data);
		$scope.submenu[data] = true;
	};
	$scope.hidesubmenu = function (data) {
		console.log(data);
		$scope.submenu[data] = false;
	};

	$scope.getproductbybrand = function (id) {
		$location.url("/product/" + 0 + "/" + 0 + "/" + id);
	}

});