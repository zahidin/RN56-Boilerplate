import React, { Component } from 'react'
import { Container,Content,Text, Button } from 'native-base';
import { Navigation } from 'react-native-navigation';
import {ABOUT} from '../about/const'

export default class index extends Component {
  
  goToScreen = (screenName) => {
      Navigation.push(this.props.componentId,{
         component:{
            ...ABOUT.component,
            options:{
              topBar:{
                  visible:true,
                  title:{
                      text:'About me'
                  }
              }
          }
         }
      })
  }

  render() {
    return (
        <Container>
            <Content contentContainerStyle={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Text style={{fontFamily:'Helvetica',fontSize:17}}>Welcome to React Native 56 Boilerplate</Text>
                <Text style={{fontSize:15}}>React Redux with React Native Navigation v2</Text>
                <Button primary style={{alignSelf:'center', marginTop:20,backgroundColor:'#2b70c9'}} onPress={() => this.goToScreen('About')}>
                  <Text>About Me</Text>
                </Button>
            </Content>
        </Container>
    )
  }
}
