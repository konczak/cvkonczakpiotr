"use strict";angular.module("konczakpiotrcvApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ngAnimate-animate.css"]).config(["$routeProvider",function(a){a.when("/allInOnePage",{templateUrl:"views/main.html",controller:"MainCtrl",resolve:{personalData:["personalData",function(a){return a.getPersonalData()}],socialLinks:["socialLinks",function(a){return a.getSocialLinks()}],courses:["courses",function(a){return a.getCourses()}],jobs:["jobs",function(a){return a.getJobs()}],mainSkills:["skills",function(a){return a.getMainSkills()}],categories:["skills",function(a){return a.getOtherSkills()}],projects:["projects",function(a){return a.getProjects()}],todos:["todo",function(a){return a.getTodos()}]}}).when("/personalDetails",{templateUrl:"views/personaldetails.html",controller:"PersonaldetailsCtrl",resolve:{personalData:["personalData",function(a){return a.getPersonalData()}],socialLinks:["socialLinks",function(a){return a.getSocialLinks()}]}}).when("/experiences",{templateUrl:"views/experiences.html",controller:"ExperiencesCtrl",resolve:{jobs:["jobs",function(a){return a.getJobs()}]}}).when("/skills",{templateUrl:"views/skills.html",controller:"SkillsCtrl",resolve:{mainSkills:["skills",function(a){return a.getMainSkills()}],categories:["skills",function(a){return a.getOtherSkills()}]}}).when("/education",{templateUrl:"views/education.html",controller:"EducationCtrl",resolve:{courses:["courses",function(a){return a.getCourses()}]}}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectsCtrl",resolve:{projects:["projects",function(a){return a.getProjects()}]}}).when("/todo",{templateUrl:"views/todo.html",controller:"TodoCtrl",resolve:{todos:["todo",function(a){return a.getTodos()}]}}).otherwise({redirectTo:"/personalDetails"})}]).factory("moment",function(){return{parse:moment}}).run(["$rootScope",function(a){a.$on("$routeChangeStart",function(){a.loadingView=!0}),a.$on("$routeChangeSuccess",function(){a.loadingView=!1})}]),angular.module("konczakpiotrcvApp").controller("MainCtrl",["$scope","personalData","socialLinks","courses","jobs","mainSkills","categories","projects","todos",function(a,b,c,d,e,f,g,h,i){a.vo={personalData:b,socialLinks:c,courses:d,jobs:e,mainSkills:f,categories:g,projects:h,showOthers:!1,todos:i}}]),angular.module("konczakpiotrcvApp").controller("PersonaldetailsCtrl",["$scope","personalData","socialLinks",function(a,b,c){a.vo={personalData:b,socialLinks:c}}]),angular.module("konczakpiotrcvApp").controller("ExperiencesCtrl",["$scope","jobs",function(a,b){a.vo={jobs:b}}]),angular.module("konczakpiotrcvApp").controller("SkillsCtrl",["$scope","mainSkills","categories",function(a,b,c){a.vo={mainSkills:b,categories:c,showOthers:!1}}]),angular.module("konczakpiotrcvApp").controller("EducationCtrl",["$scope","courses",function(a,b){a.vo={courses:b}}]),angular.module("konczakpiotrcvApp").controller("MenuCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("konczakpiotrcvApp").factory("courses",["$q","$timeout","$http",function(a,b,c){return{getCourses:function(){var d=a.defer();return b(function(){c.get("data/courses.json").success(function(a){d.resolve(a.courses)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").filter("showMoreWhenTooLong",function(){return function(a,b,c,d,e){if(!a)return"";if(!b)return a;if(d=parseInt(d,10),!d)return a;if(a.length<=d)return a;if(a=a.substr(0,d),c){var f=a.lastIndexOf(" ");-1!==f&&(a=a.substr(0,f))}return a+(e||"...")}}),angular.module("konczakpiotrcvApp").factory("personalData",["$q","$timeout","$http",function(a,b,c){return{getPersonalData:function(){var d=a.defer();return b(function(){c.get("data/personaldata.json").success(function(a){d.resolve(a)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").factory("socialLinks",["$q","$timeout","$http",function(a,b,c){return{getSocialLinks:function(){var d=a.defer();return b(function(){c.get("data/sociallinks.json").success(function(a){d.resolve(a)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").factory("skills",["$q","$timeout","$http",function(a,b,c){function d(a){return a>=75?"success":a>=50?"info":a>=25?"warning":"danger"}return{getMainSkills:function(){var e=a.defer();return b(function(){c.get("data/skillsmain.json").success(function(a){var b=a.skills;angular.forEach(b,function(a){a.type=d(a.percent)}),e.resolve(b)})},30),e.promise},getOtherSkills:function(){var e=a.defer();return b(function(){c.get("data/skillsother.json").success(function(a){var b=a.categories;angular.forEach(b,function(a){angular.forEach(a.skills,function(a){a.type=d(a.percent)})}),e.resolve(b)})},30),e.promise}}}]),angular.module("konczakpiotrcvApp").factory("projects",["$q","$timeout","$http",function(a,b,c){return{getProjects:function(){var d=a.defer();return b(function(){c.get("data/projects.json").success(function(a){d.resolve(a.projects)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").factory("jobs",["$q","$timeout","$http",function(a,b,c){return{getJobs:function(){var d=a.defer();return b(function(){c.get("data/jobs.json").success(function(a){d.resolve(a.jobs)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").controller("ProjectsCtrl",["$scope","projects",function(a,b){a.vo={projects:b}}]),angular.module("konczakpiotrcvApp").controller("NavigationCtrl",["$scope","$location",function(a,b){function c(){var a=g.indexOf(b.path());return 0>=a||a>=g.length?!1:!0}function d(){var a=g.indexOf(b.path());return 0>a||a>=g.length-1?!1:!0}function e(){var a=g.indexOf(b.path());0>a||a>=g.length||0!==a&&(a--,b.path(g[a]))}function f(){var a=g.indexOf(b.path());0>a||a>=g.length||a!==g.length-1&&(a++,b.path(g[a]))}a.vo={};var g=["/personalDetails","/education","/experiences","/projects","/skills","/todo","/allInOnePage"];a.vo.openPrevious=e,a.vo.openNext=f,a.vo.hasPrevious=c,a.vo.hasNext=d}]),angular.module("konczakpiotrcvApp").controller("TodoCtrl",["$scope","todos",function(a,b){a.vo={todos:b}}]),angular.module("konczakpiotrcvApp").factory("todo",["$q","$timeout","$http",function(a,b,c){return{getTodos:function(){var d=a.defer();return b(function(){c.get("data/todo.json").success(function(a){d.resolve(a.todos)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").controller("FooterCtrl",["$scope","metadata",function(a,b){a.vo={version:null},b.getMetadata().then(function(b){a.vo.version=b.version})}]),angular.module("konczakpiotrcvApp").factory("metadata",["$q","$timeout","$http",function(a,b,c){return{getMetadata:function(){var d=a.defer();return b(function(){c.get("data/metadata.json").success(function(a){d.resolve(a)})},30),d.promise}}}]),angular.module("konczakpiotrcvApp").controller("HeadingCtrl",["$scope","moment","metadata",function(a,b,c){a.vo={updatedAt:null},c.getMetadata().then(function(c){a.vo.updatedAt=b.parse(c.date,"DD/MM/YYYY").format("dddd, Do MMMM YYYY")})}]);