import React, { Component } from "react";
import { StyleSheet, View, Text, Image ,ScrollView} from "react-native";
import TagEmabled from "../components/TagEmabled";
import TagActive from "../components/TagActive";
import CardNotes from "../components/CardNotes";
import CardAudio from "../components/CardAudio";
import CardReminder from "../components/CardReminder";

function Home(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.myNotesRow}>
        <Text style={styles.myNotes}>My Notes</Text>
        <View style={styles.rectangle1}>
          <Image
            source={require("../assets/images/15d382f942aa277b3349024eca2a1db12de35366.png")}
            resizeMode="cover"
            style={styles.rectangle}
          ></Image>
        </View>
      </View>
      <View style={styles.rectangle2}>
        <Text style={styles.searchAnything}>Search anything</Text>
      </View>
      <View style={styles.tagEmabledRow}>
        <TagEmabled style={styles.tagEmabled}></TagEmabled>
        <TagActive style={styles.tagActive}></TagActive>
        <TagActive style={styles.tagActive1}></TagActive>
        <TagActive style={styles.tagActive2}></TagActive>
      </View>
      <CardNotes style={styles.cardNotes}></CardNotes>
      <View style={styles.cardAudioStack}>
        <CardAudio style={styles.cardAudio}></CardAudio>
        <View style={styles.group}>
          <View style={styles.rectangle3}>
            <Text style={styles.create}>Create</Text>
          </View>
        </View>
      </View>
      <CardReminder style={styles.cardReminder}></CardReminder>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(251,252,255,1)",
    flex: 1
  },
  myNotes: {
    backgroundColor: "transparent",
    color: "rgba(50,50,50,1)",
    fontSize: 23
  },
  rectangle1: {
    height: 25,
    width: 25,
    backgroundColor: "transparent",
    marginLeft: 215,
    marginTop: 2
  },
  rectangle: {
    backgroundColor: "transparent",
    flex: 1
  },
  myNotesRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: 20,
    marginRight: 20
  },
  rectangle2: {
    height: 45,
    width: 335,
    borderRadius: 6,
    backgroundColor: "rgba(241,241,241,1)",
    marginTop: 26,
    marginLeft: 20
  },
  searchAnything: {
    backgroundColor: "transparent",
    color: "rgba(161,161,161,1)",
    fontSize: 15,
    marginTop: 12,
    marginLeft: 41
  },
  tagEmabled: {
    height: 34,
    width: 90,
    backgroundColor: "transparent"
  },
  tagActive: {
    height: 34,
    width: 93,
    backgroundColor: "transparent",
    marginLeft: 15
  },
  tagActive1: {
    height: 34,
    width: 67,
    backgroundColor: "transparent",
    marginLeft: 15
  },
  tagActive2: {
    height: 34,
    width: 76,
    backgroundColor: "transparent",
    marginLeft: 15
  },
  tagEmabledRow: {
    height: 34,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 20,
    marginRight: -16
  },
  cardNotes: {
    height: 199,
    width: 335,
    backgroundColor: "transparent",
    marginTop: 585,
    marginLeft: 20
  },
  cardAudio: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 143,
    width: 335,
    backgroundColor: "transparent"
  },
  group: {
    position: "absolute",
    top: 113,
    left: 205,
    height: 52,
    width: 129
  },
  rectangle3: {
    height: 52,
    width: 129,
    borderRadius: 30.5,
    shadowColor: "rgba(0,0,0,0.3280157342657343)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 21,
    shadowOpacity: 1,
    backgroundColor: "rgba(98,115,237,1)"
  },
  create: {
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 51
  },
  cardAudioStack: {
    width: 335,
    height: 165,
    marginTop: -369,
    marginLeft: 21
  },
  cardReminder: {
    height: 363,
    width: 335,
    backgroundColor: "transparent",
    marginTop: -555,
    marginLeft: 21
  }
});

export default Home;
