exports.key = (req, res) => {
  res.send({ apiKey: 'c32d4e75c940c91960e45ca82d20a306' });
}

// const weatherModel = require("../models/weather.model.js");

// exports.add = async (req, res) => {
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   try {
//     const weatherData = await weatherModel.fetchWeatherData(req.body.zip);
//     weatherModel.storeWeatherData(weatherData);
//     res.send(weatherModel.getWeatherData());
//   } catch (error) {
//     console.log("error", error);
//     res.status(500).send({
//       message: "Failed to fetch weather data."
//     });
//   }
// };

// exports.find = (req, res) => {
//   res.send(weatherModel.getWeatherData());
// };