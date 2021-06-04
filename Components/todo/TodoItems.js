import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
export default function TodoItem({ item,pressHandler }) {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      
       <View>
        <Text style={styles.item}>
          {item.text} 
        </Text>
       </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
  }
});