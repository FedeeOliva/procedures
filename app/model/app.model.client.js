'user strict';

const pool = require('./app.dbconfig.js');

const Client = function (user) {
    this.id_user = user.id_user;
    this.username = user.username;
    this.password = user.password;
    this.creator = user.creator;
};

Client.getlistClients = function getlistClients(result){
    pool.query("call clients_s()", function (error, response) {
        if (error) {
            result(error);
        } else {
            result(null, response);
        }
    });
}

module.exports = Client;

