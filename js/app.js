var myApp = angular.module('BrainApp', ['ngRoute', 'RouteControllers', 'ui.bootstrap', 'ngSanitize', 'UserService'])

/* Controllers to pass the game instructions a modal box.
*  This was my beginners attempt, but I knew there was a way of
*  using controller.js to inject the code into a single controller.
*  The solution was implemented by Yoni Lavi at 
*  https://github.com/yoniLavi/brain-challenge/blob/master/js/controller.js
*  and thus cannot be included in this project. A pull request will be submitted 
*  to include the code in this project after the submission date.
*/
myApp.controller('demo1Controller', function($scope, $uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal1.html'
        })
    }
});

myApp.controller('demo2Controller', function($scope, $uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal2.html'
        })
    }
});

myApp.controller('demo3Controller', function($scope, $uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal3.html'
        })
    }
});
// routing configuration
myApp.config(function($routeProvider) {
 
    $routeProvider.when('/', {
        title: 'Welcome To Brain Challenge!',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/memorybox', {
        title: 'MemoryBox',
        templateUrl: 'templates/memorybox.html',
        controller: 'MemoryController'
    })
    .when('/conundrum', {
        title: 'Conundrum',
        templateUrl: 'templates/conundrum.html',
        controller: 'ConundrumController'
    })
    .when('/boardswap', {
        title: 'BoardSwap',
        templateUrl: 'templates/boardswap.html',
        controller: 'BoardController'
    })
    .when('/accounts/register', {
        title: 'Register/Login',
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});

// show route title on each page
myApp.run(['$rootScope', function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);