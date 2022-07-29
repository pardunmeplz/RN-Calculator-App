import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { useSelector } from 'react-redux';
import { useOrientation } from '../Orientation';

export default function Display()
{
    const orientation = useOrientation()
    const value = useSelector((state)=>state.calculate.value)
    return <View style={landscapeAdjust()}>
        <Text style={styles.text} adjustsFontSizeToFit={true}>{value}</Text>
    </View>
}


function landscapeAdjust(orientation)
{
    if(orientation)
    {return styles.view}
    else
    {return {...styles.view, height:100}}
}

const styles=StyleSheet.create({
    view:{alignItems:'flex-end', justifyContent:'center', flex:1/5},
    text:{fontSize:80, color:'white'}
})