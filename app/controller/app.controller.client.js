'use strict';

const Client = require('../model/app.model.client.js');

exports.getClients = function (request, response) {
	Client.getlistClients(function (error, Client) {
		if (error) {
			response.send(error);
		} else {
			response.json(Client[0]);
		}
	});
};

exports.addClient = function (request, response) {
	Client.addClient(request.body ,function (error, Client) {
		if (error) {
			response.send(error);
		} else {
			response.json(Client);
		}
	});
};

exports.delClient = function (request, response) {
	const body = request.body;
	Client.deleteClient(body.id_client, function (error, Client) {
		if (error) {
			response.send(error);
		} else {
			response.json(Client);
		}
	});
};

exports.modifyClient = function (request, response) {
	const body = request.body;
	Client.modifyClient(body, function (error, Client) {
		if (error) {
			response.send(error);
		} else {
			response.json(Client);
		}
	});
};
