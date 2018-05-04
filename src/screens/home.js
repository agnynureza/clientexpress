import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

class Home extends Component {
  static navigationOptions = ({navigate}) => ({
      title: 'Welcome to YouExpress',
      headerTitleStyle:{
        fontWeight: '300',
        fontSize: 16
      }
  })

  render() { 
    return ( 
      <View style={styles.container}>
        <TouchableOpacity style={{
                backgroundColor: '#453389',
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: '75%'
              }}
              onPress={()=> this.props.navigation.navigate('Confirm')}
              >
                <Text style={{fontWeight:'bold', color: 'white', fontSize: 16}}>Go to Confirm Menu</Text>
              </TouchableOpacity>
      </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}) 
 
export default Home ;