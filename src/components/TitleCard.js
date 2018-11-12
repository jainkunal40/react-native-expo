import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, Card } from "react-native-elements";

export default class TitleCard extends Component {
  render() {
    return (
      <Card containerStyle={styles.card}>
        <Text style={styles.notes}>Best Weather</Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  notes: {
    fontSize: 18    
  }
});
