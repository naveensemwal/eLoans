import React from 'react';
import { View, Button, ImageBackground, StyleSheet } from 'react-native';
import backGroundImage from '../../assets/images/success.gif'

const LoanSubmitScreen = props => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <ImageBackground source={backGroundImage} style={styles.backgroundImage}>

                </ImageBackground>
            </View>
            <View style={{ flex: 1 }}>

            </View>
        </View>
    )
}

export default LoanSubmitScreen

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
        justifyContent: "center"
    },

});
