import React, { useContext, useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import * as DocumentPicker from "expo-document-picker";
import { FormDataContext } from "../../contexts/FormDataContext";
import backGroundImage from "../../assets/images/bubble-loader.gif";

export default function CaptureSupportingDcouments(props) {
  const { formData, updateForm } = useContext(FormDataContext);
  const [isLoading, setIsLoading] = useState(false);

  var docListLength = formData.supportingDocuments.length;

  const keyExtractor = (item, index) => index.toString();

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type == "success") {
      var supportingDocuments = formData.supportingDocuments;
      supportingDocuments.push(result);
      updateForm({ ...formData, supportingDocuments });
      console.log(formData);
    }
  };

  const deletDocument = (item) => {
    var supportingDocuments = formData.supportingDocuments;
    console.log(JSON.stringify(supportingDocuments));
    for (var i = 0; i < supportingDocuments.length; i++) {
      if (supportingDocuments[i].uri == item.uri) {
        supportingDocuments.splice(i, 1);
        break;
      }
    }
    updateForm({ ...formData, supportingDocuments });
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      leftAvatar={{
        rounded: false,
        source: require("../../assets/images/docs.png"),
        overlayContainerStyle: { backgroundColor: "white" },
      }}
      bottomDivider
      rightIcon={
        <Icon
          name="ios-remove-circle"
          type="ionicon"
          color="#0052A2"
          onPress={() => deletDocument(item)}
          Component={TouchableHighlight}
        />
      }
    />
  );

  const onNextClick = () => {
    setIsLoading(true);
    setTimeout(function () {
      props.navigation.navigate("BureauScreen");
      setIsLoading(false);
    }, 1000);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={backGroundImage}
            style={styles.backgroundImage}
          >
            <Text
              style={{
                fontWeight: "bold",
                paddingLeft: 15,
                alignSelf: "center",
                fontSize: 18,
                color: "#0052A2",
              }}
            >
              Fetching Credit Score .... 
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          marginVertical: 15,
          fontSize: 20,
          color: "#004d99",
          alignSelf: "center",
        }}
      >
        SUPPORTING DOCUMENTS
      </Text>
      <View>
        {docListLength == 0 ? (
          <View
            style={{
              alignItems: "center",
              paddingTop: 200,
              justifyContent: "center",
            }}
            activeOpacity={1}
          >
            <TouchableOpacity>
              <Icon
                reverse
                name="upload"
                type="entypo"
                color="#0052A2"
                size={40}
                onPress={() => _pickDocument()}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Roboto",
                fontWeight: "bold",
                color: "#0052A2",
              }}
            >
              No Document Uploaded Yet !
            </Text>
          </View>
        ) : (
          <View>
            <View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={_pickDocument}
              >
                <Text style={{ marginRight: 10, fontSize: 20 }}>
                  Add More Document
                </Text>
                <Icon name="ios-add-circle" type="ionicon" color="#0052A2" />
              </TouchableOpacity>
            </View>
            <FlatList
              keyExtractor={keyExtractor}
              data={formData.supportingDocuments}
              renderItem={renderItem}
            />
          </View>
        )}
      </View>
      <View style={styles.nextButtonContainer}>
        <Button
          title="Next"
          linearGradientProps={{
            colors: ["#1277DD", "#0052A2"],
            start: [1, 0],
            end: [0.2, 0],
          }}
          onPress={onNextClick}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    color: "black",
  },
  buttonStyle: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    padding: 5,
    marginHorizontal: 85,
    marginVertical: 10,
    borderRadius: 10,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: "stretch",
  },
  nextButtonContainer: {
    flex: 2,
    width: "50%",
    justifyContent: "flex-end",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    paddingBottom: 10,
    overflow: "hidden",
    paddingHorizontal: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 10,
    marginLeft: 50,
    marginTop: 100,
    width: 300,
    height: 300,
  },
});
