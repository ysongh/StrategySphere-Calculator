import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface TimerProps {
  time: number;
  setTime: Function;
  onTimeUpdate?: (time: number) => void;
}

interface StylesType {
  container: ViewStyle;
  timerText: TextStyle;
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
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    padding: 5,
  },
});

export default Timer;
