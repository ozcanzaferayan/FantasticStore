import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Product from "../components/Product";
import { FlatList } from "react-native";

export default function HomeScreen() {
  const products = [
    {
      title: "One Ring",
      subtitle: "LOTR",
      price: 1000000,
      image: require("../images/one_ring.png"),
    },
    {
      title: "Book",
      subtitle: "Jumanji",
      price: 2000000,
      image: require("../images/jumanji.jpeg"),
    },
    {
      title: "Wand",
      subtitle: "Harry Potter",
      price: 500000,
      image: require("../images/wand.png"),
    },
    {
      title: "One Ring",
      subtitle: "LOTR",
      price: 1000000,
      image: require("../images/one_ring.png"),
    },
    {
      title: "Book",
      subtitle: "Jumanji",
      price: 2000000,
      image: require("../images/jumanji.jpeg"),
    },
    {
      title: "Wand",
      subtitle: "Harry Potter",
      price: 500000,
      image: require("../images/wand.png"),
    },
    {
      title: "One Ring",
      subtitle: "LOTR",
      price: 1000000,
      image: require("../images/one_ring.png"),
    },
    {
      title: "Book",
      subtitle: "Jumanji",
      price: 2000000,
      image: require("../images/jumanji.jpeg"),
    },
    {
      title: "Wand",
      subtitle: "Harry Potter",
      price: 500000,
      image: require("../images/wand.png"),
    },
    {
      title: "One Ring",
      subtitle: "LOTR",
      price: 1000000,
      image: require("../images/one_ring.png"),
    },
    {
      title: "Book",
      subtitle: "Jumanji",
      price: 2000000,
      image: require("../images/jumanji.jpeg"),
    },
    {
      title: "Wand",
      subtitle: "Harry Potter",
      price: 500000,
      image: require("../images/wand.png"),
    },
    {
      title: "One Ring",
      subtitle: "LOTR",
      price: 1000000,
      image: require("../images/one_ring.png"),
    },
    {
      title: "Book",
      subtitle: "Jumanji",
      price: 2000000,
      image: require("../images/jumanji.jpeg"),
    },
    {
      title: "Wand",
      subtitle: "Harry Potter",
      price: 500000,
      image: require("../images/wand.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>
        <Text style={styles.headerBoldText}>Power</Text> at your Doorstep
      </Text>
      <FlatList
        contentContainerStyle={styles.container}
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={(item) => item.title}
        numColumns={5}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
    gap: 16,
  },
  columnWrapper: {
    gap: 16,
  },
  headerText: {
    padding: 16,
    fontSize: 32,
    fontFamily: "Poppins-Semibold",
  },
  headerBoldText: {
    color: "tomato",
  },
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
