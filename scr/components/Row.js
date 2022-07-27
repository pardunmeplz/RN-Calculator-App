import React from 'react';
import {View, StyleSheet} from 'react-native'

export default function Row(props){
    return<View style={{flex:1/5, flexDirection:'row'}}>{props.children}</View>
}