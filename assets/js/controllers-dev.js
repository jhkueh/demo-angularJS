
// Adds filters to app
angular.module('hn', ['filters']);

// Controller for displaying top 20 Posts (Ocy's wiki)
function TopListCtrl($scope, $http) {
	// replace URL in jsonp() for your own web API
  $http.jsonp('http://ocy1357.appspot.com/latest20.jsonp?callback=JSON_CALLBACK').success(function(data) {
    $scope.posts = data;
  }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
      $scope.status = status;	
  });
}

// This filters module takes a URL and splits it up into its hostname
angular.module('filters', []).
  filter('shortURL', function () {
    return function (text, length, end) {
      var getLocation = function(href) {
				var l = document.createElement("a");
				l.href = href;
				return l;
			};
      var url = getLocation(text);
        return url.hostname
    };
  });