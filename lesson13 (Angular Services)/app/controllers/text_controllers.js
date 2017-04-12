app.controller("textCtrl", textCtrl);

textCtrl.$inject = ["$scope", "someFactory"];

function textCtrl($scope, someFactory) {

    $scope.copy = function() {
        someFactory.write($scope.textCopy);
        $scope.textCopy = '';
    }

}