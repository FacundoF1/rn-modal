import React from 'react';
import {StyleSheet, Button } from 'react-native';

const RemoveItem = props => {
console.log(props);
  return (
    <Button style={styles.btn} color="red" title="Eliminar" onPress={props.onDelete.bind(this, props.id)}></Button>
  );
};

const styles = StyleSheet.create({
  btn: {    
    flex: 1,
  }
});

export default RemoveItem;
