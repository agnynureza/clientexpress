import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Image, TouchableOpacity  } from 'react-native';

class Pickup extends Component {
  static navigationOptions = ({navigate}) => ({
    title: 'Pick Up Location',
    headerTitleStyle:{
      fontWeight: '300',
      fontSize: 16
    },
   headerStyle: {
     backgroundColor: '#fff',
     elevation: 0
   }
})

  render() { 
    return ( 
      <View>
        <View style={styles.navbar}>
          <View style={styles.input}>
            <Image
            source={require('../assets/marker.png')} style={{width: 24, height: 30, marginRight: 10, marginTop:5}}
            />
            <TextInput style={{height: 40, width: '100%'}} underlineColorAndroid='transparent' placeholder='Pickup Location' />
          </View>
        </View>
        <View style={styles.body}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/4.png')} style={{width: 25, height: 30, marginRight: 10,marginLeft:10 , marginTop:5}}
              />
            <Text style={{paddingTop:5}}> Set route from favorite list</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/5.png')} style={{width: 25, height: 30, marginRight: 10,marginLeft:10 , marginTop:5}}
              />
            <Text style={{paddingTop:5}}> Set location on the map</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]}>
            <View style={{marginLeft: 10}}>
              <Text>Home</Text>
              <Text style={{color: '#999'}}>Queen Street V no. 18d</Text>
            </View>
            <Image
              source={require('../assets/star.png')} style={{width: 25, height: 25, marginRight: 10,marginLeft:10 , marginTop:5}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]}>
            <View style={{marginLeft: 10}}>
              <Text>Work</Text>
              <Text style={{color: '#999'}}>King Street VI no. 19</Text>
            </View>
            <Image
              source={require('../assets/star.png')} style={{width: 25, height: 25, marginRight: 10,marginLeft:10 , marginTop:5}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]}>
            <View style={{marginLeft: 10}}>
              <Text>Daily Market</Text>
              <Text style={{color: '#999'}}>Queen Street V no. 18d</Text>
            </View>
            <Image
              source={require('../assets/star.png')} style={{width: 25, height: 25, marginRight: 10,marginLeft:10 , marginTop:5}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]}>
            <View style={{marginLeft: 10}}>
              <Text>Hospital</Text>
              <Text style={{color: '#999'}}>Queen Street V no. 18d</Text>
            </View>
            <Image
              source={require('../assets/star.png')} style={{width: 25, height: 25, marginRight: 10,marginLeft:10 , marginTop:5}}
            />
          </TouchableOpacity>
        </View>
      </View>
     )
  }
}
 
const styles = StyleSheet.create({
  navbar:{
    // width: '100%',
    backgroundColor: 'white',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  input:{
    borderRadius: 3,
    paddingLeft: '3%',
    paddingRight: '3%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#999',
    flexDirection: 'row'
  },
  body: {
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop: '3%',
    paddingBottom: '3%',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  card2: {
    justifyContent: 'space-between'
  }
})
export default Pickup ;