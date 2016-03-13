Meteor.publish('userData', function(){
    return Meteor.users.find({_id: this.userId}, {'profile': 1, 'services.google.picture': 1, 'services.google.email': 1});
});
