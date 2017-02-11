var app = angular.module('myApp',[]);
app.controller('ExampleController',function($scope) {
	$scope.checkalbum = album;
	});
var album = [
   	{
		albumname :"Ashoqui2",
		songs : 
		[
		{
			name:"Tum hi ho",
			singer:"Arijit Singh",
			lyrics:"xyz",
			composer:"Mithoon"
		 
		},
		{
			name:"Sun rha hai",
			singer:"Ankit Tiwari",
			lyrics:"",
			composer:"Ankit Tiwari"
		}
		]
	},
	{
		albumname :"Bhag Milkha Bhag",
		songs :
		[
		{
			name:"Theme Soong-Bhag Milkha",
			singer:"Mahadevan",
			lyrics:"",
			composer:"Mahadevan"
		 
		},
		{
			name:"Slow Motion",
			singer:"Sukhvinder",
			lyrics:"",
			composer:"Shankar Mahadevan"
		}
		]
	}
];
