import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface TimerProps {
  initialTime?: number;
  onTimeUpdate?: (time: number) => void;
  autoStart?: boolean; // New prop to control auto-start behavior
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
  initialTime = 0,
  onTimeUpdate,
  autoStart = true // Default to true for auto-start
}) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(autoStart);
  
  // Start timer on mount if autoStart is true
  useEffect(() => {
    setIsRunning(autoStart);
  }, []); // Empty dependency array means this only runs once on mount
  
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime: number) => {
          const newTime = prevTime + 1;
          onTimeUpdate?.(newTime);
          return newTime;
        });
      }, 1000);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, onTimeUpdate]);
  
  const formatTime = (timeInSeconds: number): string => {
    const hours: number = Math.floor(timeInSeconds / 3600);
    const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
    const seconds: number = timeInSeconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const handleStartStop = (): void => {
    setIsRunning(!isRunning);
  };
  
  const handleReset = (): void => {
    setIsRunning(false);
    setTime(initialTime);
    onTimeUpdate?.(initialTime);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isRunning ? styles.stopButton : styles.startButton]}
          onPress={handleStartStop}
        >
          <Text style={styles.buttonText}>
            {isRunning ? 'Stop' : 'Start'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleReset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create<StylesType>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
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
