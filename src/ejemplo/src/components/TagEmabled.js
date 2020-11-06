import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function TagEmabled(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle}>
        <Text style={styles.reminders}>All Notes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle: {
    height: 34,
    width: 90,
    borderRadius: 5,
    backgroundColor: "rgba(98,115,237,1)"
  },
  reminders: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 11
  }
});

export default TagEmabled;
