var homeController = function(server){
		console.log('homeController listo');

		server.route('/')
		.get(function(req,res){
			if(req.user){
				var aName = req.user.displayName;
				res.render("home/index", {
					name : aName
				});
			}
			else{
				res.render('home/index');	
			}
		});
};

module.exports = homeController;