var admin_url = "http://localhost/accessback/index.php/";
var adminhauth = admin_url + "hauth/";
var adminbase = "http://localhost/accessback/";
var adminimage = adminbase + "uploads/";
//var admin_url = "http://wohlig.co.in/accessback/admin/index.php/";
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
        getexclusiveandnewarrival: function (callback) {
                return $http({
                    url: admin_url + 'json/getexclusiveandnewarrival',
                    method: "POST"
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
        getbrand: function (callback) {
                return $http({
                    url: admin_url + 'json/getbrand',
                    method: "POST"
                }).success(callback);
            },
          forgotPassword: function(forgot,callback) {
            return $http.get(admin_url + 'json/forgotpassword', {
                data: {
                    "email": forgot.email
                }
            }, {
                withCredentials: true
            }).success(callback);
        }, 
        getproductdetails: function(id) {
            return $http.get(admin_url + 'json/getproductdetails', {
                data: {
                    "id": id
                }
            }, {
                withCredentials: true
            });
        },

          getproductbybrand: function(id,callback) {
            return $http({
                url: admin_url + 'json/getproductbybrand',
                method: "POST",
                withCredentials: true,
                data: {
                      "brandid": id
                }
            }).success(callback);
        },
        newPassword: function(forgot) {
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
        getproductbycategory: function(parent,category) {
            return $http({
                url: admin_url + 'json/getproductbycategory',
                method: "POST",
                withCredentials: true,
                data: {
                    'parent': parent,
                    'subcategory': category
                }
            });
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
        updateuser: function (user,callback) {
            return $http({
                url: admin_url + "json/updateuser",
                method: "POST",
                withCredentials: true,
                data: {
                    "id": $.jStorage.get("user").id,
                    "firstname": user.firstname,
                    "lastname": user.lastname,
                    "address": user.address,
                    "email": user.email,
                    "phone": user.phone,
                    "city": user.city,
                    "zipcode": user.zipcode,
                    "country": user.country,
                    "sameasbilling": user.sameasbilling,
                    "state": user.state,
                }
            }).success(callback);
        },
        logout: function (callback) {
            return $http.post(admin_url + 'json/logout', {
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

    }
});