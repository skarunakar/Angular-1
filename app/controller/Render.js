(function () {

    var app = angular.module('myRender', []);


     var myCtrl = function($scope,$http) {



        $scope.requestJson = function (dataSet) {
                    $http.get("http://127.0.0.1:8000?dataSet="+dataSet)
                        .then(function (response) {
                            $scope.myResponse = response.data;
                            $scope.myResponse = $scope.myResponse.var;
                   });
        }
     }

     app.controller("myCtrl", ["$scope","$http",myCtrl]);

}());