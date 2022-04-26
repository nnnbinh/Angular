angular
  .module("sportsStore")
  .constant("dataUrl","http://localhost:3000/api/test")
  .controller("sportsStoreCtrl", function ($scope,$http,dataUrl) {
    $scope.data = { };

    try {
      $http.get(dataUrl).success(function(data){
        $scope.data.products = data;
      }).error(function(error){
        $scope.data.error = error   
      })
    } catch (error) {
      $scope.data.error = error
    }
    
    // $scope.category = [
    //   ...new Set($scope.data.products.map((item) => item.category)),
    // ];
  });

  