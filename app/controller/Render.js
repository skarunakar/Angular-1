(function () {

    var app = angular.module('myRender', []);


     var myCtrl = function($scope,$http) {

    $scope.requestJson = function (dataSet) {
        window.performance.mark("startLoading");
        $http.get("http://127.0.0.1:8000?dataSet="+dataSet)
                        .then(function (response) {
                            $scope.id = dataSet;
                            $scope.myResponse = response.data;
                            $scope.myResponse = $scope.myResponse;
                            window.performance.mark("startLoad");
         });
        }
    $scope.update = function (dataSet) {
             window.performance.mark("startLoading");
             $http.get("http://127.0.0.1:3001?dataSet="+dataSet)
                 .then(function (response) {
                     $scope.id = dataSet;
                     $scope.myResponse = response.data;
                     $scope.myResponse = $scope.myResponse;
                     window.performance.mark("startLoad");
                 });
         }
    $scope.$watch("assignments", function (value) {
             if (window.performance.getEntriesByName("startLoad").length != 0) {
                 window.performance.mark("endLoading");
                 window.performance.measure("name", "startLoad", "endLoading");
                 var array = window.performance.getEntriesByType('measure');
                 console.log(array[array.length - 1].duration);
                 window.performance.clearMarks();
                 window.performance.clearMeasures();
             }

         });

     };
     app.controller("myCtrl", ["$scope","$http",myCtrl]);

}());