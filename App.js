import * as React from 'react';
import { Text} from 'react-native';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

import HomeDeliveroo from './view/HomeDeliveroo'
import Restaurants from './component/Restaurants'
import Dishes from './component/Dishes'
import Product from './component/Product'
import PersonalDetails from './component/PersonalDetails'
import Panier from './component/Panier'
import Payment from './component/Payment'
import Screen2 from './Screen2'
import Screen4 from './Screen4'
import Screen5 from './Screen5'



const StackNavigator = createStackNavigator(
  {
    Screen1: {screen: HomeDeliveroo},
    Screen2: {screen: Restaurants},
    Screen3: {screen: Dishes},
    Screen6: {screen: Product},
    Screen7: {screen: PersonalDetails},
    Screen8: {screen: Panier},
    Screen9: {screen: Payment}
  },
  {
    headerMode: 'none'
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: StackNavigator},
    Account: {screen : Screen4},
    About_us:{screen : Screen5}
    

  },
)

const AppContainer = createAppContainer(DrawerNavigator);


export default class App extends React.Component {

  
  render(){
    return <AppContainer/>
  }
}