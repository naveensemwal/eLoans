import { Content, Input, Item, Label, Text } from "native-base";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { FormDataContext } from "../../contexts/FormDataContext";

const loanTypeList = [
  {
    id: "1",
    desc: "Personal Loan",
  },
  {
    id: "2",
    desc: "Home Loan",
  },
  {
    id: "3",
    desc: "Auto Loan",
  },
  {
    id: "4",
    desc: "Mortgage Loan",
  },
];

const InitiateCaseScreen = (props) => {
  const { formData, updateForm } = useContext(FormDataContext);

  const renderItem = ({ item, index, separators }) => {
    const isSelectLoanType = item.desc == formData.loanType ? true : false;
    return (
      <CheckBox
        title={item.desc}
        checked={isSelectLoanType}
        onPress={() => updateForm({ ...formData, loanType: item.desc })}
      />
    );
  };

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
        LOAN DETAILS
      </Text>
      <Content padder>
        {/* <Card style={{ backgroundColor: 'white' }}> */}
        <Item floatingLabel>
          <Label>Loan Amount</Label>
          <Input
             type={'numeric'} // not a valid TextInput prop, but adding for illustrative purposes
             keyboardType={'numeric'}
            onChangeText={(value) =>
              updateForm({ ...formData, loanAmount: value })
            }
          />
        </Item>
        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={{ fontFamily: "Roboto", fontWeight: "bold" }}>
            Select Loan Type
          </Text>
        </View>
        <FlatList data={loanTypeList} renderItem={renderItem} />
        <View style={styles.nextButtonContainer}>
          <Button
            title="Next"
            style={{ width: 200,backgroundColor:'green' }}
            linearGradientProps={{
              colors: ['#1277DD', '#0052A2'],
              start: [1, 0],
              end: [0.2, 0],
          }}
            onPress={() => props.navigation.navigate("CaptureAadhar")}
          />
        </View>
        {/* </Card> */}
      </Content>
    </View>
  );
};

export default InitiateCaseScreen;

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
});
