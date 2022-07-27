/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import Row from './scr/components/Row';
import { Button, ButtonAccent, ButtonDel, ButtonEval, ButtonLight, ButtonLong} from './scr/components/Button';
import Display from './scr/components/Display';
import { useOrientation } from './scr/Orientation';
import { Provider } from 'react-redux';
import store from './scr/redux/Store';

function App() {

 const orientation = useOrientation();
  

  return (
    <Provider store={store}>
    <View style={{...styles.view, flexDirection:orientation?'column':'row-reverse', justifyContent:orientation?'flex-end':'space-around'}}>
      <Display/>
      <View style={orientation?{flex:0.6, justifyContent:'flex-end'}:{flexDirection:'column', flex:0.6, justifyContent:'center'}}>
      <Row>
              <ButtonLight>(</ButtonLight>
              <ButtonLight>)</ButtonLight>
              <ButtonDel/>
              <ButtonAccent>/</ButtonAccent>
      </Row>      
      <Row>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <ButtonAccent>x</ButtonAccent>
      </Row>
      <Row>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <ButtonAccent>-</ButtonAccent>
      </Row>
      <Row>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <ButtonAccent>+</ButtonAccent>
      </Row>
      <Row>
              <ButtonLong>0</ButtonLong>
              <Button>.</Button>
              <ButtonEval/>
      </Row>
      </View>
    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'flex-end'
  }
})

export default App;
