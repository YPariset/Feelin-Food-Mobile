import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Platform
} from "react-native";
import Constants from "../utils/constants";
import {Container, Header, Left, Body, Right, Content, Button as NButton} from 'native-base';
import ListItem from "./ListItem";
import {Ionicons} from '@expo/vector-icons';
import apiRestos from '../utils/apirestos'
import _ from 'lodash';
const api = apiRestos.create()


export default class Dishes extends React.Component {

  async componentDidMount() {
    const listRestosFromApi = await api.getDishes()
    if(listRestosFromApi.length>0){
      const listFiltered =  _.filter(listRestosFromApi, { 'restaurantName': this.state.restaurantName});
      console.log('Liste Dishes', JSON.stringify(listFiltered))
      this.setState({
        listDishes:listFiltered
      })
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      listDishes: [], 
      restaurantName: this.props.navigation.getParam('restaurantName', "restaurant NON reçu")
    }

    console.log("restaurant name reçu", this.props.navigation.getParam('restaurantName', "restaurant NON reçu"))
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Menu",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
    };
  };

handleNavigation() {
    this.props.navigation.navigate("Screen6");
    
  }
  render() {
    return (
      <View style={styles.container}>
      <Header style={styles.header}>
        <Left>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen2')}>
                  <Ionicons name="arrow-back" size={25}  style={styles.arrow} />
                </TouchableOpacity>                
        </Left>    
        <Body>
          <Text style={styles.textHeaderBody}>Today's specials!
          </Text>   
        </Body>
      </Header>
       {(this.state.listDishes?.length>0) ? <FlatList 
          data={this.state.listDishes}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <ListItem 
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              price={item.price}
              label={item.label}
              isVegetarian={item.isVegetarian}
              restaurantName={item.restaurant}
              handleNavigation={() => this.handleNavigation()}
            />
            
          )}
        /> : <Text>Aucun Résultat</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        paddingRight: 170,
         backgroundColor: 'white',
      },
      android: {
        backgroundColor: 'white',
      }
    })
  },
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8
  },
  textHeaderBody: {
    marginLeft: -50,
    fontWeight: 'bold',
  },
  arrow: {
     color: '#3cb6c9'
  }
});
