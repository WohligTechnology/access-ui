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


.controller('ProductCtrl', function ($scope, TemplateService, NavigationService) {
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

    }, {
		image: "img/product/9.jpg",
		image1: "img/product/5.jpg",
		name: "nokia lumia",
		desc: "Many desktop publishing packages and web page editors now use Lorem Ipsum. ",
		price: "75000.00"

    }, {
		image: "img/product/10.jpg",
		image1: "img/product/5.jpg",
		name: "resmi 1s",
		desc: "sometimes by accident, sometimes on purpose (injected humour and the like. ",
		price: "47000.00"

    }, {
		image: "img/product/11.jpg",
		image1: "img/product/5.jpg",
		name: "micromax",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
		price: "41000.00"

    }];

})

.controller('CartCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("cart");
		$scope.menutitle = NavigationService.makeactive("Cart");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('LoginCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("login");
		$scope.menutitle = NavigationService.makeactive("Login");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('forgotpasswordCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("forgotpassword");
		$scope.menutitle = NavigationService.makeactive("Forgotpassword");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})

.controller('headerctrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
	})
	.controller('ProductdetailCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("productdetail");
		$scope.menutitle = NavigationService.makeactive("Productdetail");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
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
	})
	.controller('StorelocatorCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("storelocator");
		$scope.menutitle = NavigationService.makeactive("StoreLocator");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('AccountCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("account");
		$scope.menutitle = NavigationService.makeactive("Account");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})

.controller('AboutCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("about");
	$scope.menutitle = NavigationService.makeactive("About");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('BrandhoverCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("brandhover");
	$scope.menutitle = NavigationService.makeactive("Brandhover");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.slides = [
	  'img/brands/dell.png',
		'img/brands/apple.png',
		'img/brands/sony.png',
		'img/brands/beats.png'
	];
})

.controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("checkout");
		$scope.menutitle = NavigationService.makeactive("CheckOut");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('ExclusivehoverCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("exclusivehover");
		$scope.menutitle = NavigationService.makeactive("Exclusive");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})

.controller('BrandsCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("brand");
	$scope.menutitle = NavigationService.makeactive("Brands");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
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

});