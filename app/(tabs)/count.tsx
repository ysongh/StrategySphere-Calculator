import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { increment } from '../_layout';

export default function CountScreen() {
  const exampleData = useSelector(state => state.example.value);

  const dispatch = useDispatch();

  const updateData = () => {
    dispatch(increment());
  };

  return (
    <View style={{ marginTop: 40 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Count</ThemedText>
      </ThemedView>
      <Text style={styles.countText}>{exampleData}</Text>
      <Button onPress={updateData} title="Update" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  countText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
