import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { PointCounter } from '@/components/PointCounter';
import Popup from '@/components/Popup';
import Timer from '@/components/Timer';

export default function HomeScreen() {
  const [points1, setPoints1] = useState(20);
  const [points2, setPoints2] = useState(20);
  const [incrementSound, setIncrementSound] = useState();
  const [decrementSound, setDecrementSound] = useState();
  const [newGameSound, setNewGameSound] = useState();
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

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

        // Load decrement sound
        const { sound: newGameSoundObject } = await Audio.Sound.createAsync(
          require('../../assets/sounds/newgame.wav'),
        );
        setNewGameSound(newGameSoundObject);
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

  const incrementXPoints = async (player: string, amount: number) => {
    if (player === "1"){
      setPoints1(prevPoints => prevPoints + amount);
    } else {
      setPoints2(prevPoints => prevPoints + amount);
    }
    setIsPopupVisible(false);
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

  const decrementXPoints = async (player: string, amount: number) => {
    if (player === "1"){
      setPoints1(prevPoints => prevPoints - amount);
    } else {
      setPoints2(prevPoints => prevPoints - amount);
    }
    setIsPopupVisible(false);
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

  const resetPoints = async () => {
    setPoints1(20);
    setPoints2(20);

    if (newGameSound) {
      await newGameSound.replayAsync();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.pointContainer}>
        <PointCounter
          points={points1}
          decrementPoints={decrementPoints}
          incrementPoints={incrementPoints}
          id={"1"}
        />
      </View>

      <TouchableOpacity 
        style={styles.buttonPopup} 
        onPress={() => setIsPopupVisible(true)} 
      >
        <Text style={styles.buttonPopupText}>More</Text>
      </TouchableOpacity>

      <PointCounter
        points={points2}
        decrementPoints={decrementPoints}
        incrementPoints={incrementPoints}
        id={"2"}
      />

      <Timer />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity 
          style={styles.buttonDecrement} 
          onPress={decrementAllPoints}
        >
          <Text style={styles.buttonText}>-1 All</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={resetPoints}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      
      <Popup
        visible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
        closeButtonColor="#007AFF"
        decrementXPoints={decrementXPoints}
        incrementXPoints={incrementXPoints}
      />
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
  pointContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonPopup: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 80,
    alignItems: 'center'
  },
  buttonPopupText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 8
  },
  space: {
    marginVertical: 20,
  }
});
