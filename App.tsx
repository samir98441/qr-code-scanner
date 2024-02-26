import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Scanner from "./app/scanner/scanner";
import { ABC } from "./assets";

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <SafeAreaView style={{ ...styles.container, marginTop: 25 }}>
        <Scanner />
        {/* <ABC /> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
