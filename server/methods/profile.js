Meteor.methods({
    updateProfile: function(name){
	check(name, String);
	Meteor.users.update({_id: this.userId},{$set: {"profile.name": name}});
    }
});
	
