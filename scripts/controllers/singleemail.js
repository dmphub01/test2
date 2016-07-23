

app.controller("emailctrl", function ($scope,emailverfy) {
 
 $scope.email=""
  $scope.verify = function () {
       
        emailverfy.emailstatus($scope.email).then(function (d) {
		alert(d);
           
        })
    }
});

app.factory("emailverfy", function ($http, $q) {
    var fac = {};
    fac.emailstatus = function (email) {
        var defered = $q.defer();
        $http({
            url: 'https://app.emaillistverify.com/api/verifEmail?secret=rEGTkYBCV9ca5LsoqO82l&email='+email,
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




			