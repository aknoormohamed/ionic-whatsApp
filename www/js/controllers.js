angular.module('starter.controllers', [])

.controller('CallCtrl', function($scope, Chats, $ionicTabsDelegate) {
    $scope.goForward = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    };
    $scope.chats = Chats.all();

})

.controller('ChatsCtrl', function($scope, Chats, $ionicTabsDelegate) {
    $scope.goForward = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    };
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, Chats, $ionicTabsDelegate, $cordovaContacts) {
    $scope.getAllContacts = function() {
       var data={fields:  [ 'displayName', 'name' ] }     
        $cordovaContacts.find(data).then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
            $scope.contacts = allContacts;
            console.log( $scope.contacts)
        })
    };
    $scope.getAllContacts ();
    $scope.goForward = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function() {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    };

    $scope.chats = Chats.all();

    $scope.settings = {
        enableFriends: true
    };
});
