/**
 * Created by Tarun Das on 8/31/2014.
 */
var GroupController=angular.module('groupController',[]);

GroupController.controller('groupeAddController',function($scope){
    var groupDataStore=new IDBStore({
        storeName:"grouptable",
        onStoreReady:refreshTodo
    });
    function refreshTodo(){
        groupDataStore.getAll(setdata);
    };
    $scope.addGroup=function(){
        var group={
            groupName:$scope.groupName
        };
        groupDataStore.put(group,function(){
            refreshTodo();
        });
    };
   function setdata(data) {
       $scope.groups=data;
       alert("length: "+$scope.groups.length);
   };
});