import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native'
import { useDispatch } from 'react-redux';
import { add, evaluate, remove } from '../redux/slices/calculate';

export function Button({children, style = 'plain'}){
    const dispatch = useDispatch()
    return<Pressable style={styles[style]} onPress={()=>dispatch(action(children))}>
        <Text style={styles[style].text}>{children}</Text>
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

const text = {fontSize:30} // Base Text style

// Base style for all buttons
const base = {
                flex:1/4,
                margin:5,
                borderRadius:500,
                alignItems:'center',
                justifyContent:'center'
            } 

// Different button variations
const styles = StyleSheet.create({ 
   plain  :{...base, backgroundColor:'#828282', text:{...text, color:'white'}},
   long  : {...base, backgroundColor:'#828282', text:{...text, color:'white'}, flex:1/2},
   accent :{...base, backgroundColor:'#a8e35b', text:{...text, color:'white'}},
   light  :{...base, backgroundColor:'#d4d4d4', text:{...text, color:'black'}},
})