import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native'
import { useDispatch } from 'react-redux';
import { add, evaluate, remove } from '../redux/slices/calculate';

export function Button({children, style = 'plain'}){
    const dispatch = useDispatch()
    return<Pressable style={styles[style]} onPress={()=>dispatch(action(children))}>
        <Text style={styles.textWhite}>{children}</Text>
        </Pressable>
    
}

function action(val) // decides what button does based on children
{
    switch(val)
    {
        case '<<': return remove()
        case '=' : return evaluate()
        default  : return add(val)
    }
}

const base = {
                flex:1/4,
                margin:5,
                borderRadius:500,
                alignItems:'center',
                justifyContent:'center'} // Base style for all buttons

const text = {fontSize:30}

const styles = StyleSheet.create({
   plain  :{...base, backgroundColor:'#828282'},
   long  :{...base, backgroundColor:'#828282', flex:1/2},
   accent :{...base, backgroundColor:'#a8e35b'},
   light  :{...base, backgroundColor:'#d4d4d4'},
   textWhite:{...text, color:'white'}
})