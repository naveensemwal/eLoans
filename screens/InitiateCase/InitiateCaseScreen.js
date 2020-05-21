import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { Content, Form, Icon, Input, Item, Label, Text } from 'native-base';
import { FlatList } from "react-native-gesture-handler";
import { FormDataContext } from '../../contexts/FormDataContext';
import Card from '../../components/Card';


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
    const isSelectLoanType = (item.desc == formData.loanType) ? true : false;
    return (<CheckBox title={item.desc} checked={isSelectLoanType}
      onPress={() => updateForm({ ...formData, loanType: item.desc })} />)
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Content padder >
        <Card style={{ backgroundColor: 'white' }}>
          <Item floatingLabel>
            <Label>Loan Amount</Label>
            <Input keyboardType='number-pad' onChangeText={value => updateForm({ ...formData, loanAmount: value })} />
          </Item>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>Select Loan Type</Text>
          </View>
          <FlatList
            data={loanTypeList}
            renderItem={renderItem}
          />
          <View style={styles.nextButtonContainer}>
            <Button
              title="Next"
              style={{ width: 200 }}
              onPress={() => props.navigation.navigate("CaptureAadhar")}
            />
          </View>
        </Card>
      </Content>
    </View>
  );
};

export default InitiateCaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  nextButtonContainer: {
    flex: 2,
    width: '50%',
    justifyContent: 'flex-end',
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 30,
    paddingBottom: 10,
    overflow: "hidden",
    paddingHorizontal: 30
  }
});
