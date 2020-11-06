import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function CardNotes(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rectangle2}>
        <View style={styles.ovalRow}>
          <Svg viewBox="0 0 40 40" style={styles.oval}>
            <Path
              strokeWidth={0}
              fill="rgba(98,115,237,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M20.00 40.00 C31.05 40.00 40.00 31.05 40.00 20.00 C40.00 8.95 31.05 0.00 20.00 0.00 C8.95 0.00 0.00 8.95 0.00 20.00 C0.00 31.05 8.95 40.00 20.00 40.00 Z"
            ></Path>
          </Svg>
          <View style={styles.designSystemCollabColumn}>
            <Text style={styles.designSystemCollab}>
              Design System Collaboration
            </Text>
            <Text style={styles.nov20200238P}>24 Nov 2020, 02:38 PM</Text>
          </View>
        </View>
        <Svg viewBox="-0.5 -0.5 310 3" style={styles.line}>
          <Path
            strokeWidth={1}
            fill="transparent"
            stroke="rgba(245,245,245,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M0.50 0.50 L307.50 0.50 "
          ></Path>
        </Svg>
        <Text style={styles.tumDicereExorsusE}>
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
  rectangle2: {
    height: 199,
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
  oval: {
    height: 40,
    width: 40,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  designSystemCollab: {
    height: 19,
    width: 253,
    backgroundColor: "transparent",
    color: "rgba(52,52,52,1)",
    fontSize: 16
  },
  nov20200238P: {
    backgroundColor: "transparent",
    lineHeight: 20,
    color: "rgba(81,81,81,1)",
    fontSize: 12,
    marginTop: 4
  },
  designSystemCollabColumn: {
    width: 253,
    marginLeft: 14,
    marginTop: 1
  },
  ovalRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 14,
    marginRight: 14
  },
  line: {
    height: 3,
    width: 310,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 11,
    marginLeft: 14
  },
  tumDicereExorsusE: {
    height: 92,
    width: 307,
    backgroundColor: "transparent",
    lineHeight: 23,
    color: "rgba(83,83,83,1)",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 14
  }
});

export default CardNotes;
