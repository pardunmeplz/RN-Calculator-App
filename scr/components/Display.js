import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import { useSelector } from 'react-redux';

export default function Display()
{
    const value = useSelector((state)=>state.calculate.value)
    return <View style={styles.view}>
        <Text style={styles.text}>{value}</Text>
    </View>
}

const styles=StyleSheet.create({
    view:{alignItems:'flex-end', justifyContent:'center'},
    text:{fontSize:80, color:'white'}
})