bfhApp.controller('PuzzleOneCtrl', ['$scope', '$uibModal', '$location', function($scope, $uibModal, $location) {
  $scope.number = "";
  $scope.addNumber = function (num) {
    $scope.number = $scope.number + num;
    if ($scope.number === '12345') {
      $scope.open();
    };
  };
  $scope.clear = function () {
    $scope.number = "";
  };
  $scope.open = function () {
    $scope.modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/angular/templates/puzzles/partials/one.html',
      scope: $scope,
      controller: 'PuzzleOneCtrl'
    });
  };
  $scope.close = function () {
    $scope.modalInstance.close();
    $location.url('/puzzles/two');
  };
}]);

bfhApp.controller('PuzzleTwoCtrl', ['$scope', function($scope) {
  angular.element(document).ready(function () {
    var numStars = 100;
    main = document.getElementById("main-page");
    maxHeight = main.style.height;
    maxWidth = main.style.width;
    var div = {};
    for (i=0;i<numStars;i++) {
      x = Math.round(Math.random()*maxWidth);
      y = Math.round(Math.random()*maxHeight);
      div = document.createElement("div");
      div.style.top = y;
      div.style.left = x;
      div.className = "star";   
      console.log(div);  
      main.append(div);
    };
  });




}]);


