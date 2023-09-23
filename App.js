import { useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./src/screens/HomeScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./src/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Semibold": require("./src/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./src/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Light": require("./src/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-Thin": require("./src/fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-Medium": require("./src/fonts/Poppins/Poppins-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
