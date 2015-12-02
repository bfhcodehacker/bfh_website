bfhApp.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  angular.element(document).ready(function () {
    var numStars = 1000;
    main = document.getElementById("main-page");
    console.log(main);
    var maxHeight = main.offsetHeight;
    var maxWidth = main.offsetWidth;
    console.log('size', maxHeight, maxWidth);
    var div = {}; 
    for (i=0;i<numStars;i++) {
      x = Math.round(Math.random()*maxWidth);
      y = Math.round(Math.random()*maxHeight);
      blink = Math.round(Math.random()*10 + 2);
      dist = Math.round(2.0*Math.exp(-Math.random()*4.0)+1);
      div = document.createElement("div");
      div.style.top = String(y) + "px";
      div.style.left = String(x) + "px";
      div.className = "star";   
      div.style.height = String(dist) + "px";
      div.style.width = String(dist) + "px";
      div.style.animation = "star-blink " + String(blink) + "s";
      div.style.animationIterationCount = "infinite";
      main.appendChild(div);
    };
    $scope.showWelcome = false;
    $scope.showOne = false;
    $scope.showTwo = false;    
    $scope.showThree = false;
    $timeout(function () {
      $scope.showWelcome = true;
    }, 2000).then(function () {
      $timeout(function () {
        $scope.showWelcome = false;
      }, 2000).then(function () {
        $timeout(function () {
          $scope.showOne = true;
        }, 2000).then(function () {
          $timeout(function () {
            $scope.showOne = false;
          }, 2000).then(function () {
            $timeout(function () {
              $scope.showTwo = true;
            }, 2500).then(function () {
              $timeout(function () {
                $scope.showTwo = false;
              }, 2000).then(function () {
                $timeout(function () {
                  $scope.showThree = true; 
                },2000);
              });
            });
          });
        });
      });
    });
  });  
}]);
