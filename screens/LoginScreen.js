import { Button, Content, Form, Icon, Input, Item, Label, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../components/Card';




const LoginScreen = props => {
    return (

        <Content padder contentContainerStyle={{ justifyContent: 'center', paddingTop: 300 }}>
            <Card style={{ backgroundColor: 'white' }}>
                <Form>
                    <Item floatingLabel>
                        <Icon active name='person' style={{ color: 'skyblue' }} />
                        <Label>User Name</Label>
                        <Input rounded />
                    </Item>
                    <Item floatingLabel >
                        <Icon active name='key' style={{ color: 'skyblue' }} />
                        <Label>Password</Label>
                        <Input rounded secureTextEntry={true} />
                    </Item>
                    <TouchableOpacity>
                        <View style={{ width: '80%', alignSelf: "center" }}>
                            <Button info rounded block style={{ marginVertical: 20, alignContent: "center" }}
                                onPress={() => props.navigation.navigate('Home')}><Text> Login </Text></Button>
                        </View>
                    </TouchableOpacity>
                </Form>
            </Card>
        </Content>

    )
}


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "white",

    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    iconContainer: {
        flex: 2

    },
    loginContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "space-around",
        margin: 5,
        padding: 30,

    },
    button: {

    }
});