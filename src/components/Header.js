import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { isPhone } from "../utils/isSpecificDevice";

const Header = () => {
  return (
    <Text style={styles.headerText}>
      <Text style={styles.headerBoldText}>Power</Text> at your Doorstep
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    textAlign: isPhone ? "left" : "center",
    padding: 16,
    fontSize: 32,
    fontFamily: "Poppins-Semibold",
  },
  headerBoldText: {
    color: "tomato",
  },
});
