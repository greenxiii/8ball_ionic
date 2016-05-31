angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Answers) {
  $scope.answer = "Answer will appearing here";
  $scope.getRnd = function(){
    var min = 0;
    var max = Answers.all().length - 1;
    var rndId = Math.random() * (max - min) + min;
    $scope.answer = Answers.get(rndId)
  }
})

// .controller('ChatsCtrl', function($scope, Chats) {
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
