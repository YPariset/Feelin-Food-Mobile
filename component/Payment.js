import * as React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Container, Header, Left, Body, Right, Content, Button as NButton} from 'native-base';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import HomeDeliveroo from '../view/HomeDeliveroo';
import Card from '../assets/credit-card.png';

export default class Payment extends React.Component {

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
            
            androidStatusBarColor={'white'}
            style={{
              backgroundColor:'white',
              boxShadow: '2px 0px 20px 20px grey',
              height: 60,      
              ...Platform.select({
                ios: {
                  paddingTop: 12,

                },
                android: {
                  paddingTop: 15
                }, 

                web: {
                  marginTopMenuCard: {
                    color: 'whitesmoke',
                  }
                  
                }
              })
            }}
            >
              <Left>
                <TouchableOpacity style={styles.headMenu} onPress={() => this.props.navigation.navigate('Screen2')}>
                    <Ionicons style={styles.arrowBack} name="arrow-back" size={25} />
                </TouchableOpacity>   
              </Left>      

              <Body style={styles.titrePaiement}>
                <Text style={styles.moyenDePaiement}>Payment options</Text>
              </Body>

              <Right>
                <Text>EDIT</Text>
              </Right>

            </Header>
            <Content style={styles.contentTop}>
              <Header style={styles.header}>
              </Header>
              <Body style={{display:'inline-block', color:'whitesmoke'}}>
                <Left>
                  <TouchableOpacity style={styles.addCard} onPress={() => this.props.navigation.navigate('HomeDeliveroo')}>
                      <Ionicons style={styles.cardIcon} name="card" size={25} />
                  </TouchableOpacity>   
                </Left>      

                <Body style={styles.titreAddCard}>
                  <Text style={{display:'inline-block', marginleft: 40 , paddingBottom: 0, marginTop: -20, marginRight:-20}}>Add option paiement</Text>
                </Body>
              </Body>
            </Content>   
            <Content style={styles.footer}>
            </Content>
            <TouchableOpacity style={styles.boutton}>
              <Text onPress={() => this.props.navigation.navigate('Screen8')} 
              style={styles.buttonText} >Validate</Text>
            </TouchableOpacity>

          </Container>
        )
    }else{
      return <Text>Chargement en cours...</Text>
    }  
  }
}

const styles = StyleSheet.create({
   ...Platform.select({ 
        web: {
              footer: {
                backgroundColor:'whitesmoke', 
                marginTop:-123,
                boxShadow: '2px 0px 5px 0px grey'
              },
              arrowBack: {
                color: '#3cb6c9'

              },
              boutton: {
                backgroundColor: '#3cb6c9',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                justifyContent: 'center',
                width: 320,
                height: 35,
                marginTop: 5,
                marginLeft:5,

              },
              buttonText: {
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'whitesmoke',
              },
              addCard: {
                marginTop:10,
                marginRight:270,
                display:'inline-block'
              },
              moyenDePaiement: {
                display:'inline-block', 
                marginleft: 40 , 
                marginBottom: 0, 
                marginRight:-20,
                fontWeight: "bold",
              },
              titrePaiement: {
                display: 'inline-block',
              },
              header: {
                backgroundColor:'whitesmoke', 
                boxShadow: '2px 0px 5px 2px grey'
              },
              contentTop: {
                backgroundColor:'white', 
                boxShadow: '2px 0px 5px 0px grey',
                display:'inline-block'
              }, 
  
            }, 
            ios : {
              boutton: {
                backgroundColor: '#3cb6c9', 
                justifyContent: 'center',
                width: 420,
                height: 35,
                marginTop: 5,
                marginBottom: 70, 
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
              },
              arrowBack: {
                color: '#3cb6c9'

              },
              buttonText: {
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'whitesmoke',
              },
              cardIcon: {
                marginRight: 250,
                marginTop: 7,
              }, 
              footer: {
                backgroundColor:'whitesmoke', 
                marginTop:-210,
                boxShadow: '2px 0px 5px 0px grey',
                marginBottom: -100
              }, 
              titrePaiement: {
                display: "inline-block"
              },
              moyenDePaiement: {
                display: "inline-block",

              }
            }
         }
       )
    }
);