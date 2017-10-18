angular.module('RouteControllers', [])
    .controller('HomeController', function($scope,$rootScope) {
        $scope.lib = true;

        $scope.initialize = function() {
          var uluru = {lat: 53.27745323628827, lng: -6.206167791540565};
          var map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: 53.27745323628827, lng: -6.206167791540565},
             zoom: 14, scrollwheel:  false
          });

          var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
       }    
       
       google.maps.event.addDomListener(window, 'load', $scope.initialize);   

       $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.username = $scope.user.username;
                $scope.email = $scope.user.email;
                alert('Hi '+$scope.username+'. Thanks for your message you can expect a reply to your email: '+ $scope.email)
 
               
                }else{
                	alert('Please try again!');
            }
        };



    });