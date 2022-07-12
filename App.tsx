import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HealthData } from "./src/HealthData";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Impetusio</Text>

      <HealthData />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
