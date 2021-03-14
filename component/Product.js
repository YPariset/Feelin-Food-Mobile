import * as React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import {Container, Header, Left, Body, Right, Content, Button as NButton, Card, CardItem, Thumbnail, Icon, Input} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

export default class Screen2 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isReady: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      ...Ionicons.font
    })
    this.setState({
      isReady: true
    })
  }

  render(){
    if(this.state.isReady){
      return (
          <Container>
            <Content>
                <Image source={{uri: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg'}} style={{height: 200, width: null, flex: 1, position:'relative'}}/> 
                <TouchableOpacity style={{position:'absolute',top:'10px', left:'10px'}} onPress={() => this.props.navigation.navigate('Screen3')}>
                  <Ionicons style={{color:'#3cb6c9'}} name="close-circle-outline" size={25} />
                </TouchableOpacity>    

        <Text style={{backgroundColor:'#ededed', 
                      height:20,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
        </Text>
        <Text style={{paddingTop:20, paddingLeft:20, textAlign:'center'}}>
        Burger of the week with a juicy and thick black Angus Steak
        </Text>
               
                <Text style={{marginTop:10, 
                              paddingBottom:20,
                              textAlign:'center', 
                              color:'#f5a74e',
                              fontSize:'18px',
                              borderBottomWidth:2, 
                              borderBottomStyle:'solid',
                              borderBottomColor:'#ededed'}}>11€ <Text style={{color:'black',fontSize:'14px'}}>1̶3̶.̶5̶0̶</Text></Text> 
             <Text style={{backgroundColor:'#ededed', 
                      height:20,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
              </Text>
              <Text style={{height:'13vh', 
                            borderBottomWidth:2, 
                            borderBottomStyle:'solid',
                            borderBottomColor:'#ededed',
                            textAlign:'center',
                            paddingTop:20}}>

                <Ionicons style={{color:'#3cb6c9'}}  name="remove-circle-outline" size={25} />
                <Input style={{width:50, textAlign:'center', outline:'none'}} placeholder="Underline" value='1'/>
                <Ionicons style={{color:'#3cb6c9'}} name="add-circle-outline" size={25} />
              </Text>
              <Text style={styles.margeProduitFooter}>
                      
              
              <TouchableOpacity style={styles.boutton}>
              <Text onPress={() => this.props.navigation.navigate('Screen7')} 
              style={styles.buttonText} >Add 1 item to your cart</Text>
            </TouchableOpacity>
              </Text>

        
        </Content>
        </Container>
        )
    }else{
      return <Text>Chargement en cours...</Text>
    }  
  }
}

const styles = StyleSheet.create({
  ...Platform.select({ 
    web : {
      margeProduitFooter: {
        backgroundColor:'#ededed', 
        height:200, 
        position:'relative'
      },
  boutton: {
            backgroundColor: '#3cb6c9',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            marginBottom:10,
            justifyContent: 'center',
            width: 320,
            height: 35,
            marginTop: 15,
            marginLeft:7,
  },
  buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'whitesmoke',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
    },
    ios: {
          boutton: {
                  backgroundColor: '#3cb6c9',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    marginBottom:30,
                    justifyContent: 'center',
                    width: 400,
                    height: 15,
                    marginTop: 5,
                    marginLeft:55,
                }, 
                buttonText: {
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'whitesmoke',
              },
              margeProduitFooter: {
                  backgroundColor:'#ededed', 
                  height:200, 
                  marginTop: 30,
                  position:'relative'
      },
              }
          }
       ),
    }
);