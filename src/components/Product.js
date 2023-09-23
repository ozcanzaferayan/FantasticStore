import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Product = () => {
  return (
    <View style={styles.productBox}>
      <Image
        style={styles.productImage}
        // @ts-ignore
        source={require("../images/one_ring.png")}
      />
      <Text>One Ring</Text>
      <Text>LOTR</Text>
      <View style={styles.priceBox}>
        <Text>$1M</Text>
        <Text>$1M</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productBox: {},
  productImage: {
    width: 100,
    height: 100,
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
