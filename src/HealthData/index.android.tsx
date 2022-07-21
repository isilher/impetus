import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export function HealthData() {
  return (
    <View style={styles.container}>
      <Text>Health data on Android not yet implemented</Text>
    </View>
  );
}
