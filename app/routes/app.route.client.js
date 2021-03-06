module.exports = function (app) {
	const clientController = require('../controller/app.controller.client');
	
	app.route('/clients')
		.get(clientController.getClients)
		.post(clientController.addClient)
		.delete(clientController.delClient)
		.put(clientController.modifyClient)
};