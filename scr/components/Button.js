import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native'
import { useDispatch } from 'react-redux';
import { add, evaluate, remove } from '../redux/slices/calculate';

export function Button(props){
    const dispatch = useDispatch()
    return<Pressable style={styles.plain} onPress={()=>dispatch(add(props.children))}>
        <Text style={styles.textWhite}>{props.children}</Text>
        </Pressable>
    
}

export function ButtonAccent(props){
    const dispatch = useDispatch()
    return<Pressable style={styles.accent} onPress={()=>dispatch(add(props.children))}>
        <Text style={styles.textWhite}>{props.children}</Text>
        </Pressable>
}

export function ButtonEval(){
    const dispatch = useDispatch()
    return<Pressable style={styles.accent} onPress={()=>dispatch(evaluate())}>
        <Text style={styles.textWhite}>=</Text>
        </Pressable>
}

export function ButtonLight(props){
    const dispatch = useDispatch()
    return<Pressable style={styles.light} onPress={()=>dispatch(add(props.children))}>
        <Text style={styles.textWhite}>{props.children}</Text>
    </Pressable>
}

export function ButtonDel(){
    const dispatch = useDispatch()
    return<Pressable style={styles.light} onPress={()=>dispatch(remove())}>
        <Text style={styles.textWhite}>{'<<'}</Text>
    </Pressable>
}

export function ButtonLong(props){
    const dispatch = useDispatch()
    return<Pressable style={styles.long} onPress={()=>dispatch(add(props.children))}>
        <Text style={styles.textWhite}>{props.children}</Text>
    </Pressable>
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