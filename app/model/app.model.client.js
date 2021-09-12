'user strict';

const pool = require('./app.dbconfig.js');

const Client = function (client) {
    this.id_client = client.id_client;
    this.surname = client.surname;
    this.name = client.name;
    this.stock = client.stock;
};

Client.getlistClients = function getlistClients(result){
    pool.query("call client_s()", function (error, response) {
        if (error) {
            result(error);
        } else {
            result(null, response);
        }
    });    
}

Client.addClient = function addClient(body,result){
    pool.query("call client_i(?,?,?)", [body.surname,body.name,body.stock] ,
        function (error, response) {
            if (error) {
                result(error);
            } else {
                result(null, response);
            }
        });
    }

    Client.deleteClient = function deleteClient(id_client, result) {
        pool.query("call client_d(?)", id_client ,function (error, response) {
            if (error) {
                result(null, error);
            } else {
                result(null, response);
            }
        });
    };
    
    Client.modifyClient = function modifyClient(body, result) {      
        pool.query("call client_u(?,?,?,?)", [body.id_client,body.name,body.surname,body.stock] ,function (error, response) {
            if (error) {
                result(null, error);
            } else {
                result(null, response);
            }
        });
    };

module.exports = Client;

