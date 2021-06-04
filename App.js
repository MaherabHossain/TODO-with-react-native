

import React, { useState } from 'react'

import {StyleSheet,View,Text,ScrollView,FlatList,TouchableOpacity, Alert,TouchableWithoutFeedback, Keyboard} from 'react-native'
import Todos from './Components/todo/Todos'
import Header from './Components/todo/Header'
import TodoItems from './Components/todo/TodoItems'
import TodoForm from './Components/todo/TodoForm'
const App = () =>{
 
  const [todos,setTodos] = useState ([
    
]);

// const pressHandle = key =>{
//   setTodos((prev)=>{
//     return prev.filter(todos=>todos.key != key)
//   })
// }

const pressHandler = (key) => {
  setTodos(prevTodos => {
    return prevTodos.filter(todos => todos.key != key);
  });
};

const submitHandler = (text,setText) => {
  if(text.length>3){
    setText('')
    setTodos((prev)=>{
      return[
        {text,key:Math.random().toString()},
        ...prev
      ]
    })
  }else{
    Alert.alert('Opps','Todos must be over 3 charecter long',[
      {text:'Understood'}
    ])
  }
}

const handelTouch = () =>{
  Keyboard.dismiss();
}
  
 return(
    <TouchableWithoutFeedback onPress={handelTouch}>
      <View style={styles.container}>
        <View>
          <Header/>
            <View style={styles.content}>
            <TodoForm 
              submitHandler = {submitHandler}
            />
              <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({ item }) => (
                  //  <Text>{item.text}</Text>
                  <TodoItems
                    item = {item}
                    pressHandler = {pressHandler}
                  />
                  )}
                />
              </View>
          </View> 
        </View>
      </View>
    </TouchableWithoutFeedback>
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


export default App;
