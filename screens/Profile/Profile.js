import React from 'react';
import  {View,Text,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';



const Profile = props => {
    return (
        <View style={styles.container}>
            <Text>
               Login Screen
            </Text>
            <Button  title='Login'/>
        </View>
    )
}


export default Profile;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center", 
        justifyContent:"center",  
    }
});