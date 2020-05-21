import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Card from '../../components/Card'

const SearchScreen = (props) => {
    const [searchString, setSearchString] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    placeholder="Search Here.."
                    onChangeText={value => setSearchString({ searchString: value })}
                    value={searchString}
                />
            </View>
            <View>
                <Card>
                    <Text>No item to display...</Text>
                </Card>
            </View>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 5,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: 'white'
    },
    searchContainer: {
        flex: 1,


    },
    searchResultContainer: {
        flex: 10,
        borderRadius: 5,
        borderStyle: "solid",
        backgroundColor: '#e6ffff',
        width: '100%',
        padding: 10,
        borderColor: '#80ffff',
        borderWidth: 1,
        alignItems: "center"
    }

});