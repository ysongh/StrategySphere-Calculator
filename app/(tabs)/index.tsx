import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [points, setPoints] = useState(20);

  const incrementPoints = () => {
    setPoints(prevPoints => prevPoints + 1);
  };

  const decrementPoints = () => {
    setPoints(prevPoints => prevPoints - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>Points: {points}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={decrementPoints}
        >
          <Text style={styles.buttonText}>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={incrementPoints}
        >
          <Text style={styles.buttonText}>+ 1</Text>
        </TouchableOpacity>
      </View>
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
});
