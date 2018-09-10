import React from 'react';
import Titles from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY = "dd429df59c3af64b3dc74095db796dde";
let myArray = [1,2,3];
for (var i = 0; i < myArray.length; i++) {
  return array[i]*2;
}

class App extends React.Component{
//set the state of the info we want
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault(); //prevent page form reloading
    const city = e.target.elements.city.value; //select the value we entered
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data)
      this.setState({ //set the state of the info we want
        temperature: data.main.temp, //where the data lives in the API Call
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      console.log(data)
      this.setState({ //set the state of the info we want
        temperature: undefined, //where the data lives in the API Call
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter values"
      });
    }
  }
  render(){
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
        //these are props that we define here so we can access them in Weather.js
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}

        />
      </div>
    );
  }
}

export default App;
