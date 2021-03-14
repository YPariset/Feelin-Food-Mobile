import React, { Component } from "react";
import { View, Text,TouchableOpacity, StyleSheet,Image,ScrollView, Button  } from "react-native";
import {Container, Input} from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';

import LogoObject from '../component/LogoObject';
import Screen2 from '../Screen2'

export default class HomeDeliveroo extends Component {
    static navigationOptions = {
        headerShown: false,
      };

    constructor(props) {
        super(props);
        this.state={
            displayFood:[
                {
                    "id": 1,
                    "name": "Offers",
                    "url": "https://www.barbanews.com/wp-content/uploads/2020/05/mcdonalds.jpg",
                    "restaurantName": "McDonald's"
                },
                {
                    "id": 2,
                    "name": "Fast Food",
                    "url": "https://icisete.fr/wp-content/uploads/2019/04/Burger-King-S%C3%A8te-H%C3%A9rault.jpg",
                    "restaurantName": "Burger King"
                },
                {
                    "id": 3,
                    "name": "Breakfast",
                    "url": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
                    "restaurantName": "George V"
                },
                {
                    "id": 4,
                    "name": "Pizza",
                    "url": "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/recette_pizza_legume-768x576.jpg",
                    "restaurantName": ""
                },
                {
                    "id": 5,
                    "name": "Dessert",
                    "url": "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/27230233/gateau-mousse-chocolat-et-cafe.jpeg",
                    "restaurantName": "Starbuck Coffee"
                }
            ]
        };
    }
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <View style={styles.headerDeliveroo}>
                    <View style={styles.infoHeader}>
                        <View>
                            <LogoObject />
                        </View>
                        <View>
                            <Text style={styles.colorGray,styles.locationSubtitle}>Now</Text>
                            <View style={styles.locationCurrent}>
                                <Text style={styles.fontBold}>Current Location</Text>
                                <Ionicons style={styles.greenDeliveroo} name="chevron-down-outline" />
                            </View>
                        </View>
                    </View>
                     <TouchableOpacity style={styles.userCo}
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Ionicons style={[styles.greenDeliveroo]} name="person-outline" size={30}/>
                </TouchableOpacity>
                </View>
                <View style={[styles.locationCurrent,styles.marginX]}>
                    <Text style={[styles.greenBackground]}>
                        Delivery
                    </Text>
                    <Text style={[styles.greenDeliveroo,styles.marginX2]}>
                        Pickup
                    </Text>
                </View>
                <View style={[styles.searchInput,styles.borderRadius]}>
                    <View style={[styles.inputBar,styles.borderRadius]}>
                        <Ionicons style={[styles.transparentGray,styles.fs_20,styles.pr_5]} name="ios-search"/>
                        <Input placeholder="Dishes, restaurants or cuisines" />
                    </View>
                    <View style={{width:100}}>
                        <Ionicons style={[styles.fs_25,styles.greenDeliveroo]} name="options-outline"/>
                    </View>
                </View>
                <ScrollView>
                    <ScrollView nestedScrollEnabled horizontal={true} style={styles.scrollView}>
                        {
                            this.state.displayFood.map((value,key) => (
                                <View key={key} style={[styles.mx_5,styles.my_8]}>
                                <TouchableOpacity onPress={() => navigation.navigate('Screen2', {categoryName: value.name})}>
                                    <Image style={[styles.image,styles.bdr_10]} source={{uri: value.url}} />
                                    <View style={[styles.w_h,styles.bdr_10]}>
                                        <Text style={styles.txt}>{value.name}</Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                                
                            ))
                        }
                    </ScrollView >
                    <View style={{marginTop:10}}>
                        <ScrollView nestedScrollEnabled horizontal={true} style={styles.scrollViewFeatures}>
                            {
                                this.state.displayFood.map((value,key) => (
                                    <View key={key} style={[styles.mx_5,styles.mb13]}>
                                        
                                        <TouchableOpacity onPress={() => navigation.navigate('Screen2', {categoryName: value.name})}>
                                        <View style={{position: 'relative'}}>
                                            <View style={[styles.freeDel,styles.br5,{backgroundColor:"#3cb6c9", bottom:0}]}>
                                                <Text style={{color:'whitesmoke',}}>Je commande</Text>
                                            </View>
                                                <Image style={[styles.imagesFeatures,styles.br8]} source={{uri: value.url}}/>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                    <View style={[styles.mx_15,styles.mt_15]}>
                        <Text style={styles.features}>Featured</Text>
                    </View>
                    <View>
                        <ScrollView nestedScrollEnabled horizontal={true} style={styles.scrollViewFeatures}>
                            {
                                this.state.displayFood.map((value,key) => (
                                    <View key={key} style={[styles.mx_5,styles.mb13]}>
                                        <View style={{position: 'relative'}}>
                                            <View style={[styles.freeDel,styles.br5]}>
                                                <Text style={{color:'whitesmoke',}}>Free delivery</Text>
                                            </View>
                                            <Image style={[styles.imagesFeatures,styles.br8]} source={{uri: value.url}}/>
                                            <View style={{position:'absolute',zIndex: 22,bottom:-8, right:0 , marginRight:20 ,backgroundColor:"whitesmoke",paddingVertical:4,paddingHorizontal:14, borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,borderColor:"#d4d4d4",
                                                borderWidth: 1}}
                                            >
                                                <Text style={{color:'black', width:50, textAlign:'center',fontWeight:'bold'}}>40 <Text style={{color:"#b3b3b3"}}>min</Text></Text>
                                            </View>
                                        </View>
                                        <Text style={styles.fwb}>Chicken Class By Urban Kitchens</Text>
                                        <View style={styles.txtFeatures}>
                                            <Text style={styles.transparentGray}><Ionicons style={styles.star} name="star"/> <Text style={styles.blue}>4.4 Very Good American</Text> - Chicken - Fried chicken - Salads</Text>
                                        </View>
                                        <Text style={styles.transparentGray}>4.6 km away - Free delivery</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    mb13:{
        marginBottom: 13
    },
    freeDel:{
        position: 'absolute',
        zIndex:22,
        backgroundColor:'#ff6399',
        padding: 5,
        margin: 10
    },
    fwb:{
        fontWeight:"bold",
        marginTop:10
    },
    blue:{
        color:"#4274a2"
    },
    star:{
        fontSize:15,
    },
    txtFeatures:{
        width:250,
        flexDirection:'row',
    },
    scrollViewFeatures:{
        marginHorizontal: 10,
    },
    br5:{
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    br8:{
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    imagesFeatures:{
        width:250,
        height:180,
    },
    features:{
        fontWeight:'bold',
        fontSize:18
    },
    my_8:{
        marginVertical:8,
        height: 100
    },
    mx_15:{
        marginHorizontal:15
    },
    mt_15:{
        marginVertical: 6
    },
    mx_5:{
        marginHorizontal:5,
    },
    scrollView:{
        marginHorizontal: 10,
        maxHeight: 120
    },
    w_h:{
        position: 'absolute',
        width:100,
        height:100,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    txt:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        color:'whitesmoke',
        fontWeight:'bold',
    },
    bdr_10:{
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    image: {
        width:100,
        height:100,
        padding:10,
    },
    headerDeliveroo:{
        paddingTop: 40,
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    infoHeader:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'flex-start',
    },
    locationCurrent:{
        marginLeft: 30,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    locationSubtitle:{
        marginLeft: 30,
        paddingTop: 20,
        color:"#a5a5a5",
       
    },
    fontBold:{
        fontFamily:'NK57MonospaceCdRg-Bold',
        fontSize: 20
    },
    colorGray:{
        color:"#a5a5a5",
    },
    greenDeliveroo:{
        color: "#3cb6c9"
    },
    greenBackground:{
        backgroundColor: "#3cb6c9",
        color:'whitesmoke',
        paddingVertical:3,
        fontWeight: 'bold',
        paddingHorizontal:12,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    userCo:{
        margin:15,
        padding:10,
        backgroundColor:"#f8f8f6",
        borderTopRightRadius:100,
        borderTopLeftRadius:100,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100
    },
    btn:{
        width: 100,
    },
    marginX:{
        marginHorizontal: 10,
        marginTop: 10
    },
    marginX2:{
        marginHorizontal: 10,
    },
    inputBar:{
        flexDirection: 'row',
        alignItems:'center',
        width:350,
        backgroundColor:"#f3f4f6",
        marginHorizontal:15,
        marginTop:10,
        marginBottom:15,
    },
    transparentGray:{
        color:"#b0b0b0"
    },
    pr_5:{
        paddingRight:5,
        paddingLeft:10
    },
    fs_20:{
        fontSize:20
    },
    fs_25:{
        fontSize:28,
        backgroundColor:'#ffffff',
    },
    searchInput:{
        borderBottomColor:"#d4d4d4",
        borderBottomWidth: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:15
    },
    borderRadius:{
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
});