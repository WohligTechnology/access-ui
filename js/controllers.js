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


.controller('ProductCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
	$scope.template = TemplateService.changecontent("product");
	$scope.menutitle = NavigationService.makeactive("Product");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	
		$scope.openModal = function (s) {
		ngDialog.open({
			template: 'views/content/popwish.html',
			scope: $scope
		});
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

	$scope.products = [{
		image: "img/product/iphone.jpg",
		image1: "img/product/iphone2.jpg",
		name: "Tempered Glass Screen Protector for iPhone 6 Plus",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
		price: "47000.00"

    }, {
		image: "img/product/iphone6.jpg",
		image1: "img/product/iphone6ho.jpg",
		name: "Ultra Rugged Waterproof Case for iPhone 5/5s",
		desc: "This book is a treatise on the theory of ethics, very popular during the Renaissance. ",
		price: "48000.00"

    }, {
		image: "img/product/iphone6ho.jpg",
		image1: "img/product/glass2.jpg",
		name: "Apple air",
		desc: "Flexible Glass Screen Protector With Applicator for LG G4 ",
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
	.controller('ProductdetailCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService;
		$scope.template = TemplateService.changecontent("productdetail");
		$scope.menutitle = NavigationService.makeactive("Productdetail");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
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
	$scope.celebimages = [
            "img/BipashaBasu.jpg", "img/KarishmaKapoor.jpg", "img/MSG.jpg", "img/NicolasAnelka.jpg", "img/YusufPathan.jpg"
        ];
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

	$scope.openModal = function (s) {
		console.log(s)
		ngDialog.open({
			template: 'views/content/popwish.html',
			scope: $scope
		});
	}

})

//.controller('BrandhoverCtrl', function ($scope, TemplateService, NavigationService) {
//	$scope.template = TemplateService;
//	$scope.template = TemplateService.changecontent("brandhover");
//	$scope.menutitle = NavigationService.makeactive("Brandhover");
//	TemplateService.title = $scope.menutitle;
//	$scope.navigation = NavigationService.getnav();
//	$scope.brandhover = [
//	"img/brands/acmemade.jpeg",
//		"img/brands/adonit.png",
//		"img/brands/autodrive.png",
//		"img/brands/b&oplay.png",
//		"img/brands/beats.png",
//		"img/brands/dell.png",
//		"img/brands/Adidas.png",
//		"img/brands/dolcegabbana.jpg",
//		"img/brands/gas.jpg",
//		"img/brands/gstarraw.png",
//		"img/brands/hp.png",
//		"img/brands/jackjones.png",
//		"img/brands/levis.png",
//		"img/brands/motorola.png",
//		"img/brands/sony.png",
//		"img/brands/tommy.jpg"
//	];
//})

.controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("checkout");
	$scope.menutitle = NavigationService.makeactive("CheckOut");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
})

.controller('DealsCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("deals");
	$scope.menutitle = NavigationService.makeactive("Deals");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
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
})

.controller('DistributionCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("distribution");
	$scope.menutitle = NavigationService.makeactive("Distribution");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.distributer = [
		"img/brands/autodrive.png",
		"img/brands/hp.png",
		"img/brands/sony.png",
		"img/brands/b&oplay.png",
		"img/brands/beats.png",
		"img/brands/dell.png",
		"img/brands/Adidas.png",
		"img/brands/dolcegabbana.jpg",
		"img/brands/gas.jpg",
		"img/brands/acmemade.jpeg",
		"img/brands/gstarraw.png",
		"img/brands/adonit.png",
		"img/brands/jackjones.png",
		"img/brands/levis.png",
		"img/brands/motorola.png",
		"img/brands/tommy.jpg"
	];
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

	$scope.products = [{
		image: "img/product/5.jpg",
		image1: "img/product/5.jpg",
		name: "Tempered Glass Screen Protector for iPhone 6 Plus ",
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

.controller('BrandsCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("brand");
	$scope.menutitle = NavigationService.makeactive("Brands");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.brandimages = [
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

.controller('WishlistCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService;
	$scope.template = TemplateService.changecontent("wishlist");
	$scope.menutitle = NavigationService.makeactive("Wishlist");
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