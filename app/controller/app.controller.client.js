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