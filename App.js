import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {StackNavigator} from 'react-navigation'
import { Provider } from 'react-redux'
import Home from './src/screens/home'
import Confirm from './src/screens/confirm'
import Pickup from './src/screens/pickup'

const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  Confirm: {
    screen: Confirm
  },
  Pickup:{
    screen: Pickup
  }
},{
  initialRouteName: 'Home',
  // navigationOptions: {
  //   headerTintColor: 'black',
  //   headerStyle: {
  //     backgroundColor: 'white'
  //   }
  // }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <RootStack/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
