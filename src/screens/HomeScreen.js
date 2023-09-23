import { StatusBar } from "expo-status-bar";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Product from "../components/Product";
import { FlatList } from "react-native";
import Header from "../components/Header";

export default function HomeScreen() {
  const products = [
    {
      title: "Lightsaber",
      subtitle: "Star Wars",
      image: require("../images/lightsaber.png"),
      price: "10000000",
    },
    {
      title: "One Ring",
      subtitle: "The Lord of the Rings",
      image: require("../images/one-ring.png"),
      price: "1000000",
    },
    {
      title: "Hoverboard",
      subtitle: "Back to the Future II",
      image: require("../images/hoverboard.png"),
      price: "2500000",
    },
    {
      title: "Ecto-1",
      subtitle: "Ghostbusters",
      image: require("../images/ecto-1.png"),
      price: "50000",
    },
    {
      title: "The Tesseract",
      subtitle: "The Avengers",
      image: require("../images/tesseract.png"),
      price: "100000000",
    },
    {
      title: "Golden Snitch",
      subtitle: "Harry Potter",
      image: require("../images/golden-snitch.png"),
      price: "500000",
    },
    {
      title: "DeLorean Time Machine",
      subtitle: "Back to the Future",
      image: require("../images/delorean-time-machine.png"),
      price: "1500000",
    },
    {
      title: "Ark of the Covenant",
      subtitle: "Indiana Jones and the Raiders of the Lost Ark",
      image: require("../images/ark-of-the-covenant.png"),
      price: "500000000",
    },
    {
      title: "Infinity Gauntlet",
      subtitle: "Avengers: Infinity War/Endgame",
      image: require("../images/infinity-gauntlet.png"),
      price: "1000000000",
    },
    {
      title: "Maltese Falcon",
      subtitle: "The Maltese Falcon",
      image: require("../images/maltese-falcon.png"),
      price: "10000000",
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <Header />
      <FlatList
        contentContainerStyle={styles.container}
        columnWrapperStyle={styles.columnWrapper}
        data={products}
        renderItem={({ item }) => <Product product={item} />}
        keyExtractor={(item) => item.title}
        numColumns={Platform.OS === "web" ? 3 : 2}
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
    alignSelf: "center",
    maxWidth: 800,
    width: "100%",
  },
  columnWrapper: {
    gap: 16,
  },
});
