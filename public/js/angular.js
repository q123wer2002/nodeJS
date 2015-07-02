var todoList = angular.module('todoList',[]);

function mainController($scope,$http){
	$scope.formData = {};
	$scope.newData={};
	// when loading on the page, get all todos
	$http.get('/api/todos')
		.success(function(data){
			$scope.todos = data;
			console.log(data);
		})
		.error(function(data){
			console.warn("Error "+data);
		});
	// when submitting the add form, send the text to the node API
	$scope.createTodo = function(){
		$http.post('/api/todos',$scope.formData)
			.success(function(data){
				$scope.formData = {};
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data){
				console.warn("Error "+data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id){
		$http.delete('/api/todos/'+id)
			.success(function(data){
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data){
				console.warn("Error "+ data);
			});
	};

	// update todo list
	$scope.updateTodo = function(id){
		$http.put('/api/todos/'+id,$scope.newData)
			.success(function(data){
				$scope.newData={};
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data){
				console.warn("Error "+data);
			});
	};
}