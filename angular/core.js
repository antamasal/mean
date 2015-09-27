angular.module('MainApp', [])

function routerController($scope, $location) {
    $scope.userVisible = false;
    $scope.taskVisible = false;
	if ($location.$$absUrl.indexOf("user") > 0) {
			$scope.userVisible = true;
	} else {
		    $scope.taskVisible = true;
	}
}