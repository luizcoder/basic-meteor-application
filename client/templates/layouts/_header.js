Template._header.onRendered(function(){
    this.autorun(function(){
	var user = Meteor.user();
	if(user){
	    Tracker.afterFlush(function(){
		$(".dropdown-button").dropdown({belowOrigin: true});
		$(".button-collapse").sideNav();
	    });
	}	
    });
});
