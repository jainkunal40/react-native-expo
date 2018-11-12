import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Text, Card, Divider } from "react-native-elements";

export default class WeatherCard extends Component {
  render() {
    let toCelsius = f => (5 / 9) * (f - 32);
    // Create a new day from the passed date time
    var date = new Date(this.props.detail.time * 1000);
    var day = date.getDay();
    today = new Date().getDay();
    var dayOfWeek;
    if (today === day) {
      dayOfWeek = "Today";
    } else {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      dayOfWeek = days[day];
    }
    return (
      <Card containerStyle={styles.card}>
        <Text style={styles.notes}>{dayOfWeek}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri:
                "https://darksky.net/images/weather-icons/" +
                this.props.detail.icon +
                ".png"
            }}
          />
          <Text style={styles.time}>
            Max:{" "}
            {Math.round(toCelsius(this.props.detail.temperatureHigh) * 10) / 10}
            &#8451;
          </Text>
          <Text style={styles.time}>
            Min:{" "}
            {Math.round(toCelsius(this.props.detail.temperatureLow) * 10) / 10}
            &#8451;
          </Text>
        </View>

        <Divider style={{ backgroundColor: "#dfe6e9", marginVertical: 20 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.notes}>{this.props.detail.summary}</Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(56, 172, 236, 1)",
    borderWidth: 0,
    borderRadius: 0
  },
  time: {
    fontSize: 18,
    color: "#fff"
  },
  notes: {
    fontSize: 18,
    color: "#fff"
  }
});
