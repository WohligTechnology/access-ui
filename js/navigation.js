//var admin_url = "http://localhost/accessback/index.php/";
var admin_url = "http://wohlig.co.in/accessbackend/index.php/";
var adminhauth = admin_url + "hauth/";
//var adminbase = "http://localhost/accessback/";
var adminbase = "http://wohlig.co.in/accessbackend/";
var adminimage = adminbase + "uploads/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
	var navigation = [{
		name: "Brands",
		classis: "active",
		link: "#/brand",
		subnav: [{
			name: "Subnav1",
			classis: "active",
			link: "#/home"
        }, {
			name: "Subnav2",
			classis: "active",
			link: "#/home"
        }, {
			name: "Subnav3",
			classis: "active",
			link: "#/home"
        }]
    }, {
		name: "products",
		active: "",
		link: "#/product",
		classis: "active",
		subnav: []
    }, {
		name: "exclusive",
		active: "",
		link: "#/exclusive",
		classis: "active",
		subnav: []
    }, {
		name: "new arrivals",
		active: "",
		link: "#/new arrivals",
		classis: "active",
		subnav: []
    }, {
		name: "deals",
		active: "",
		link: "#/deals",
		classis: "active",
		subnav: []
    }, {
		name: "about us",
		active: "",
		link: "#/about",
		classis: "active",
		subnav: []
    }, {
		name: "contact",
		active: "",
		link: "#/contact",
		classis: "active",
		subnav: []
    }];

	var coupondetails = $.jStorage.get("coupon");

	return {
		getnav: function () {
			return navigation;
		},
		registeruser: function (account, callback) {
			return $http({
				url: admin_url + "json/registeruser",
				method: "POST",
				data: {
					'firstname': account.firstname,
					'lastname': account.lastname,
					'email': account.email,
					'password': account.password
				}
			}).success(callback);
		},
		seach: function (search) {
			return $http.post(admin_url + 'searchbyname?search=' + search, {}, {
				withCredentials: true
			});
		},
		authenticate: function () {
			return $http({
				url: admin_url + 'json/authenticate',
				method: "POST"
			});
		},
		getexclusiveandnewarrival: function (pageno, id, callback) {
			return $http.get(admin_url + 'json/getexclusiveandnewarrival?id='+id+'&pageno='+pageno, {}, {
				withCredentials: true
			}).success(callback);
		},
		getofferdetails: function (callback) {
			return $http({
				url: admin_url + 'json/getofferdetails',
				method: "POST"
			}).success(callback);
		},
		getaboutus: function (callback) {
			return $http({
				url: admin_url + 'json/getaboutus',
				method: "POST"
			}).success(callback);
		},
		getbrand: function (pageno, callback) {
			return $http.get(admin_url + 'json/getbrand?maxrow=12&pageno='+pageno, {}, {
				withCredentials: true
			}).success(callback);
		},
		forgotPassword: function (forgot, callback) {
			return $http.get(admin_url + 'json/forgotpassword', {
				data: {
					"email": forgot.email
				}
			}, {
				withCredentials: true
			}).success(callback);
		},
		getsubscribe: function (email, callback) {
			return $http.get(admin_url + 'json/getsubscribe?email='+email, {}, {
				withCredentials: true
			}).success(callback);
		},
		getproductdetails: function (id) {
			return $http.get(admin_url + 'json/getproductdetails?id=' + id, {}, {
				withCredentials: true
			});
		},
		search: function (search, callback) {
			return $http.get(admin_url + 'json/searchbyname?search=' + search, {}, {
				withCredentials: true
			}).success(callback);
		},
		getofferproducts: function (id, callback) {
			return $http.get(admin_url + 'json/getofferproducts?offerid=' + id, {}, {
				withCredentials: true
			}).success(callback);
		},

		getproductbybrand: function (id, pageno, callback) {
			return $http({
				url: admin_url + 'json/getproductbybrand',
				method: "POST",
				withCredentials: true,
				data: {
					"brandid": id,
					"pageno": pageno
				}
			}).success(callback);
		},
		newPassword: function (forgot) {
			return $http({
				url: admin_url + 'json/forgotpasswordsubmit',
				method: "POST",
				withCredentials: true,
				data: {
					'password': forgot.password,
					'hashcode': forgot.hashcode
				}
			});
		},
		getproductbycategory: function (pageno, parent, category, callback) {
			console.log(category);
			return $http.get(admin_url + 'json/getproductbycategory?parent='+category+'&category='+parent+'&pageno='+pageno, {}, {
				withCredentials: true
			}).success(callback);
			
		},
		usercontact: function (contact, callback) {
			return $http({
				url: admin_url + "json/usercontact",
				method: "POST",
				withCredentials: true,
				data: {
					"name": contact.name,
					"email": contact.email,
					"phone": contact.phone,
					"comment": contact.comment
				}
			}).success(callback);
		},
		updateuser: function (user, callback) {
			console.log(user);
			return $http({
				url: admin_url + "json/updateuser",
				method: "POST",
				withCredentials: true,
				data: {
					"id":$.jStorage.get("user").id,
					"firstname": user.firstname,
					"lastname": user.lastname,
					"billingaddress": user.billingaddress,
					"email": user.email,
					"phone": user.phone,
					"billingcity": user.billingcity,
					"billingpincode": user.billingpincode,
					"billingcountry": user.billingcountry,
					"billingstate": user.billingstate
				}
			}).success(callback);
		},
		logout: function (callback) {
			return $http.post(admin_url + 'json/logout', {
				withCredentials: true
			}).success(callback);
		},
		myorders: function (callback) {
			return $http.post(admin_url + 'json/getuserorders?user'+$.jStorage.get("user").id, {
				withCredentials: true
			}).success(callback);
		},
		getuserdetails: function (callback) {
			return $http.get(admin_url + 'json/getuserdetails', {}, {
				withCredentials: true
			}).success(callback);
		},
		getallcategory : function (callback) {
			return $http.get(admin_url + 'json/getallcategory', {}, {
				withCredentials: true
			}).success(callback);
		},
		loginuser: function (login, callback) {
			return $http({
				url: admin_url + "json/loginuser",
				method: "POST",
				withCredentials: true,
				data: {
					"email": login.email,
					"password": login.password
				}
			}).success(callback);
		},
		addtowishlist: function (productid, callback) {
			return $http({
				url: admin_url + "json/addtowishlist",
				method: "POST",
				withCredentials: true,
				data: {
					"user": $.jStorage.get("user").id,
					"product": productid
				}
			}).success(callback);
		},
		removefromwishlist: function (productid, callback) {
			return $http({
				url: admin_url + "json/removefromwishlist",
				method: "POST",
				withCredentials: true,
				data: {
					"user": $.jStorage.get("user").id,
					"product": productid
				}
			}).success(callback);
		},
		placeorder: function (form, callback) {
			return $http({
				url: admin_url + "json/placeorder",
				method: "POST",
				withCredentials: true,
				data: form
			}).success(callback);
		},
		getcart: function (callback) {
			return $http({
				url: admin_url + "json/showcart",
				method: "POST",
				withCredentials: true,
				data: {}
			}).success(callback);
		},
		getallproduct: function (pageno, callback) {
			return $http.get(admin_url + 'json/getallproducts?pageno=' + pageno, {}, {
				withCredentials: true
			}).success(callback);

		},
		addtocart: function (product, callback) {
			//            return $http({
			//                url: admin_url + "json/addtocart",
			//                method: "POST",
			//                withCredentials: true,
			//                data: product
			//            }).success(callback);

			return $http.get(admin_url + 'json/addtocart?product=' + product.product + '&productname=' + product.productname + '&price=' + product.price + '&quantity=' + product.quantity, {}, {
				withCredentials: true
			}).success(callback);

		},
		deletecart: function (id, callback) {
			return $http.get(admin_url + 'json/deletecart?id=' + id, {}, {
				withCredentials: true
			}).success(callback);
		},
		totalcart: function (callback) {
			return $http.post(admin_url + 'json/totalcart', {}, {
				withCredentials: true
			}).success(callback);

			//return cart;
		},
		getwishlistproduct: function (callback) {
			return $http({
				url: admin_url + "json/getwishlistproduct",
				method: "POST",
				withCredentials: true,
				data: {
					"user": $.jStorage.get("user").id
				}
			}).success(callback);
		},
		makeactive: function (menuname) {
			for (var i = 0; i < navigation.length; i++) {
				if (navigation[i].name == menuname) {
					navigation[i].classis = "active";
				} else {
					navigation[i].classis = "";
				}
			}
			return menuname;
		},
		getcoupondetails: function () {
			return coupondetails;
		},
		getuser: function () {
			return $.jStorage.get("user");
		},
		setcoupondetails: function (coupon) {
			$.jStorage.set("coupon", coupon);
			coupondetails = coupon;
		},
		getdiscountcoupon: function (couponcode) {
			return $http.post(admin_url + 'json/getdiscountcoupon?couponcode=' + couponcode, {}, {
				withCredentials: true
			});
		},
		gettotalcart: function (callback) {
			return $http.post(admin_url + 'json/totalitemcart', {}, {
				withCredentials: true
			}).success(callback);
			//return cart;
		},

	}
});