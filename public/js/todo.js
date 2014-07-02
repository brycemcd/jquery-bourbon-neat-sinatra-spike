// TODO app

var todoApp = angular.module('todoApp', []);

todoApp.factory('Todo', function() {
  return [
    { text: 'dink around with angular', done: false},
    { text: 'take shower', done: false},
    { text: 'learn to talk to girls', done: false}
  ];
});

todoApp.factory('CitiBikeStations', function() {
  // TODO: figure out how to request live data
  return window.citibike.stationBeanList;
});

todoApp.directive('selectStation', function() {
    return {
      restrict: "A",
      scope: { stationName: "&" },
      link: function(scope) {
        console.log(scope);
      }
    };
});

function TodoCtrl($scope, Todo, CitiBikeStations) {
  $scope.todos = Todo;
  $scope.stations = CitiBikeStations;

  $scope.addTodo = function() {
    todoObj = {text: $scope.todo.text, done: $scope.todo.done}
    $scope.todos.push( todoObj );
    $scope.todo.text = '';
    $scope.todo.done = false;
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) $scope.todos.push(todo);
    });
  };
}
