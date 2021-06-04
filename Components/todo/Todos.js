
import React, { useState } from 'react'

import {StyleSheet,View,Text,ScrollView,FlatList} from 'react-native'
import Header from './Header'
import TodoItems from './TodoItems'
const Todos = () =>{
    const [todos,setTodos] = useState ([
      {text:'Do some native code',key:1},
      {text:'Solve some problem',key:2},
      {text:'watching movie',key:3},
      {text:'listening song',key:4},
      {text:'playing football',key:5},
      {text:'sleep',key:6},
      {text:'eat bargur',key:7},
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

   return(
    <View>
      <Header/>
        <View style={styles.content}>
          {/* todo from goes here */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
      </View> 
    </View>
   )
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff'
    },
    content:{
      padding:40
    },
    list:{
      marginTop:20
    }
  
  })

  export default Todos;