
//var app = angular.module('app', []);
app.controller('regctrl', function($scope, $http) {

$scope.call=function(){

$http({
    method: 'POST',
    url: 'http://www.betabulls.net/dmphubservices/reg.php', 
    data: { 'fname': $scope.fname, 'lname': $scope.lname, 'email': $scope.email, 'password': $scope.password, 'oname': $scope.oname, 'mobile':$scope.mobile }
	
	
}).then(function(response) {
     console.log(response)
	 $scope.names = response;
});

}
 
/* $http.get("http://www.betabulls.net/dmphubservices/reg.php").success( function(response) {
                $scope.names = response;
            }); */
			
});

