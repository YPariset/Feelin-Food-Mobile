import * as React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Container, Header, Left, Body, Right, Content, Button as NButton, List, ListItem, Thumbnail, Item,Icon, Input} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

export default class Screen5 extends React.Component {

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
          <Container style={styles.container}>
            <Header
            androidStatusBarColor={'transparent'}
            style={{
              backgroundColor:'white',
              height: 60,  
              borderBottomWidth:2,
              borderBottomColor:'#e1e9eb',
              borderBottomStyle:'solid',
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
                  <Text style={{fontWeight:'bold', marginLeft:-50}}>About our application</Text>
              </Body>
            </Header>
            <Content style={{marginTop:25, 
                    
                     paddingLeft:30,
                     paddingTop:20,
                     paddingBottom:20,
                     borderTopWidth:2,
                     borderTopColor:'#e1e9eb',
                     borderTopStyle:'solid',
                     boxShadow:"0 0 30px 0 lightgrey",
                     borderBottomWidth:2,
                     borderBottomColor:'#e1e9eb',
                     borderBottomStyle:'solid',
                     }}>
                
                 <Item style={{border:'none', marginBottom:15}}>
                      <Icon style={{color:'lightgrey'}} name='mail' />
                      <Text style={{color:'grey'}}>Contact us about your command</Text>
                </Item >
                    <Item style={{border:'none', marginBottom:15}}>
                      <Icon style={{color:'lightgrey'}} name='pencil' />
                      <Text style={{color:'grey'}}>Tell us about Feelin food</Text>
                    </Item>
                    <Item style={{border:'none', marginBottom:15}}>
                      <Icon style={{color:'lightgrey'}} name='play' />
                      <Text style={{color:'grey'}}>Please rate the app if you like it</Text>
                    </Item>
                    
            </Content> 
            <Content style={{marginTop:-80, 
                            paddingTop:20,
                            paddingBottom:20,
                            borderTopWidth:2,
                            borderTopColor:'#e1e9eb',
                            borderTopStyle:'solid',
                            boxShadow:"inset 0 180px 0 #ededed"
                            }}>
                <Text style={{paddingLeft:20, fontWeight:'bold', marginBottom:5}}>Version 3.59.0</Text>
                <Text style={{paddingLeft:20,color:'#c9c5c5',marginBottom:5}}>&copy; 2021-03 Feelin Food</Text>
                <Text style={{paddingLeft:20, color:'#c9c5c5',marginBottom:35}}>Developped by FastNFurious</Text>

                <Text style={{paddingLeft:20, color:'#3cb6c9',marginBottom:10}}>General conditions</Text>
                <Text style={{paddingLeft:20, color:'#3cb6c9'}}>confidentiality</Text>

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