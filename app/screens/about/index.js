import React, { Component } from 'react'
import {Linking} from 'react-native'
import {Container, Content, Text} from 'native-base'

export default About = (props) => {
    return(
        <Container>
            <Content contentContainerStyle={{flex:1,alignSelf:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Helvetica',fontSize:17,textAlign:'center'}}>Create By Zahidin</Text>
                <Text style={{fontFamily:'Helvetica',fontSize:17,textAlign:'center',color:'#2b70c9'}} onPress={() => Linking.openURL('https://github.com/zahidin')}>Github</Text>
            </Content>
        </Container>
    )
} 