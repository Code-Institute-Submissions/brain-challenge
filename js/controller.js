angular.module('RouteControllers', [])
    
    .controller('HomeController', function($scope) {
        
    })
    .controller('ModalController', function($scope, $uibModalInstance) {
        $scope.goback = function() {
            $uibModalInstance.close('goback');
        }
    })
    .controller('MemoryController', function($scope) {
       
        $scope.scoreBox = "Memory Score";
        
    })
    .controller('ConundrumController', function($scope) {
        
        $scope.scoreBox = "Conundrum Score";

    })
    .controller('BoardController', function($scope) {
       
        $scope.scoreBox = "BoardSwap Score"; 
        
    })

    .controller('RegisterController', function($scope, UserAPIService) {
 
        $scope.registrationUser = {};
        var URL = "https://morning-castle-91468.herokuapp.com/";
 
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
            }
 
            UserAPIService.registerUser(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfully registered to Angular Todo");
                }).catch(function(err) {
                    alert("Oops! Something went wrong!");
                    console.log(err);
                });
        }
    });
