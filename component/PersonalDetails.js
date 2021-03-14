import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Platform,
} from 'react-native';
import {
  Container,
  Input,
  Header,
  Left,
  Body,
  Content,
  Item,
  Label,
  Form,
  Footer,
} from 'native-base';
import { SharedElement } from 'react-navigation-shared-element';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class Restaurant extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor={'transparent'} style={styles.header}>
          <Left>
            <Ionicons
              style={styles.arrow}
              size={25}
              name="arrow-back"
              onPress={() => this.props.navigation.navigate('Screen6')}
              title={'hello'}
            />
          </Left>
          <Body>
            <Text style={styles.textHeaderBody}>Confirm your address</Text>
          </Body>
        </Header>

        <Content style={{ marginTop: 20 }}>
          <Form>
            <Item stackedLabel>
              <Label style={{ fontSize: 13 }}>Name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={{ fontSize: 13 }}>
                Appartement number/building number (optional)
              </Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={{ fontSize: 13 }}>Address</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={{ fontSize: 13 }}>Zip code</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={{ fontSize: 13 }}>Phone number</Label>
              <Input />
            </Item>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 9,
                marginBottom: 20,
                marginTop: 5,
              }}>
              We will contact you in case of any issue
            </Text>
            <Item stackedLabel>
              <Label style={{ fontSize: 13 }}>
                Feel free to pass on any instructions for delivery
              </Label>
              <Input />
            </Item>
          </Form>
          <Footer style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.boutton}>
              <Text onPress={() => this.props.navigation.navigate('Screen9')} 
              style={styles.buttonText} >Confirm your address</Text>
            </TouchableOpacity>
          </Footer>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    ...Platform.select({
      ios: {
        paddingRight: 170,
      },
      android: {
        backgroundColor: 'white',
      },
    }),

    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#e1e9eb',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    shadowColor: '#e1e9eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 0.5,
  },
  arrow: {
    color: '#3cb6c9',
  },
  textHeaderBody: {
    marginLeft: -50,
    fontWeight: 'bold',
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
    marginTop: 25,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'whitesmoke',
    
  },
});
