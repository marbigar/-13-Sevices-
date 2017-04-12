app.controller("someCtrl", someCtrl);
someCtrl.$inject = ["$scope", "someFactory"];

function someCtrl($scope, someFactory) {
	
	$scope.hello = someFactory.getPrivate();
	$scope.year = someFactory.second;

}