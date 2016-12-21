var homeController = function(server){
		console.log('homeController listo');

		server.route('/')
		.get(function(req,res){
			if(req.user){
				var hola = req.user.displayName;
				console.log(hola);
				res.render("home/index", {
					name : hola
				});
			
			}
			else{
				res.render('home/index');	
			}
		});
};

module.exports = homeController;