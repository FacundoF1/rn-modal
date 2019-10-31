import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import Item from './src/components/Item';
import GoalInput from './src/components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Añadir nuevo Ingreso" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode} // bandera para mostrar el modal
        onAddGoal={addGoalHandler} // evento para añadir un nuevo 
        onCancel={cancelGoalAdditionHandler} // evento para cancelar el ingreso y poder  
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <Item
            item={itemData.item}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
