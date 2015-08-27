var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
	var navigation = [{
		name: "Brands",
		classis: "active",
		link: "#/brands",
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
		link: "#/products",
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