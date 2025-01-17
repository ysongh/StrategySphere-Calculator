import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface TimerProps {
  time: number;
  setTime: Function;
  onTimeUpdate?: (time: number) => void;
}

interface StylesType {
  container: ViewStyle;
  timerText: TextStyle;
  buttonContainer: ViewStyle;
  button: ViewStyle;
  startButton: ViewStyle;
  stopButton: ViewStyle;
  resetButton: ViewStyle;
  buttonText: TextStyle;
}

const Timer: React.FC<TimerProps> = ({ 
  time,
  setTime,
  onTimeUpdate,
}) => { 
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    
    intervalId = setInterval(() => {
      setTime((prevTime: number) => {
        const newTime = prevTime + 1;
        onTimeUpdate?.(newTime);
        return newTime;
      });
    }, 1000);
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [onTimeUpdate]);
  
  const formatTime = (timeInSeconds: number): string => {
    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
    const seconds: number = timeInSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
    </View>
  );
};

const styles = StyleSheet.create<StylesType>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Timer;
