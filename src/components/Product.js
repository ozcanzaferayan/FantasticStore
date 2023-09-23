import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Product = (props) => {
  const convertPriceToMillion = (price) => {
    return `$${price / 1000000}M`;
  };

  return (
    <View style={styles.productBox}>
      <Image style={styles.productImage} source={props.product?.image} />
      <Text style={styles.productName}>{props.product?.title}</Text>
      <Text style={styles.movie}>{props.product?.subtitle}</Text>
      <View style={styles.priceBox}>
        <Text style={styles.price}>
          {convertPriceToMillion(props.product?.price)}
        </Text>
        <TouchableOpacity onPress={() => alert("Al bunu lazım olur")}>
          <AntDesign name="plussquare" size={32} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productBox: {
    flex: 1,
    padding: 16,
    gap: 0,
    backgroundColor: "white",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 16,
  },
  productName: {
    fontSize: 22,
    fontFamily: "Poppins-Semibold",
    marginTop: 8,
  },
  movie: {
    fontSize: 18,
    fontFamily: "Poppins-Semibold",
    color: "gray",
  },
  productImage: {
    alignSelf: "center",
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    fontFamily: "Poppins-Semibold",
  },
});
