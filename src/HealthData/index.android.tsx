import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function HealthData() {
  return (
    <View style={styles.container}>
      <Text>Health data on Android not yet implemented</Text>
    </View>
  );
}
