import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Product from "./src/components/Product";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {},
  container: {
    flexDirection: "row",
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
