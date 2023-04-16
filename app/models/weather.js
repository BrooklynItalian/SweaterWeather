/* Global Variables */
// Personal API Key for OpenWeatherMap
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=c32d4e75c940c91960e45ca82d20a306&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Function to Update UI dynamically
const updateUI = async () =>
{
  const req = await fetch('/all')
  try
  {
    const allData = await req.json()
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
  }
  catch (error)
  {
    console.log("error",error)
  }
}
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', startGet);
/* Function called by event listener */
function startGet(e)
{
  let zip = document.getElementById('zip').value;
  let feelings = document.getElementById('feelings').value;
  getWeather(baseURL, zip, apiKey)
  .then (function(weatherData)
  {
    console.log(weatherData)
    postData('/addData', {temp:weatherData.main.temp, date:newDate, content:feelings})
    updateUI()
  })

}


/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, apiKey) =>
{
  const res = await fetch(baseURL+zip+apiKey)
  try
  {
    const weatherData = await res.json();
    return weatherData
  }
  catch (error)
  {
    console.log("error", error);
  }
}
/* Function to POST data */

const postData = async (url = '', data = {}) =>
{

  const res =  await fetch (url,
    {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  
  try {
      const newData = await res.json();
    }catch(error) {
    console.log("error", error);
    }
    
  }




/* Function to GET Project Data */
const retrieveData = async (url='') =>
{
  const req = await fetch(url);
  try {
  // Transform into JSON
  const allData = await req.json()
  return allData
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
