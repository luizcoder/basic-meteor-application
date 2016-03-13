DashboardController = AppController.extend({
  waitOn: function() {
      return [];
  },
  data: {
    data: null
  },
  onAfterAction: function () {
    Meta.setTitle('Dashboard');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
