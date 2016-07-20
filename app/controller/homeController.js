
// build Controller 

app.controller('buildCtrl', function ($scope,$http,$mdDialog, $mdMedia) {

  $http.get('data/options.php').then(function(response){
           $scope.options = response.data.build;
          // $scope.choices = response.data.buildchoice;
  });
       $scope.items =[ {
       names:"Website"},{
       names:"SEO"},{
       names:"Android"},{
       names:"iPhone"},{
       names:"Maintainence"},{
       names:"Enterprise Application"},{
       names:"Others"}
                        ];
   
   //logic - webadvance
  
   $scope.webadvance = [
   {
       names:"CMS "},{
       names:"E-commerce"},{
       names:"Corporate/Business"},{
       names:"Entertainment"},{
       names:"Non-Profit (NGO)"},{
       names:"Personal/Resume"},{
       names:"Technology"},{
       names:"Web application"}];
  

  //   $scope.items = [1,2,3,4,5];

      $scope.selected = [];
      $scope.val =[]; // for webadvance
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
   
   
    //for form
      $scope.showHints = true;
  







//dialogs

 $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };



  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like confirm your build Order?')
          .textContent('Just wait till we contact you in a while,just  Confirm your order\n ')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Confirm build order!')
          .cancel('Sounds like a scam');

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'Your custom build order has been placed. ';
      $scope.buildval = true;
      $scope.colormsg = "green";
      $scope.update(build);
   


    }, function() {
      $scope.status = 'Place it again! ';
      $scope.colormsg = "red";
    });
  };









// Form - data handling

 $scope.master = {};

      $scope.update = function(build) {
        $scope.master = angular.copy(build);
      };

      $scope.reset = function() {
        $scope.build = angular.copy($scope.master);
      };

      $scope.reset();
  



   // $scope.showweb = function(val){
       // if($scope.val
   // }

});

