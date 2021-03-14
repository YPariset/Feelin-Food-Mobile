import * as React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Container, Header, Left, Body, Right, Content, Button as NButton} from 'native-base';
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
            <Header
            androidStatusBarColor={'transparent'}
            style={{
              backgroundColor:'white',
              height: 60,      
              ...Platform.select({
                ios: {
                  paddingTop: 12,
                },
                android: {
                  paddingTop: 15
                }
              })
            }}
            >
              <Left>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')}>
                  <Ionicons name="arrow-back" size={25} />
                </TouchableOpacity>                
              </Left>      
            </Header>
            <Content>
              <Button title='Click Me RN!'/> 
             
              <Text style={{fontFamily:'Lato-Regular', fontSize:50}}>Screen 2</Text>
            </Content>      
          </Container>
        )
    }else{
      return <Text>Chargement en cours...</Text>
    }  
  }
}

const styles = StyleSheet.create({
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
  },
});