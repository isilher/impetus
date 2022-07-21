import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { HealthData } from './src/HealthData';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});

// eslint-disable-next-line import/no-default-export
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Impetusio</Text>

      <HealthData />

      <StatusBar
        // eslint-disable-next-line react/style-prop-object
        style="auto"
      />
    </View>
  );
}
