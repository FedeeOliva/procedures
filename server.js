const express = require('express');
// const crypto = require('crypto');

app = express();
app.use(express.json())
app.listen(3000,function(){console.log("API Inicializada en el Puerto:3000");});

const routes_user = require('./app/routes/app.route.user');
const routes_clients = require('./app/routes/app.route.client');

routes_user(app);
routes_clients(app);

module.exports=app;