angular.module("madLibs", [])
.controller("madLibsCtrl", function($scope){

	$scope.form = {
		playerName : '',
		jobTitle : '',
		dirtyTask : '',
		tediousTask : '',
		celebrity:'',
		uselessSkill : '',
		adjective : '',
		hugeNumber : '',
		obnoxiuousCelbertity : ''
	}

	$scope.gender = 'male';
	$scope.pronoun = "he";
	$scope.pronounPossessive = "his";

	$scope.genderChange = function(){
		if( $scope.gender == 'male'){
			$scope.pronoun = "he";
			$scope.pronounPossessive = "his";
		} else {
			$scope.pronoun = "she";
			$scope.pronounPossessive = "her";
		}
	}

	$scope.submitMadLibsForm = function(){
		if( $scope.madLibsForm.$valid ) {
			$scope.filled = true;
		}else{
			$scope.filled = false;
		}
	}

	$scope.filledChange = function(){
		if ( $scope.filled == true ){

			$scope.form = {};
			$scope.madLibsForm.$setPristine();
			$scope.madLibsForm.$setUntouched();
			
			$scope.filled = false;
		}else {
			$scope.filled = true;
		}
	}
	

});