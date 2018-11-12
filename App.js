import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View, Animated } from "react-native";

import { API_KEY } from "./src/utils/WeatherAPIKey";

import WeatherCard from "./src/components/WeatherCard";
import TitleCard from "./src/components/TitleCard";
export default class App extends React.Component {
  state = {
    isLoading: true,
    temperatureForSevenDays: [],
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: "Error Gettig Weather Condtions"
        });
      }
    );
  }

  fetchWeather(lat = 25, lon = 25) {
    fetch(`https://api.darksky.net/forecast/${API_KEY}/${lat},${lon}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperatureForSevenDays: json.daily.data.slice(0, 7),
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, temperatureForSevenDays } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching The Weather</Text>
        ) : (
          <View>
            <TitleCard style={{ marginTop: 20 }}/>
            <FlatList
              data={temperatureForSevenDays}
              style={{ marginTop: 20 }}
              keyExtractor={item => item.time}
              renderItem={({ item }) => <WeatherCard detail={item} />}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5f94f",
    alignItems: "center",
    justifyContent: "center"
  }
});
