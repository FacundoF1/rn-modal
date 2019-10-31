import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RemoveItem from './RemoveItem';
import GoalItem from './GoalItem';
const Item = props => {
    console.log(props);
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <GoalItem  
                    title={props.item.value}
                />
                <RemoveItem  
                    id={props.item.id}
                    onDelete={props.onDelete} 
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    }
});

export default Item;