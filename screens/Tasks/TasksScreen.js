import { Body, Button, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const taskList = [
    {
        id: '1',
        title: '00456789',
        description: 'Visit customer for home loan initiation.',
        loanType: 'Home'
    },
    {
        id: '2',
        title: '00456790',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
    },
    {
        id: '3',
        title: '00456791',
        description: 'Visit customer for personal loan initiation.',
        loanType: 'Auto',
    },
    {
        id: '4',
        title: '00456792',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
    },
    {
        id: '5',
        title: '00456793',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
    },
    {
        id: '6',
        title: '00456794',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
    },
    {
        id: '7',
        title: '00456795',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
    },
    {
        id: '8',
        title: '00456796',
        description: 'Visit customer for  personal loan initiation.',
        loanType: 'Personal',
    }


]
const renderItem = ({ item, index }) => {

    return (
        <TouchableOpacity>
            <View>
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail circular source={require("../../assets/images/list.png")} />
                    </Left>
                    <Body>
                        <Text>{item.title}</Text>
                        <Text note numberOfLines={3}>{item.description}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>View</Text>
                        </Button>
                    </Right>
                </ListItem>
            </View>
        </TouchableOpacity>
    )
};

const TaskScreen = props => {
    return (
        <View style={styles.container}>
            <List dataArray={taskList} renderItem={renderItem}>

            </List>
        </View>
    )
}


export default TaskScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "flex-start",
        backgroundColor: "white"
    }
});