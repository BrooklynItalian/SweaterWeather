const cors = require('cors');
module.exports = app => {
    const weather = require("../controllers/weather.controller.js");
  
    var router = require("express").Router();
  
    router.get('/', weather.key);
  
    app.use('/api/weatherApiKey', router);
  };