//2-Create Weather class
class Weather {
  constructor(city, state) {
    this.apikey = '';
    this.city = city;
    this.state = state;
  }

  //3-Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  //4-Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}