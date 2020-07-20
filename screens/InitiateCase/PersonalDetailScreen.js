import { Content, Input, Item, Label, Form } from "native-base";
import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { FormDataContext } from "../../contexts/FormDataContext";
import Card from "../../components/Card";

const PersonalDetailScreen = (props) => {
  const { formData, updateForm } = useContext(FormDataContext);

  const [personalDetails, setPersonalDetails] = useState({
    firstName: "Naveen",
    lastName: "Semwal",
    email: "",
    mobile: "",
    dateOfBirth: "21-02-1988",
    panNumber: "DGIPS1231L",
  });

  const onNextClick = () => {
    updateForm({ ...formData, personalDetails });
    props.navigation.navigate("EmploymentDetail");
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
        PERSONAL DETAILS
      </Text>
      <Content padder>
        {/* <Card style={{ backgroundColor: 'white' }}> */}
        <Form>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input
              value={personalDetails.firstName}
              onChangeText={(value) =>
                setPersonalDetails({ ...personalDetails, firstName: value })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input
             value={personalDetails.lastName}
              onChangeText={(value) =>
                setPersonalDetails({ ...personalDetails, lastName: value })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              keyboardType="email-address"
              onChangeText={(value) =>
                setPersonalDetails({ ...personalDetails, email: value })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Mobile#</Label>
            <Input
              keyboardType="number-pad"
              onChangeText={(value) =>
                setPersonalDetails({ ...personalDetails, mobile: value })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>Date of Birth</Label>
            <Input
              keyboardType="number-pad"
              value={personalDetails.dateOfBirth}
              onChangeText={(value) =>
                setPersonalDetails({ ...personalDetails, dateOfBirth: value })
              }
            />
          </Item>
          <Item floatingLabel>
            <Label>PAN#</Label>
            <Input
             value={personalDetails.panNumber}
              onChangeText={(value) =>
                setPersonalDetails({ ...personalDetails, panNumber: value })
              }
            />
          </Item>
        </Form>
        <View style={styles.nextButtonContainer}>
          <Button
            title="Next"
            style={{ width: 200 }}
            linearGradientProps={{
              colors: ["#1277DD", "#0052A2"],
              start: [1, 0],
              end: [0.2, 0],
            }}
            onPress={onNextClick}
          />
        </View>
        {/* </Card> */}
      </Content>
    </View>
  );
};

export default PersonalDetailScreen;

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
