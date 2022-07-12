import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const HealthData: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Health data on Android not yet implemented</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
