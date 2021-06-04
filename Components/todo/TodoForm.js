import React, { useState } from 'react'

import {StyleSheet,TextInput,View,Button} from 'react-native'


export default function TodoForm ({submitHandler}){
    const [text,setText] = useState('');
    const changeHandler = (val) =>{
        setText(val)
    }
    return(
        <View>
            <TextInput
                placeholder = "Your Todos.."
                style={styels.input}
                value={text}
                onChangeText={changeHandler}
            />
            <Button
                title='Add Todo'
                color='orange'
                onPress = {()=>submitHandler(text,setText)}
            />
        </View>
    )
}

const styels = StyleSheet.create({
    input:{
        marginBottom:10,
        borderBottomWidth:1,
        borderColor:'#ddd'
    }
})