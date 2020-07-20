import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SearchBar,Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../components/Card";

const SearchScreen = (props) => {
  const [searchString, setSearchString] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search Here.."
          onChangeText={(value) => setSearchString({ searchString: value })}
          value={searchString}
        />
      </View>
      <View style={styles.searchResultContainer}>
        <TouchableOpacity>
          <Icon
            reverse
            name="results"
            type="foundation"
            color="#0052A2"
            size={40}
            onPress={{}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "#0052A2",
            fontSize: 20,
          }}
        >
          NO ITEMS TO DISPLAY...
        </Text>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    flex: 1,
  },
  searchResultContainer: {
    flex: 9,
    borderRadius: 5,
    borderStyle: "dashed",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    borderColor: "#0052A2",
    borderWidth: 2,
    alignItems: "center",
  },
});
