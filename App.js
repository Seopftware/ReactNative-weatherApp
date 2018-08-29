import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from'./Weather';

const API_KEY="e2ba3d8c096a5769bcaf8f19a872a48f";

export default class App extends Component {

  state ={
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        position => {
          this._getWeather(position.coords.latitude, position.coords.longitude)
        },
        error => {
          this.setState({
             error: error
          });
        }
    );
  }

  _getWeather = (lat, long) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
          this.setState({
              temperature:json.main.temp,
              name:json.weather[0].main,
              isLoaded: true
          })
      })
  }

  render() {
    const {isLoaded, error} = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
          {isLoaded ? <Weather/> : (
              <View style={styles.loading}>
                <Text style={styles.loadingText}>Getting the weather</Text>
                  {error ? <Text style={styles.errorText}>{error}</Text> : null}
              </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 40
  },
  errorText:{
    fontSize: 25,
    color:"red",
    marginBottom: 30
  }

});