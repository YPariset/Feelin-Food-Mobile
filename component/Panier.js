import * as React from 'react';
import { Text, View, StyleSheet, Platform, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Container, Header, Left, Body, Right, Content, Footer, Switch,  Button as NButton} from 'native-base';
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
            <Header style={styles.headPage}
            
            androidStatusBarColor={'white'}
            style={{backgroundColor:'white',height: 60}}
            >
                <Left>
                    <TouchableOpacity style={styles.headMenu} onPress={() => this.props.navigation.navigate('Screen2')}>
                        <Ionicons style={styles.arrowBack} name="arrow-back" size={25} />
                    </TouchableOpacity>   
                </Left>      
                <Body style={styles.titrePaiement}>
                    <Text style={styles.panierTitre}>Mon panier</Text>
                </Body>
                <Right>
                    <Ionicons style={styles.poubelle} name="trash-bin" size={25} color='#3cb6c9' />
                </Right>
            </Header>
            <Content style={styles.contentTop} >
              <Body style={styles.icone1}>
                  <Left>
                      <TouchableOpacity style={styles.addCard}>
                          <Ionicons style={styles.cardIcon} name="bicycle" size={25} />
                      </TouchableOpacity>   
                  </Left>      
                  <Body style={styles.titreAddCard}>
                      <Text style={styles.livraison}>Livrée dans 20 - 35 min</Text>
                  </Body>
                  <Right>
                      <Text style={styles.modifier}>Modifier</Text>
                  </Right>
              </Body>
            </Content>   
            
            <Content style={styles.shadow2}>
                <Header style={styles.shadow1}>
                    <Text style={styles.couverts}>
                        Couverts
                    </Text>
                    <Text style={styles.texteCouverts}>
                        Aidez nous à reduire les dechets, ne demandez {'\n'}des couverts que si 
                        vous en avez besoin.
                    </Text>
                    <Right>
                        <Switch value={false}/>
                    </Right>
              </Header>
              <View>
                  {this.state.error !== '' && (
                    <Text style={{marginTop:40}}>
                    {this.state.error}
                    </Text>)}
                  <Header style={styles.headerFooter}>
                      <Text style={styles.precissionsCommande}>
                          Précision particulières sur la commande
                      </Text>
                  </Header>
                </View>
                <Text style={styles.marge1}></Text>
                <Header style={styles.margeFooter}>
                    <Text style={styles.style1}>
                        Articles
                    </Text>
                </Header>
            </Content>
                <TouchableOpacity style={styles.boutton}>
              <Text onPress={() => this.props.navigation.navigate('Screen1')} 
              style={styles.buttonText} >Confirm your address</Text>
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
                  marginTopMenuCard: {
                    color: 'whitesmoke',
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
                  buttonConfirmYourArdess: {
                    color:'#3cb6c9',
                            paddingTop:10,
                            paddingBottom:10,
                            paddingLeft:60,
                            paddingRight:60,
                            backgroundColor:'#3cb6c9',
                            color:'white',
                            fontWeight:'bold',
                            marginLeft:35,
                            position:'absolute',
                            marginTop:0,
                            top:530, },
                  texteCouverts: {
                    fontSize:10, 
                    marginTop:18, 
                    paddingRight:-40, 
                    marginLeft:-60 
                  },
                  panierTitre: {
                    display:'inline-block', 
                    marginleft: 40 , 
                    marginBottom: 0, 
                    marginRight:-20,
                    fontWeight: 'bold'
                  },
                  icone1: {
                    display:'inline-block', 
                    color:'white'
                  },
                  livraison: {
                    display:'inline-block', 
                    marginleft: 35 , 
                    paddingBottom: 0, 
                    marginTop: -20, 
                    marginRight:45
                  },
                  modifier: {
                    marginTop:-19, 
                    color:'#3cb6c9'
                  },
                  shadow2: {
                    boxShadow: '2px 0px 20px 0px grey', 
                    marginTop:-130
                  },
                  shadow1: {
                    marginBottom:0, 
                    backgroundColor:'white', 
                    boxShadow: '2px 0px 20px 0px grey'
                  },
                  couverts: {
                    fontWeight: "bold",
                    marginTop:0, 
                    marginBottom:100, 
                    boxShadow: '2px 0px 5px 0px grey' 
                  },
                  headerFooter: {
                    marginBottom:0, 
                    backgroundColor:'white', 
                    boxShadow: '2px 0px 20px 0px grey'
                  },
                  precissionsCommande: {
                    fontWeight: "bold",
                    color: '#3cb6c9', 
                    marginTop:16, 
                    marginBottom:100, 
                    boxShadow: '2px 0px 5px 0px grey' 
                  },
                  marge1: {
                    marginTop:50,
                    opacity:0
                  },
                  margeFooter: {
                    marginBottom:0, 
                    backgroundColor:'white', 
                    boxShadow: '2px 0px 20px 0px grey'
                  },
                  addCard: {
                    marginTop:10,
                    marginRight:270,
                    display:'inline-block'
                  },
                  style1: {
                    fontWeight: "bold",
                    marginRight:250,
                    marginTop:-20, 
                    marginBottom:300, 
                    boxShadow: '2px 0px 5px 0px grey' 
                  },
                  titrePaiement: {
                    display: 'inline-block',
                  },
                  contentTop: {
                    backgroundColor:'white', 
                    boxShadow: '2px 0px 20px 0px grey',
                    display:'inline-block',
                    marginBottom:200
                  }

              }, 
              ios : {
                arrowBack: {
                    color: '#3cb6c9'

                   },
                cardIcon: {
                  marginRight:280,
                  marginTop:10
                },
                buttonConfirmYourArdess: {color:'#3cb6c9',
                marginTop:300
                }, 
                livraison: {
                  marginTop:-20
                },
                modifier: {
                  marginLeft:280,
                  marginTop:-20,
                  color:'#3cb6c9'
                },
                shadow2: {
                   backgroundColor: 'whitesmoke',
                }, 
                poubelle: {
                  marginRight:12
                },
                arrowBack: {
                  marginLeft:20
                },
                shadow2: {
                  marginTop: -250
                }, 
                headPage: {
                  backgroundColor: 'whitesmoke'
                },
                texteCouverts: {
                  marginTop:20,
                  marginLeft:-62
                  
                },
                couverts: {
                  marginTop:2,
                  fontWeight:"bold",
                  marginLeft:2
                }, 
                precissionsCommande: {
                  marginTop: 22,
                  fontWeight: "bold", 
                  color: '#3cb6c9'
                }, 
                marge1: {
                  marginTop: 30
                }, 
                style1: {
                  fontWeight: "900",
                  marginTop:-300,
                  marginRight: 300, 
                }, 
                margeFooter: {
                  marginTop: 280
                }, 
                boutton: {
                  backgroundColor: '#3cb6c9',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    marginBottom:30,
                    justifyContent: 'center',
                    width: 320,
                    height: 35,
                    marginTop: 15,
                    marginLeft:28,
                }, 
                buttonText: {
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'whitesmoke',
              },
                

                

              }
          }
       ),
    }
);