import { PropsWithChildren } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

export function PointCounter({ points, decrementPoints, incrementPoints, id }: PropsWithChildren & { points: number, decrementPoints: Function, incrementPoints: Function, id: string }) {
  return (
    <ThemedView>
      <Text style={styles.pointsText}>Player {id}: {points}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => decrementPoints(id)}
          >
            <Text style={styles.buttonText}>- 1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => incrementPoints(id)}
          >
            <Text style={styles.buttonText}>+ 1</Text>
          </TouchableOpacity>
        </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  pointsText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});