
app.controller("phnecntrl", function ($scope,numbereverfy) {
 
 $scope.phone='';
  $scope.verify = function () {
       
        numbereverfy.numberstatus($scope.phone).then(function (d) {
		//alert(d);
		console.log(d)
		$scope.phone=d.valid;
		alert($scope.phone);
	
		
        })
    }
});

app.factory("numbereverfy", function ($http, $q) {
    var fac = {};
    fac.numberstatus = function (phone) {
        var defered = $q.defer();
        $http({
            url:'http://apilayer.net/api/validate?access_key=d68405a522e5757db4cf11cd0c86f104&number='+phone,
            method: 'GET',
            
        }).success(function (d) {
            defered.resolve(d);
        }).error(function (e) {
            alert('Error!');
            defered.reject(e);
        })
        return defered.promise;
    }
    return fac;
});



			
			