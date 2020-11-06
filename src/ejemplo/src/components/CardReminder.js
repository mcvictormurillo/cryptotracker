import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

function CardReminder(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle3}>
        <View style={styles.oval1Row}>
          <Svg viewBox="0 0 40 40" style={styles.oval1}>
            <Path
              strokeWidth={0}
              fill="rgba(77,201,146,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M20.00 40.00 C31.05 40.00 40.00 31.05 40.00 20.00 C40.00 8.95 31.05 0.00 20.00 0.00 C8.95 0.00 0.00 8.95 0.00 20.00 C0.00 31.05 8.95 40.00 20.00 40.00 Z"
            ></Path>
          </Svg>
          <View style={styles.designSystemCollab1Column}>
            <Text style={styles.designSystemCollab1}>
              Design System Collaboration
            </Text>
            <Text style={styles.nov20200238P1}>24 Nov 2020, 02:38 PM</Text>
          </View>
        </View>
        <Svg viewBox="-0.5 -0.5 310 3" style={styles.line1}>
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(245,245,245,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M0.50 0.50 L307.50 0.50 "
          ></Path>
        </Svg>
        <View style={styles.rectangle5}>
          <Image
            source={require("../assets/images/b2150b36404cf9df334603fec2e626a719b8346d.png")}
            resizeMode="cover"
            style={styles.rectangle4}
          ></Image>
        </View>
        <Text style={styles.tumDicereExorsusE1}>
          Tum dicere exorsus est laborum et via procedat oratio quaerimus
          igitur, quid sit. Si sine causa? quae fuerit causa, mox videro;
          interea hoc tenebo, si ob……
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rectangle3: {
    height: 363,
    width: 335,
    borderRadius: 7,
    shadowColor: "rgba(0,0,0,0.04400677447552447)",
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowRadius: 111,
    shadowOpacity: 1,
    backgroundColor: "rgba(255,255,255,1)"
  },
  oval1: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  designSystemCollab1: {
    height: 19,
    width: 253,
    backgroundColor: "transparent",
    color: "rgba(52,52,52,1)",
    fontSize: 16
  },
  nov20200238P1: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(81,81,81,1)",
    fontSize: 12,
    marginTop: 4
  },
  designSystemCollab1Column: {
    width: 253,
    marginLeft: 14,
    marginTop: 1
  },
  oval1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 14,
    marginRight: 14
  },
  line1: {
    height: 3,
    width: 310,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 11,
    marginLeft: 14
  },
  rectangle5: {
    height: 159,
    width: 307,
    backgroundColor: "transparent",
    marginTop: 16,
    marginLeft: 15
  },
  rectangle4: {
    backgroundColor: "transparent",
    flex: 1
  },
  tumDicereExorsusE1: {
    height: 74,
    width: 307,
    backgroundColor: "transparent",
    lineHeight: 23,
    color: "rgba(83,83,83,1)",
    fontSize: 15,
    marginTop: 18,
    marginLeft: 14
  }
});

export default CardReminder;
