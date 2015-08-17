var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
    var navigation = [{
        name: "about",
        classis: "active",
        link: "#/about",
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
        name: "brands",
        active: "",
        link: "#/brands",
        classis: "active",
        subnav: []
    }, {
        name: "product",
        active: "",
        link: "#/product",
        classis: "active",
        subnav: []
    }, {
        name: "service",
        active: "",
        link: "#/service",
        classis: "active",
        subnav: []
    }, {
        name: "gallery",
        active: "",
        link: "#/gallery",
        classis: "active",
        subnav: []
    }, {
        name: "event",
        active: "",
        link: "#/event",
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
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
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