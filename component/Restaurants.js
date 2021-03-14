import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Platform
} from "react-native";
import {Container, Header, Left, Body, Right, Content, Button as NButton} from 'native-base';
import RestaurantItem from "./RestaurantItem";
import {Ionicons} from '@expo/vector-icons';
import apiRestos from '../utils/apirestos'
import _ from 'lodash';
const api = apiRestos.create()


export default class Restaurants extends React.Component {



  async componentDidMount() {
    const listRestosFromApi = await api.getRestaurants()
    if(listRestosFromApi.length>0){
      const listFiltered =  _.filter(listRestosFromApi, { 'cuisine': this.state.categoryName});
      //console.log('Liste Restos', JSON.stringify(listFiltered))
      this.setState({
        listRestos:listFiltered
      })
    }
  }
  
  constructor(props) {
    super(props);

     this.state = {
      listRestos: [], 
      categoryName: this.props.navigation.getParam('categoryName', "categorie NON reçu")
    }

    console.log("categorie name reçu", this.props.navigation.getParam('categoryName', "categorie NON reçu"))
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Restaurants",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
    };
  };
  handleNavigation(name) {
    this.props.navigation.navigate("Screen3", {restaurantName: name});
    
  }
  render() {
    const listRestosFromApi = api.getRestaurants()
    return (
      <View style={styles.container}>
      <Header style={styles.header}>
        <Left>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen1')}>
                  <Ionicons name="arrow-back" size={25} style={styles.arrow} />
                </TouchableOpacity>           
        </Left>    
        <Body>
          <Text style={styles.textHeaderBody}>Go ahead pick your treat !</Text>   
        </Body>
      </Header>
       {(this.state.listRestos?.length>0) ? <FlatList style={styles.restaurantItem} 
          data={this.state.listRestos}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <RestaurantItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              location={item.location}
              isVegetarian={item.isVegetarian}
              handleNavigation={() => this.handleNavigation(item.name)}
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
  restaurantItem: {
    marginBottom: 100

  },
   textHeaderBody: {
    marginLeft: -50,
    fontWeight: 'bold',
  },
  arrow: {
     color: '#3cb6c9'
  }
});
