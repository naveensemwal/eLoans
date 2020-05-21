import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import backGroundImage from '../../assets/images/wip.png'



const LoanCalculator = props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backGroundImage} style={styles.backgroundImage}>
            </ImageBackground>
        </View>
    )
}


export default LoanCalculator;


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