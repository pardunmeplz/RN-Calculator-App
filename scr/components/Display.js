import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native'
import { useSelector } from 'react-redux';
import { useOrientation } from '../Orientation';

export default function Display()
{
    const orientation = useOrientation()
    const value = useSelector((state)=>state.calculate.value)
    return <View style={styles.view}>
        <ScrollView horizontal={orientation} vertical={!orientation}>
        <Text style={styles.text}>{value}</Text>
        </ScrollView>
    </View>
}

const styles=StyleSheet.create({
    view:{alignItems:'flex-end', justifyContent:'center', flex:1/5},
    text:{fontSize:80, color:'white'}
})