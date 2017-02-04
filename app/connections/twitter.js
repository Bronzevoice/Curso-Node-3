/**var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;


var twitterConnection = function (server){
    passport.use(new TwitterStrategy({
        clientID: '',
        clientSecret: '',
        callbackURL: 'http://localhost:8000/auth/twitter/callback'
    }, function (accessToken, RefreshToken, profile, done){
        done(null, profile);
    }));

    server.get('/auth/twitter',passport.authenticate('twitter'));

    server.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect : '/' , failureRedirect :  '/error'}));
};

module.exports = twitterConnection;*/