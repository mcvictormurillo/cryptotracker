import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TagActive(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle1}>
        <Text style={styles.reminders1}>All Notes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle1: {
    height: 34,
    width: 90,
    borderRadius: 5,
    backgroundColor: "rgba(241,241,241,1)"
  },
  reminders1: {
    backgroundColor: "transparent",
    color: "rgba(52,52,52,1)",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 11
  }
});

export default TagActive;
