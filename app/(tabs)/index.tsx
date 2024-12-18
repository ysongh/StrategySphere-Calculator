import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [points1, setPoints1] = useState(20);
  const [points2, setPoints2] = useState(20);

  const incrementPoints = (player: number) => {
    if (player === 1){
      setPoints1(prevPoints => prevPoints + 1);
    } else {
      setPoints2(prevPoints => prevPoints + 1);
    }
  };

  const decrementPoints = (player: number) => {
    if (player === 1){
      setPoints1(prevPoints => prevPoints - 1);
    } else {
      setPoints2(prevPoints => prevPoints - 1);
    }
  };

  const resetPoints = () => {
    setPoints1(20);
    setPoints2(20);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Player 1: {points1}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => decrementPoints(1)}
        >
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => incrementPoints(1)}
        >
          <Text style={styles.buttonText}>+ 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.space} ></View>

      <Text style={styles.pointsText}>Player 2: {points2}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => decrementPoints(2)}
        >
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => incrementPoints(2)}
        >
          <Text style={styles.buttonText}>+ 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.space} ></View>
      <View style={styles.space} ></View>
      <View style={styles.space} ></View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={resetPoints}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
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
  space: {
    marginVertical: 20,
  }
});
