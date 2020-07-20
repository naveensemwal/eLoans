import { Button, Content, Form, Icon, Input, Item, Label, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ViewBase,ImageBackground,KeyboardAvoidingView  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';
import IconImage from '../assets/images/logo.jpg';




const LoginScreen = props => {
    return (
        <KeyboardAvoidingView
       style={styles.container}
      behavior="padding"
    >
      <View style={StyleSheet.container}>
          <ImageBackground source={IconImage} style={styles.backgroundImage}>
              </ImageBackground>
              <View style={StyleSheet.loginContainer}>
              <Form>
                    <Item floatingLabel>
                        <Icon active name='person' style={{ color: '#0052A2' }} />
                        <Label style={{color:'#0052A2'}}>User Name</Label>
                        <Input rounded style={{color:'#0052A2'}}/>
                    </Item>
                    <Item floatingLabel >
                        <Icon active name='key' style={{ color: '#0052A2' }} />
                        <Label style={{color:'#0052A2'}}>Password</Label>
                        <Input rounded secureTextEntry={true} style={{color:'#0052A2'}}/>
                    </Item>
                    <TouchableOpacity>
                        <View style={{ width: '80%', alignSelf: "center" }}>
                            <Button  rounded block style={{ marginVertical: 20, alignContent: "center",backgroundColor:'#0052A2' }}
                                onPress={() => props.navigation.navigate('Home')}><Text> Login </Text></Button>
                        </View>
                    </TouchableOpacity>
                </Form>
          </View>
      </View>
      </KeyboardAvoidingView>

    )
}


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: 'white'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        paddingTop:200,
        marginLeft:50,
        // marginTop,
        width:300,
        height:300,
        marginVertical:30,
        backgroundColor: 'white'
    },
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "space-around",
        backgroundColor: 'white'
    },

});