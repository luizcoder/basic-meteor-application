Template.profile.rendered = function() {
    this.autorun(function(e){
	Meteor.defer(function(){
	    $('.collapsible').collapsible({
		accordion : false
	    });
	});
    });
};
