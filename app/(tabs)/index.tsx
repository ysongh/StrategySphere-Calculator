import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { PointCounter } from '@/components/PointCounter';

export default function HomeScreen() {
  const [points1, setPoints1] = useState(20);
  const [points2, setPoints2] = useState(20);

  const incrementPoints = (player: string) => {
    if (player === "1"){
      setPoints1(prevPoints => prevPoints + 1);
    } else {
      setPoints2(prevPoints => prevPoints + 1);
    }
  };

  const decrementPoints = (player: string) => {
    if (player === "1"){
      setPoints1(prevPoints => prevPoints - 1);
    } else {
      setPoints2(prevPoints => prevPoints - 1);
    }
  };

  const decrementAllPoints = () => {
    setPoints1(prevPoints => prevPoints - 1);
    setPoints2(prevPoints => prevPoints - 1);
  };

  const resetPoints = () => {
    setPoints1(20);
    setPoints2(20);
  };

  return (
    <View style={styles.container}>
      <PointCounter
        points={points1}
        decrementPoints={decrementPoints}
        incrementPoints={incrementPoints}
        id={"1"}
      />
      <View style={styles.space} ></View>

      <PointCounter
        points={points2}
        decrementPoints={decrementPoints}
        incrementPoints={incrementPoints}
        id={"2"}
      />

      <View style={styles.space} ></View>
      <View style={styles.space} ></View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={decrementAllPoints}
      >
        <Text style={styles.buttonText}>-1 All</Text>
      </TouchableOpacity>

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
