import { Content } from "native-base";
import React, { useContext } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { PricingCard, Button, Icon } from "react-native-elements";
import backGroundImage from "../../assets/images/success_blue.gif";
import Card from "../../components/Card";
import { FormDataContext } from "../../contexts/FormDataContext";

const LoanSubmitScreen = (props) => {
  const { formData, updateForm, submitForm } = useContext(FormDataContext);
  console.log(formData);
  var today = new Date();
  return (
    <View style={styles.container}>
        <Text
        style={{
          fontFamily: "Roboto",
          fontWeight: "bold",
          marginVertical: 5,
          fontSize: 30,
          color: "#004d99",
          alignSelf: "center",
        }}
      >
        STATUS
      </Text>
      <Content padder>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={backGroundImage}
            style={styles.backgroundImage}
          ></ImageBackground>
        </View>

        <Card style={{ marginHorizontal: 2, backgroundColor: "#0052A2" }}>
          <Text style={styles.infoText}>
            Loan Application Number : {formData.loanAccountNumber}
          </Text>
          <Text style={styles.infoText}>
            Applicant Name : {formData.personalDetails.firstName}{" "}
            {formData.personalDetails.lastName}
          </Text>
          <Text style={styles.infoText}>
            Initiation Date :{" "}
            {today.getDate() +
              "/" +
              parseInt(today.getMonth() + 1) +
              "/" +
              today.getFullYear()}
          </Text>
          <Text style={styles.infoText}>Customer Category : Gold</Text>
          <Text style={styles.infoText}>
            Application Status : Pending Verification
          </Text>
        </Card>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <PricingCard
            color="#4f9deb"
            title="Coral Credit Card"
            titleStyle={styles.titleStyle}
            pricingStyle={styles.pricingStyle}
            price="₹ 999"
            info={[]}
            button={{ title: "GET STARTED", icon: "credit-card" }}
            containerStyle={styles.containerStyle}
          />
          <PricingCard
            color="#4f9deb"
            title="Multicap Fund"
            price="₹ 500"
            titleStyle={styles.titleStyle}
            pricingStyle={styles.pricingStyle}
            info={[]}
            button={{ title: "GET STARTED", icon: "trending-up" }}
            containerStyle={styles.containerStyle}
          />
        </View>
        <View style={styles.nextButtonContainer}>
          <Button
            title="Complete"
            style={{ width: 200, backgroundColor: "green" }}
            linearGradientProps={{
              colors: ["#1277DD", "#0052A2"],
              start: [1, 0],
              end: [0.2, 0],
            }}
            onPress={() => props.navigation.navigate("SubmitLoan")}
          />
        </View>
      </Content>
    </View>
  );
};

export default LoanSubmitScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    marginLeft: 100,
    width: 200,
    height: 200,
  },
  infoText: {
    fontWeight: "bold",
    paddingLeft: 15,
    alignSelf: "flex-start",
    fontSize: 15,
    color: "white",
  },
  nextButtonContainer: {
    flex: 2,
    width: "50%",
    justifyContent: "flex-end",
    alignSelf: "center",
    paddingBottom: 5,
    overflow: "hidden",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  pricingStyle: {
    fontSize: 25,
    color: "#0052A2",
  },
  titleStyle: {
    fontSize: 20,
    alignContent: "center",
  },
  containerStyle: {
    backgroundColor: "#E9E3E6",
  },
});
