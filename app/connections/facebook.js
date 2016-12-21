var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy;


var facebookConnection = function (server){
	passport.use(new FacebookStrategy({
		clientID: '1113131472117874',
		clientSecret: '171f6ceb613865d81aa5dcd11334d4dd',
		callbackURL: 'http://localhost:8000/auth/facebook/callback'
	}, function (accessToken, RefreshToken, profile, done){
		done(null, profile);
	}));
	
	server.get('/auth/facebook',passport.authenticate('facebook'));

	server.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect : '/' , failureRedirect :  '/error'}));
}; 

module.exports = facebookConnection;  