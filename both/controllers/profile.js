ProfileController = AppController.extend({
  data: {
      user: null
  },
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});
ProfileController.helpers({
    isOauth: function(){
	var user = Meteor.users.findOne({_id: Meteor.userId()});
	if(user && user.services.google){
	    return true;
	}
	return false;
    }	
});
ProfileController.events({
    'click [data-action=changePassword]': function (event, template) {
	event.preventDefault();
	var oldPassword = template.$('input[name=oldPassword]').val();
	var newPassword = template.$('input[name=password]').val();
	Accounts.changePassword(oldPassword, newPassword, function(error, result){
	    if(!error){
		sAlert.success('Password changed');
	    }else{
		sAlert.error('Error! Try again');
	    }
	});
    },
    'click [data-action=updateProfile]': function (event, template) {
	event.preventDefault();
	var name = template.$('input[name=name]').val();
	Meteor.call('updateProfile',name, function(error, result){
	    if(!error){
		sAlert.success('Profile updated');
	    }else{
		sAlert.error('Error! Try again');
	    }
	});
    }
});
