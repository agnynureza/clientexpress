import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image, ScrollView, TouchableOpacity } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
// import LinearGradient from 'react-native-linear-gradient';


var radio_props = [
  {label: 'Sender', value: 0 },
  {label: 'Receiver', value: 1 }
];

class Confirm extends Component {
  static navigationOptions = ({navigate}) => ({
    title: 'Confirm Order',
    headerTitleStyle:{
      fontWeight: '300',
      fontSize: 16
    }
  })
  constructor(){
    super()
    this.state = {
      value: 0
    }
  }
  render() { 
    return ( 
      <View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.photo}>
              <Text> Your Package Photo </Text>
              <Image
              source={require('../assets/plus1.png')} style={{width: 20, height: 20}}
              />
            </View>
            <View style={styles.contact}>
              <Text>Enter contact number (sender and receiver) {'\n'}and note for the driver.</Text>
            </View> 
          </View>
          <View style={styles.payment}>
            <View style={styles.paymentParent}>
              <View style={styles.paymentHeader}>
                <View style={styles.itemPayment}>
                  <Text>Price</Text>
                  <Text>IDR 200.000</Text>
                </View>
                <View style={styles.itemPayment}>
                  <Text>Door to door (driver)</Text>
                  <Text>IDR 50.000</Text>
                </View>
                <View style={{
                  borderBottomColor: '#ececec',
                  borderBottomWidth: 1,
                  marginTop: 8, 
                  marginBottom: 8
                }}>
                </View>
              </View>
              <View style={styles.totalPayment}>
                <Text style={{
                  color:'#453389',
                  paddingTop: 3,
                  fontWeight: 'bold'
                }}>Total Payment</Text>
                <Text style={{
                  color:'#453389',
                  fontWeight: 'bold',
                  fontSize: 20
                }}>IDR 250.000</Text>
              </View> 
            </View>
            <View style={{
              borderBottomColor: '#ececec',
              borderBottomWidth: 1,
              marginTop: 8, 
              marginBottom: 8
              }}>
            </View>
            <View style={styles.paymentParent}>
              <Text style={{fontWeight:'bold'}}>Responsible for payment</Text>
              <View style={styles.radio}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                buttonColor={'#453389'}
                formHorizontal={true}
                animation={true}
                buttonSize= {10}
                buttonOuterSize={20}
                labelStyle= {{marginRight: 10}}
                onPress={(value) => {this.setState({value:value})}}
              />
              </View>
            </View> 
            <View style={{
              borderBottomColor: '#ececec',
              borderBottomWidth: 1,
              marginBottom: 8
              }}>
            </View>
            <View style={styles.paymentParent}>
              <Text style={{fontWeight:'bold', marginBottom: 10}}>Pay With</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#888',
                  paddingVertical: 5,
                  marginRight: 8,
                  paddingHorizontal: 25}}>
                  <Image 
                  source={require('../assets/cash.png')} style={{width: 40, height: 40}}
                  />
                  <Text style={{fontWeight:'bold'}}>Cash</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#888',
                  paddingVertical: 5,
                  marginHorizontal: 8,
                  paddingHorizontal: 25}}>
                  <Image 
                  source={require('../assets/2.png')} style={{width: 40, height: 40}}
                  />
                  <Text style={{fontWeight:'bold'}}>Wallet</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: '#888',
                  paddingVertical: 5,
                  marginLeft: 8,
                  paddingHorizontal: 25}}>
                  <Image 
                  source={require('../assets/3.png')} style={{width: 40, height: 40}}
                  />
                  <Text style={{fontWeight:'bold'}}>Billed</Text>
                </TouchableOpacity>    
              </View>
              <TouchableOpacity style={{
                backgroundColor: '#453389',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                marginTop: 20,
                marginBottom: 10 
              }}
              onPress={()=> this.props.navigation.navigate('Pickup')}
              >
                <Text style={{fontWeight:'bold', color: 'white', fontSize: 16}}>Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>  
     )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingTop: '3%',
    paddingBottom: '6%'
  },
  photo: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 7,
    paddingRight: 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contact:{
    width: '100%',
    backgroundColor: 'white',
    marginTop: 12,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 5,
  },
  payment:{
    width: '100%',
    backgroundColor: 'white'
  },
  itemPayment:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  paymentParent:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 8
  },
  totalPayment:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radio:{
    marginTop: 20,
    marginBottom: 10
  }
})
 
export default Confirm ;