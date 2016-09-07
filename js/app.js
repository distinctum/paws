// JavaScript Document


// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('animalApp', [])

.controller("PawsController", ['$scope', '$http',
    function ($scope, $http) {
    
	
	var url = 'http://testground.distinctweb.net/animals' + '?callback=JSON_CALLBACK';


	$http.jsonp(url).success(function(data) {
   
 		 $scope.posts = data; // response data 
  
  	     var AllPetsF = [];
		 var AllPetsM = [];
  
		angular.forEach($scope.posts, function(item){
			
			   if (item.gender == 'Female') {
					 angular.forEach(item.pets, function(item){
						 if (item.type == 'Cat' ) {
							AllPetsF.push(item.name);
						 }
				         })
				   }   
			    if (item.gender == 'Male') {
				   angular.forEach(item.pets, function(item){
					   if (item.type == 'Cat' ) {
							AllPetsM.push(item.name);
					   }
					
				         })
				   }

               })
			   
			   
		$scope.setsF = AllPetsF;
		$scope.setsM = AllPetsM;

  }).
  error(function (data) {
    $scope.data = "Request failed";
  });

	

	
 
}])

