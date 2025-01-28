import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { increment } from '@/redux/exampleSlice';
import { addEvent } from '@/redux/gameSlice';

export default function CountScreen() {
  const exampleData = useSelector(state => state.example.value);
  const gameLogs = useSelector(state => state.game.logs);

  const dispatch = useDispatch();

  const updateData = () => {
    dispatch(increment());
  };

  const addNewEvent = () => {
    dispatch(addEvent({description: 'Test', time: new Date().toLocaleTimeString()}));
  };

  return (
    <View style={{ marginTop: 40 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Count</ThemedText>
      </ThemedView>
      <Text style={styles.countText}>{exampleData}</Text>
      <Button onPress={updateData} title="Update" />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Events</ThemedText>
      </ThemedView>
      {gameLogs.map((log, index) => (
        <Text key={index} style={styles.countText}>{log.description} {log.time}</Text>
      ))}
      <Button onPress={addNewEvent} title="Add Event" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
