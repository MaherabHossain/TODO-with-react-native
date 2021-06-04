import React from 'react'

import {StyleSheet,View,Text} from 'react-native'

const Header = () =>(
    <View style={styles.header}>
        <Text style={styles.title}> My Todos</Text>
    </View>
)

const styles = StyleSheet.create({
    header:{
        height:80,
        backgroundColor:'orange',
        paddingTop:30
    },
    title:{
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        fontWeight: 'bold'
    
    }
})

export default Header;