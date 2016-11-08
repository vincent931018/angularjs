var myApp = angular.module('myApp');

myApp.directive('start',[function(){

	return {
	    restrict:'AECM',
	    scope:true,
	    template:"<div><input type='checkbox'/>cwc</div>",
	    link:function(scope,element){
	    	element.bind('click',function(){
	    		console.log("我点击了指令！");
	    	});
	    },
	    replace:true
 	}
}]
)