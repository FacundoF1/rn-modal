import React from 'react';
import { View, Text, StyleSheet} from 'react-native'; 
const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    flex: 10,
  }
});

export default GoalItem;
