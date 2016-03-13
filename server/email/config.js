Meteor.startup(function() {
    process.env.MAIL_URL = Meteor.settings.mail_url;
    Accounts.emailTemplates.from = "Basic <basic@application.com>";
});
