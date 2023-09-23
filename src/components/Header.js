import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
    padding: 16,
    fontSize: 32,
    fontFamily: "Poppins-Semibold",
  },
  headerBoldText: {
    color: "tomato",
  },
});
