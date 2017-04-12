app.controller("textPastCtrl", textPastCtrl);

textPastCtrl.$inject = ["$scope", "someFactory"];

function textPastCtrl($scope, someFactory) {

    $scope.paste = function () {
        $scope.textPaste = someFactory.read();
    }
	
}