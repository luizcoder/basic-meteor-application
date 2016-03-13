AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    // Appearance
    showForgotPasswordLink: true,
});
AccountsTemplates.configure({
    texts: {
	title: {
	    signIn: "Sign In",
	    signUp: "Sign Up",
	},
	info: {
	    emailSent: "info.emailSent",
	    emailVerified: "info.emailVerified",
	    pwdChanged: "info.passwordChanged",
	    pwdReset: "info.passwordReset",
	    pwdSet: "info.passwordReset",
	}
    }
});
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
	_id: "username",
	type: "text",
	displayName: "username",
	required: true,
	minLength: 5,
    },
    {
	_id: 'email',
	type: 'email',
	required: true,
	displayName: "email",
	re: /.+@(.+){2,}\.(.+){2,}/,
	errStr: 'Invalid email',
    },
    pwd
]);

AccountsTemplates.configureRoute('resetPwd', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('forgotPwd', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});

/*
ServiceConfiguration.configurations.upsert(
    {
	service: "google"
    },
    {
	$set: {
	    clientId: Meteor.settings.public.google.oauth_key,
	    secret: Meteor.settings.public.google.oauth_secret
	}
    }
);
*/
