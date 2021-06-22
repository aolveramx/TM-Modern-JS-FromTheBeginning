//13-Init Storage
const storage = new Storage();
//14-Get stored location data
const weatherLocation = storage.getLocationData();
//5-Initialize weather object
const weather = new Weather(wetherLocation.city, wetherLocation.state);
//8-Init UI
const ui = new UI();


//6-Get weather on DOM load
document.addEventListener('DomContentLoaded', getWeather);

//9-Chenage location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  //15-Change location
  weather.changeLocation(city, state);

  //16-Set location in LS
  storage.setLocationData(city, state);

  //10-Get and display weather
  getWeather();

  //11-Close modal with JQuery sintax just one line
  $('#locModal').modal('hide');
});

// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
    .then(result => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}