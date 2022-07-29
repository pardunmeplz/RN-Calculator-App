/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native'
import Row from './scr/components/Row';
import { Button } from './scr/components/Button';
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
              <Button style = 'light'>(</Button>
              <Button style = 'light'>)</Button>
              <Button style = 'light'>{"<<"}</Button>
              <Button style = 'accent'>/</Button>
      </Row>      
      <Row>
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button style = 'accent'>x</Button>
      </Row>
      <Row>
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button style = 'accent'>-</Button>
      </Row>
      <Row>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button style = 'accent'>+</Button>
      </Row>
      <Row>
              <Button style ='long'>0</Button>
              <Button>.</Button>
              <Button style = 'accent'>=</Button>
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
