import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { PointCounter } from '@/components/PointCounter';

export default function HomeScreen() {
  const [points1, setPoints1] = useState(20);
  const [points2, setPoints2] = useState(20);
  const [incrementSound, setIncrementSound] = useState();
  const [decrementSound, setDecrementSound] = useState();

  useEffect(() => {
    // Load sound effects
    async function loadSounds() {
      try {
        // Make sure audio is allowed to play
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
        });

        // Load increment sound
        const { sound: incrementSoundObject } = await Audio.Sound.createAsync(
          require('../../assets/sounds/add.wav'),
        );
        setIncrementSound(incrementSoundObject);

        // Load decrement sound
        const { sound: decrementSoundObject } = await Audio.Sound.createAsync(
          require('../../assets/sounds/lose.wav'),
        );
        setDecrementSound(decrementSoundObject);
      } catch (error) {
        console.log('Error loading sounds:', error);
      }
    }

    loadSounds();

    // Cleanup function to unload sounds when component unmounts
    return () => {
      if (incrementSound) {
        incrementSound.unloadAsync();
      }
      if (decrementSound) {
        decrementSound.unloadAsync();
      }
    };
  }, []);

  const incrementPoints = async(player: string) => {
    if (player === "1"){
      setPoints1(prevPoints => prevPoints + 1);
    } else {
      setPoints2(prevPoints => prevPoints + 1);
    }
    if (incrementSound) {
      await incrementSound.replayAsync();
    }
  };

  const decrementPoints = async (player: string) => {
    if (player === "1"){
      setPoints1(prevPoints => prevPoints - 1);
    } else {
      setPoints2(prevPoints => prevPoints - 1);
    }
    if (decrementSound) {
      await decrementSound.replayAsync();
    }
  };

  const decrementAllPoints = async () => {
    setPoints1(prevPoints => prevPoints - 1);
    setPoints2(prevPoints => prevPoints - 1);

    if (decrementSound) {
      await decrementSound.replayAsync();
    }
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

      <TouchableOpacity 
        style={styles.buttonDecrement} 
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
  space: {
    marginVertical: 20,
  }
});
