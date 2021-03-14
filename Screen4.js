import * as React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Container, Header, Left, Body, Right, Content, Button as NButton, Item, Icon} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

export default class Screen4 extends React.Component {

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
        <View style={styles.container}>
          <Container>
            <Header
            androidStatusBarColor={'transparent'}
            style={{
              backgroundColor:'white',
              height: 60, 
              borderTopWidth:2,
              borderTopColor:'#e1e9eb',
              borderTopStyle:'solid',
              boxShadow:"0 0 30px 0 lightgrey",
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
                  <Ionicons style={{color:'#3cb6c9'}} name="arrow-back" size={25} />
                </TouchableOpacity>                
              </Left>      
              <Body>
                  <Text style={{fontWeight:'bold', marginLeft:-50}}>Gerer mes informations</Text>
                  <Text style={{color:'lightgrey', marginLeft:-50}}>saperlipopette.cocasse@gmail.com</Text>
              </Body>
            </Header>  
            <Text style={{backgroundColor:'#ededed', 
                      height:25,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
            </Text>

             <Text style={{paddingTop:15, paddingBottom:6, paddingLeft:20}}>
                <Item style={{border:'none', marginBottom:15}}>
                      <Ionicons style={{color:'lightgrey'}} name="reorder-four-outline" size={25} />
                      <Text style={{color:'grey', marginLeft:10, marginTop:20, marginBottom:40}}>Contact us about your command</Text>
                </Item >
             </Text>

            <Text style={{backgroundColor:'#ededed', 
                      height:25,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
          </Text>
           <Text style={{paddingTop:15, 
                      paddingBottom:6, 
                      paddingLeft:20,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
                <Item style={{border:'none', marginBottom:15}}>
                      <Ionicons style={{color:'lightgrey'}} name="person-outline" size={25} />
                      <Text style={{color:'grey', marginLeft:10, marginTop:20, marginBottom:40}}>See my personnal informations</Text>
                </Item >
                <Item style={{border:'none', marginBottom:15}}>
                      <Ionicons style={{color:'lightgrey'}} name="fast-food-outline" size={25} />
                      <Text style={{color:'grey', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>Feelin Food plus</Text>
                </Item >
                
                <Item style={{border:'none', marginBottom:15}}>
                      <Ionicons style={{color:'lightgrey'}} name="card-outline" size={25} />
                      <Text style={{color:'grey', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>Payment cards</Text>
                </Item >
                <Item style={{border:'none', marginBottom:15}}>
                      <Ionicons style={{color:'lightgrey'}} name="home-outline" size={25} />
                      <Text style={{color:'grey', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>Adresses</Text>
                </Item >
                <Item style={{border:'none', marginBottom:15}}>
                      <Ionicons style={{color:'lightgrey'}} name="people-outline" size={25} />
                      <Text style={{color:'grey', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>Invite a friend</Text>
                </Item >
             </Text>
             <Text style={{backgroundColor:'#ededed', 
                      height:25,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
          </Text>
          <Text style={{paddingTop:15, 
                      paddingBottom:6, 
                      paddingLeft:20,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
                <Item style={{border:'none', marginBottom:15}}>
                      <Text style={{color:'black', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>FAQ</Text>
                </Item >
                <Item style={{border:'none', marginBottom:15}}>
                    <Text style={{color:'grey', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>Newsletter Parameters</Text>
                </Item >
                <Item style={{border:'none', marginBottom:15}}>
                    <Text style={{color:'grey', marginLeft:10, marginRight:100, marginTop:20, marginBottom:40}}>About us</Text>
                </Item >
                <Item style={{border:'none', marginBottom:15}}>
                    <Text style={{color:'grey', marginLeft:10, marginRight:140, marginTop:20, marginBottom:40}}>Mentions</Text>
                </Item >
          </Text>
          <Text style={{backgroundColor:'#ededed', 
                      height:40,
                      borderBottomWidth:2, 
                      borderBottomStyle:'solid',
                      borderBottomColor:'#ededed'}}>
          </Text>
          </Container>
          </View>
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
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});