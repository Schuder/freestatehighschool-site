"use strict";angular.module("webappApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/home",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/departments",{templateUrl:"views/departments.html",controller:"DepartmentsCtrl"}).when("/athletics",{templateUrl:"views/athletics.html",controller:"AthleticsCtrl"}).when("/calendar",{templateUrl:"views/calendar.html",controller:"CalendarCtrl"}).when("/staff/:sectionId?",{templateUrl:"views/staff.html",controller:"StaffCtrl"}).when("/finance",{templateUrl:"views/finance.html",controller:"FinanceCtrl"}).when("/services",{templateUrl:"views/services.html",controller:"ServicesCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("webappApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappApp").controller("HomeCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappApp").controller("DepartmentsCtrl",["$scope","$http",function(a,b){var c;b.get("data/departmentDescription.json").then(function(b){c=b.data,a.setDepartment("Default")}),a.setDepartment=function(b){a.activeDept=c[0];for(var d=0;d<c.length;d++)if(c[d].department===b){a.activeDept=c[d],console.log(a.activeDept);break}}}]),angular.module("webappApp").controller("AthleticsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappApp").controller("CalendarCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappApp").controller("StaffCtrl",["$scope","$http","$routeParams","$timeout",function(a,b,c,d){function e(a){var b,c=a.toLowerCase().split(" ");return b=c[1].length>7?c[0].substring(0,1)+c[1].replace("'","").substring(0,7):c[0].substring(0,1)+c[1].replace("'","")}function f(a){var b,c,d,f=[];if(a)for(var g=0;g<a.length;g++){b={name:a[g].department,staff:[]},c=a[g].staff,console.log(c);for(var h=0;h<c.length;h++)d=e(c[h]),b.staff.push({name:c[h],url:"http://fc.usd497.org/~"+d+"/",email:d+"@usd497.org",pos:{x:120*h*-1,y:120*g*-1}});f.push(b)}return f}d(function(){var a=c.sectionId;if(console.log(a),a){var b=$('[data-name="'+a+'"]').children(0);$("html, body").animate({scrollTop:b.position().top-50},1e3)}},500),a.$on("$routeChangeStart",function(){window.scrollTo(0,0)}),b.get("data/department.json").then(function(b){a.deptData=f(b.data)})}]),angular.module("webappApp").controller("FinanceCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappApp").controller("ServicesCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);