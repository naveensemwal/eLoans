import { Content } from "native-base";
import React, { useContext, useState ,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Button, Slider } from "react-native-elements";
import Axios from "axios";
import { FormDataContext } from "../../contexts/FormDataContext";
import backGroundImage from "../../assets/images/bubble-loader.gif";

const EligibilityScreen = (props) => {
  const { formData, updateForm, submitForm } = useContext(FormDataContext);
  const [ eligibilityDetails, setEligibilityDetails ] = useState({
    loanAmount:Number(formData.loanAmount),
    minimumLimit: 100000,
    maximumLimit: 3000000,
    interestRate:8.5,
    interestRateMinimum:6.5,
    interestRateMaximum:20,
    loanTenure:20,
    loanTenureMinimum:1,
    loanTenureMaximum:30,
    emi:21696,
    interest:2707040,
    interestPercent:52,
    principlePercent:48,
    totalPayable:5207040,
  });
  


  useEffect(() => {
    var tempEligibilityDetails = eligibilityDetails;
    var numberOfMonths= eligibilityDetails.loanTenure*12;
    var monthlyInterestRatio = (tempEligibilityDetails.interestRate/100)/12;
    var top = Math.pow((1+monthlyInterestRatio),numberOfMonths);
    var bottom = top -1;
    var sp = top / bottom;
    tempEligibilityDetails.emi = Math.round(((tempEligibilityDetails.loanAmount * monthlyInterestRatio) * sp));
    tempEligibilityDetails.totalPayable = Math.round(numberOfMonths * tempEligibilityDetails.emi);
    tempEligibilityDetails.interest= Math.round(tempEligibilityDetails.totalPayable - tempEligibilityDetails.loanAmount);
    tempEligibilityDetails.interestPercent =Math.round((tempEligibilityDetails.interest / tempEligibilityDetails.totalPayable) * 100);
    tempEligibilityDetails.principlePercent = Math.round(100-tempEligibilityDetails.interestPercent);
  
  });

 
  const [isLoading, setIsLoading] = useState(false);

  const onNextClick = () => {
    setIsLoading(true);
    Axios.post("http://192.168.29.42:3030/initiateCase")
      .then((response) => {
        console.log("getting data from axios", response.data);
        var loanAccountNumber = response.data.data.data.loanAccountNumber;
        console.log("Loan Account Number:: " + loanAccountNumber);
        updateForm({ ...formData, loanAccountNumber });
        var multiformData = new FormData();
        multiformData.append("documents", {
          uri: formData.aadharFrontImage,
          type: "image/jpeg",
          name: "AaadharFront.jpg",
        });
        multiformData.append("documents", {
          uri: formData.aadharBackImage,
          type: "image/jpeg",
          name: "AaadharBack.jpg",
        });
        multiformData.append("documents", {
          uri: formData.panImage,
          type: "image/jpeg",
          name: "PAN.jpg",
        });
        multiformData.append("caseId", loanAccountNumber);

        Axios.post("http://192.168.29.42:3030/upload-document", multiformData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((response) => {
          setIsLoading(false);
          props.navigation.navigate("SubmitLoan");
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // props.navigation.navigate("SubmitLoan");
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
              Processing Loan Application...
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeading}>EMI DETAILS</Text>
      <Content padder>
        <Text style={styles.sliderText}>Loan Amount</Text>
        <Text style={styles.sliderValue}>₹ {eligibilityDetails.loanAmount}</Text>
        <Slider
          maximumValue={eligibilityDetails.maximumLimit}
          minimumValue={eligibilityDetails.minimumLimit}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#d9d9d9"
          thumbTintColor="#3399ff"
          step={100000}
          value={eligibilityDetails.loanAmount}
          onValueChange={(sliderValue) => setEligibilityDetails({ ...eligibilityDetails, loanAmount: sliderValue })}
        />
        <Text style={styles.sliderText}>Interest Rate</Text>
        <Text style={styles.sliderValue}>{eligibilityDetails.interestRate}%</Text>
        <Slider
          maximumValue={eligibilityDetails.interestRateMaximum}
          minimumValue={eligibilityDetails.interestRateMinimum}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#d9d9d9"
          thumbTintColor="#3399ff"
          step={.5}
          value={eligibilityDetails.interestRate}
          onValueChange={(sliderValue) => setEligibilityDetails({ ...eligibilityDetails, interestRate: sliderValue })}
        />
        <Text style={styles.sliderText}>Loan Tenure</Text>
        <Text style={styles.sliderValue}>{eligibilityDetails.loanTenure} Yrs</Text>
        <Slider
          maximumValue={eligibilityDetails.loanTenureMaximum}
          minimumValue={eligibilityDetails.loanTenureMinimum}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#d9d9d9"
          thumbTintColor="#3399ff"
          step={1}
          value={eligibilityDetails.loanTenure}
          onValueChange={(sliderValue) => setEligibilityDetails({ ...eligibilityDetails, loanTenure: sliderValue })}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.sliderText}>Loan EMI</Text>
              <Text style={styles.sliderValue}>₹ {eligibilityDetails.emi}</Text>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.sliderText}>Total Interest Payable</Text>
              <Text style={styles.sliderValue}>₹ {eligibilityDetails.interest}</Text>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Text style={styles.sliderText}>Total Payment</Text>
              <Text style={styles.sliderValue}>₹ {eligibilityDetails.totalPayable}</Text>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ marginVertical: 15 }}>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Payment Breakup</Text>
                <View
                  style={{ flexDirection: "row", alignContent: "space-around" }}
                >
                  <Text
                    style={{
                      marginHorizontal: 5,
                      fontWeight: "bold",
                      color: "rgb(0, 0, 255)",
                    }}
                  >
                    &#9864; Principle: {eligibilityDetails.principlePercent}%
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 5,
                      fontWeight: "bold",
                      color: "rgba(131, 167, 234, 1)",
                    }}
                  >
                    &#9864; Interest: {eligibilityDetails.interestPercent}%
                  </Text>
                </View>
              </View>
              <PieChart
                data={[
                  {
                    name: "Interest",
                    amount: eligibilityDetails.interest,
                    color: "rgba(131, 167, 234, 1)",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15,
                  },
                  {
                    name: "Principle",
                    amount: eligibilityDetails.loanAmount,
                    color: "rgb(0, 0, 255)",
                    legendFontColor: "#7F7F7F",
                    legendFontSize: 15,
                  },
                ]}
                width={Dimensions.get("window").width}
                height={200}
                chartConfig={{
                  backgroundColor: "#1cc910",
                  backgroundGradientFrom: "#eff3ff",
                  backgroundGradientTo: "#efefef",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 0,
                  borderRadius: 16,
                }}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="25"
                hasLegend={false}
              />
            </View>
          </View>
        </View>
        <View style={styles.nextButtonContainer}>
          <Button
            title="Apply for Loan"
            style={{ width: 200 }}
            linearGradientProps={{
              colors: ["#1277DD", "#0052A2"],
              start: [1, 0],
              end: [0.2, 0],
            }}
            onPress={onNextClick}
          />
        </View>
      </Content>
    </View>
  );
};

export default EligibilityScreen;

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
    flex: 1,
    width: "50%",
    justifyContent: "flex-start",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    paddingBottom: 10,
    overflow: "hidden",
    paddingHorizontal: 30,
  },
  sliderText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 1,
    fontSize: 12,
    color: "#004d99",
  },
  sliderValue: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: 1,
    fontSize: 25,
    color: "#004d99",
  },
  pageHeading: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginVertical: 15,
    fontSize: 20,
    color: "#004d99",
    alignSelf: "center",
  },
  fieldSet: {
    margin: 10,
    paddingHorizontal: 2,
    paddingVertical: 5,
    paddingBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "flex-start",
    borderColor: "#004d99",
  },
  legend: {
    position: "absolute",
    top: -10,
    left: 10,
    fontWeight: "bold",
    backgroundColor: "#FFFFFF",
    color: "#004d99",
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
