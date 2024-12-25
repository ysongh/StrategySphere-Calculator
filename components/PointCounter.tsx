import { PropsWithChildren } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';

type pointData = {
  points: number,
  decrementPoints: Function,
  incrementPoints: Function,
  id: string,
};

export function PointCounter({ points, decrementPoints, incrementPoints, id }: PropsWithChildren & pointData) {
  return (
    <ThemedView>
      <View style={id === "2" ? styles.titleContainer : styles.upsideTitleContainer}>
        <Text style={styles.titleText}>Player: {id}</Text>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>{points}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.buttonDecrement} 
          onPress={() => decrementPoints(id)}
        >
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonIncrement} 
          onPress={() => incrementPoints(id)}
        >
          <Text style={styles.buttonText}>+ 1</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upsideTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ rotate: '180deg' }],
  },
  pointsContainer: {
    backgroundColor: '#FFD700',
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    marginVertical: 20,
    minWidth: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  pointsText: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200
  },
  buttonIncrement: {
    backgroundColor: '#30e3ca',
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center'
  },
  buttonDecrement: {
    backgroundColor: '#ff304f',
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8
  },
});