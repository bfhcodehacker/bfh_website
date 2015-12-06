bfhApp.controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  var callTimeouts = function (array) {
    var totalTime = 0;
    for (i=0;i<array.length;i++) {
      totalTime = totalTime + array[i][1];
      $timeout(function (array) {
        $scope[array[0]] = !$scope[array[0]];
        console.log(array[0], $scope[array[0]]);
      }, totalTime, true, array[i]);
    };
  };

  var timeoutData = [];

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

    var timeoutData = [
      ['showWelcome', 2000],
      ['showWelcome', 2000],
      ['showOne', 2200],
      ['showOne', 2200],
      ['showTwo', 2200],
      ['showTwo', 2200],
      ['showThree', 2200]
    ];

    callTimeouts(timeoutData);
    //var totalTime = 0;
    //for (i=0;i<timeoutData.length;i++) {
    //  totalTime = totalTime + timeoutData[i][1];
    //  $timeout(function (timeoutData) {
    //    $scope[timeoutData[0]] = !$scope[timeoutData[0]];
    //  }, totalTime, true, timeoutData[i]);
    //}; 
  });  
}]);

bfhApp.controller('FireFlyCtrl', ['$scope', '$timeout', function($scope, $timeout) {

  angular.element(document).ready(function () {
    var numStars = 100;
    main = document.getElementById("main-page");
    var maxHeight = main.offsetHeight;
    var maxWidth = main.offsetWidth;
    var div = {}; 
    for (i=0;i<numStars;i++) {
      x = Math.round(Math.random()*maxWidth);
      y = Math.round(Math.random()*maxHeight);
      blink = Math.round(Math.random()*10 + 10);
      dist = Math.round(2.0*Math.exp(-Math.random()*4.0)+1);
      div = document.createElement("div");
      div.style.top = String(y) + "px";
      div.style.left = String(x) + "px";
      div.className = "fire-fly";   
      div.style.height = String(dist) + "px";
      div.style.width = String(dist) + "px";
      div.style.animation = "fire-fly-anime " + String(blink) + "s";
      div.style.animationIterationCount = "infinite";
      main.appendChild(div);
    };
    $scope.showBack = false;

    $timeout(function () {
      $scope.showBack=true; 
    }, 30000);
  });  
}]);


