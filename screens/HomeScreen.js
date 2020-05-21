import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import backGroundImage from '../assets/images/homeBG.png';
import { HeaderHeightContext } from '@react-navigation/stack';
import TouchableScale from 'react-native-touchable-scale';
import { ListItem } from 'react-native-elements';
import { hide } from 'expo/build/launch/SplashScreen';
import { PricingCard } from 'react-native-elements';



const list = [
    {
        id: '1',
        name: 'Initiate Loan',
        avatar_url: require("../assets/images/term-loan.png"),
        subtitle: 'Initiate loan process',
        routeName: 'InitiateCase'
    },
    {
        id: '2',
        name: 'Loan Calculator',
        avatar_url: require("../assets/images/loanCalculator.png"),
        subtitle: 'Check loan eligibility',
        routeName: 'LoanCalculator'
    },
];



const renderItem = ({ item, index, separators }) => {

    return (
        <View style={{ borderRadius: 10, overflow: "hidden", margin: 10 }}>
            <ListItem
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                leftAvatar={{ rounded: true, source: item.avatar_url, overlayContainerStyle: { backgroundColor: 'white' } }}
                title={item.name}
                titleStyle={{ color: 'white', fontWeight: 'bold' }}
                subtitleStyle={{ color: 'white' }}
                subtitle={item.subtitle}
                chevron={{ color: 'white' }}
                onPress
            />
        </View>
    )
};


const HomeScreen = props => {

    const renderItem = ({ item, index, separators }) => {

        return (
            <View style={{ borderRadius: 10, overflow: "hidden", margin: 10 }}>
                <ListItem
                    Component={TouchableScale}
                    friction={90} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    linearGradientProps={{
                        colors: ['#FF9800', '#F44336'],
                        start: [1, 0],
                        end: [0.2, 0],
                    }}
                    leftAvatar={{ rounded: true, source: item.avatar_url, overlayContainerStyle: { backgroundColor: 'white' } }}
                    title={item.name}
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle={item.subtitle}
                    chevron={{ color: 'white' }}
                    onPress={() => props.navigation.navigate(item.routeName)}
                />
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <View style={styles.dashboardContainer}>
                <ImageBackground source={backGroundImage} style={styles.backgroundImage}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "row", padding: 10 }} >
                            <View style={styles.gridItem}>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    OVERDUE VISITS
                                 </Text>
                                <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                                    <Text style={{ color: 'white', fontSize: 50, fontWeight: "bold" }}>17</Text>
                                </View>
                            </View>
                            <View style={styles.gridItem}>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    REQUEST PROCESSED
                                </Text>
                                <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                                    <Text style={{ color: 'white', fontSize: 50, fontWeight: "bold" }}>05</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", padding: 10 }} >
                            <View style={styles.gridItem}>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    BRANCH VISITED
                                 </Text>
                                <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                                    <Text style={{ color: 'white', fontSize: 50, fontWeight: "bold" }}>10</Text>
                                </View>
                            </View>
                            <View style={styles.gridItem}>
                                <Text style={{ color: 'white', fontSize: 15 }}>
                                    CUSTOMER VISITED
                                </Text>
                                <View style={{ flexDirection: 'row', alignContent: "space-between" }}>
                                    <Text style={{ color: 'white', fontSize: 50, fontWeight: "bold" }}>50</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.actionContainer}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}


export default HomeScreen;


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
    dashboardContainer: {
        flex: 2

    },
    actionContainer: {
        flex: 1,
        alignContent: "flex-end",
        padding: 10,
        justifyContent: "space-around",
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
        alignContent: "space-around",
        alignItems: "center",
        paddingTop: 50
    }
});