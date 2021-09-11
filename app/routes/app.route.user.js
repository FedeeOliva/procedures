module.exports = function (app) {
	const userController = require('../controller/app.controller.user');
	
	app.route('/user')
		.get(userController.getUsers)
		.delete(userController.delUser)
		.post(userController.addUser)
		.put(userController.modifyUser)
};