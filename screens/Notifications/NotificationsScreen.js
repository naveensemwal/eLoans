import { List, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import backGroundImage from '../../assets/images/15389.png'


const taskList = [
    {
        id: '1',
        title: 'This Labour Day..,',
        description: 'In nulla do incididunt est nostrud in duis officia. Laboris ex amet aute sit proident excepteur eiusmod ad ex. Aute tempor do fugiat aliqua deserunt amet consequat amet anim dolor. Tempor enim enim ut cupidatat ut occaecat eu magna quis incididunt. Dolor minim adipisicing pariatur fugiat nulla pariatur eu do sint nulla tempor magna. Aute est irure dolore in cupidatat consectetur laboris incididunt fugiat ea. Voluptate quis fugiat veniam elit.',
        loanType: 'Home',
        date: '02 May'
    },
    {
        id: '2',
        title: 'COVID 19 guidelines',
        description: 'Non officia excepteur non nostrud.',
        loanType: 'Personal',
        date: '30 Apr'
    },
    {
        id: '3',
        title: 'Client visit overdue',
        description: 'Elit irure dolor deserunt in nulla tempor culpa exercitation consectetur velit officia labore culpa nulla. Proident in quis enim incididunt exercitation quis et. ',
        loanType: 'Auto',
        date: '25 Apr'
    },
    {
        id: '4',
        title: 'Loan initiation for LAN 00456792  pending',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
        date: '24 Jun'
    },




]
const renderItem = ({ item, index }) => {

    return (

        <TouchableOpacity>
            <Card style={{ paddingTop: 2,backgroundColor:'#7DBCDE' }} cardContent={{ marginHorizontal: 5 }}>
                <View style={{ flexDirection: "row", paddingHorizontal: 5 }}>
                    <View style={{ flex: 1, paddingRight: 6 }}>
                        <Thumbnail small source={require("../../assets/images/notification_blue.png")} />
                    </View>
                    <View style={{ flex: 8 }}>
                        <Text style={{ fontFamily: 'Roboto', fontWeight: "bold" }}>
                            {item.title}
                        </Text>
                        <Text style={{ color: "white", fontFamily: 'Roboto_medium', fontWeight: 'normal', fontSize: 12 }}>
                            {item.description}
                        </Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start' }} >
                        <Text style={{ color: "white", fontFamily: 'Roboto_medium', fontWeight: 'normal', fontSize: 11 }}>
                            {item.date}
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>

    )
};

const NotificationsScreen = props => {
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={backGroundImage} style={styles.backgroundImage}> */}
                <List dataArray={taskList} renderItem={renderItem}>
                </List>
            {/* </ImageBackground> */}
        </View>
    )
}


export default NotificationsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "flex-start",
        backgroundColor: "white"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%'
    },
});