import React, { useState, useEffect } from 'react';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/en.json';


// async function getWeatherKey() {
//   return fetch('http://localhost:8080/api/weatherApiKey', {
//   })
//     .then(res => res.json())
//  }

 const AddData = () => {
  const [apiData, setApiData] = useState({});
  const [getZip, setGetZip] = useState('11228');
  const [zip, setZip] = useState('11228');
  // const [apiKey, setApiKey] = useState('');
  const apiKey = 'c32d4e75c940c91960e45ca82d20a306';
  // apiKey = getWeatherKey();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;

  // useEffect(() => {
  //   getWeatherKey().then((key) => {
  //     setApiKey(key);
  //   });
  // }, []);

  useEffect(() => {
    if (apiKey) {
      fetch(apiUrl) 
      //   {
      //   headers: {
      //     Authorization: `Bearer ${apiKey}`,
      //   },
      // })
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }
  }, [apiKey, apiUrl]);
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data));
  // }, [apiUrl]);

  const inputHandler = (event) => {
    setGetZip(event.target.value);
  };

  const submitHandler = () => {
    setZip(getZip);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="app">
      <header className="header d-flex justify-content-center align-items-center">
        <h2>React Weather App</h2>
      </header>
      <div className="container">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <div className="col-auto">
            <label htmlFor="location-name" className="col-form-label">
              Enter Location:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="location-name"
              className="form-control"
              onChange={inputHandler}
              value={getZip}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
            Search
          </button>
        </div>

        <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
          {apiData.main ? (
            <div className="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />

              <p className="h2">
                {kelvinToFarenheit(apiData.main.temp)}&deg; C
              </p>

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{apiData.name}</strong>
              </p>

              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i className="fas fa-temperature-low "></i>{' '}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{' '}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {' '}
                    <strong>{apiData.weather[0].main}</strong>
                  </p>
                  <p>
                    <strong>
                      {countries.getName(apiData.sys.country, 'en', {
                        select: 'official',
                      })}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default AddData;