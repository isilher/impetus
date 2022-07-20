import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import AppleHealthKit, {
  HealthKitPermissions,
  HealthValue,
} from 'react-native-health';

const permissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.StepCount],
  },
} as HealthKitPermissions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function HealthData() {
  const [stepCount, setStepCount] = useState(0);

  useEffect(() => {
    AppleHealthKit.initHealthKit(permissions, (error: string) => {
      /* Called after we receive a response from the system */

      if (error) {
        // eslint-disable-next-line no-console
        console.log('[ERROR] Cannot grant permissions!', error);
        return;
      }

      AppleHealthKit.getStepCount({}, (err: string, results: HealthValue) => {
        if (err) {
          Alert.alert(`Health kit error: ${err}`);
          return;
        }
        setStepCount(results.value || 0);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Steps today: {stepCount}</Text>
    </View>
  );
}
