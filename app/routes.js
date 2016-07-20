 // Setting up Routes.
    app.config(['$routeProvider', function ($routeProvider) {
      
       $routeProvider.when('/home', {
         templateUrl: 'view/home.html',
  
       })
       .otherwise({ redirectTo: '/home' });
    }]);
