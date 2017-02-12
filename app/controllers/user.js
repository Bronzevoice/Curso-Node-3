var User = require('../models/users');

var userController = function (server){

server.route('/logout')
    .get(function(req, res){
        req.logout();
        res.redirect('/');
    })

    server.route('/extra-data')

    .get(function (req, res) {
    	res.render('user/extra_data')
    })
    .post(function(req,res){
    	var user = new User ({
    		id_network : req.user.id, 
    		username : req.body.username,
    		email : req.body.email,
    		first_name : req.user.name.givenName,
    		last_name : req.user.name.familyName 
    	});
    	user.save(function(err){
    		if(err){
    			console.log(err);
    			return;
    		}
    	});
    	res.redirect('/')
    });


};


module.exports = userController;