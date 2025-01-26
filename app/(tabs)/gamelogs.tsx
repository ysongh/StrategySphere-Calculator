import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Define the type for a game log entry
interface GameLog {
  id: string;
  description: string;
  date: Date;
}

const sampleGameLogs: GameLog[] = [
  { 
    id: '1', 
    description: 'Defeated boss in Level 3', 
    date: new Date('2024-01-15T14:30:00') 
  },
  { 
    id: '2', 
    description: 'Completed side quest in Forest', 
    date: new Date('2024-01-16T10:45:00') 
  }
];

const GameLogs: React.FC = () => {
  // Render individual log item
  const renderLogItem = ({ item }: { item: GameLog }) => (
    <View style={styles.logItem}>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.date}>
        {item.date.toLocaleDateString()} {item.date.toLocaleTimeString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sampleGameLogs}
        renderItem={renderLogItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.header}>Game Logs</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
    textAlign: 'center'
  },
  logItem: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  description: {
    fontSize: 16,
    marginBottom: 5
  },
  date: {
    fontSize: 12,
    color: '#666'
  }
});

export default GameLogs;
