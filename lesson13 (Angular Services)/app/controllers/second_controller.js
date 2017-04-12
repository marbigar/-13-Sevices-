app.controller("secondCtrl", secondCtrl);

secondCtrl.$inject = ["$scope", "someFactory"];

function secondCtrl($scope, someFactory) {
	
	$scope.hello = someFactory.getPrivate();
	$scope.info = someFactory.info;
	
}