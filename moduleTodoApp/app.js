(function(){
  'use strict';

  angular.module("todoApp", [])
  .controller("displayController", todoListUpdate);

  todoListUpdate.$inject = ['$scope'];
  function todoListUpdate($scope){
    $scope.myTodoList = [];

    $scope.newItemAdded = function(){
      $scope.myTodoList.unshift($scope.newListItem);
      $scope.newListItem = "";
    };

  };

})();
