angular.module('Cvitae', [])
  .controller('CvitaeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.cvitae = {};
    
    $http.get('cvitae.json')
      .success(function (data) {
        $scope.cvitae = data;
      });
  }]);
