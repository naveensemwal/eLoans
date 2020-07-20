import { Content, Form, Input, Item, Label } from 'native-base';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View ,  ImageBackground,} from "react-native";
import { Button } from "react-native-elements";
import { FormDataContext } from '../../contexts/FormDataContext';
import backGroundImage from "../../assets/images/bubble-loader.gif";

const EmploymentDetailScreen = props => {
    
    const { formData, updateForm, submitForm } = useContext(FormDataContext);
    const [isLoading, setIsLoading] = useState(false);
    const [employmentDetails, setEmploymentDetails] = useState({
        companyID: '',
        designation: '',
        businessEmail: '',
        businessPhone: '',
        dateOfJoining: '',
        employeeCode: '',
        monthlyTakeHome: 0,
        monthlyEmi: 0
    });
   
    const onNextClick = () => {
        updateForm({ ...formData, employmentDetails });
        setIsLoading(true);
        setTimeout(function () {
          props.navigation.navigate("EligibilityScreen");
          setIsLoading(false);
        }, 1000);
    }

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
                  Fetching Eligibility Limit .... 
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
        EMPLOYMENT DETAILS
      </Text>
            <Content padder >
                {/* <Card style={{ backgroundColor: 'white' }}> */}
                    <Form>
                        <Item floatingLabel>
                            <Label>Company Name</Label>
                            <Input
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, firstName: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Designation</Label>
                            <Input
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, lastName: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Business Email</Label>
                            <Input keyboardType='email-address'
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, email: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Business Phone</Label>
                            <Input keyboardType='number-pad'
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, mobile: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Date of Joining</Label>
                            <Input keyboardType='number-pad'
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, dateOfBirth: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Employee Code</Label>
                            <Input
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, panNumber: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Monthly take Home</Label>
                            <Input keyboardType='number-pad'
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, panNumber: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Monthly EMI</Label>
                            <Input keyboardType='number-pad'
                                onChangeText={value => setEmploymentDetails({ ...employmentDetails, panNumber: value })} />
                        </Item>
                    </Form>
                    <View style={styles.nextButtonContainer}>
                        <Button
                            title="Next"
                            style={{ width: 200 }}
                            linearGradientProps={{
                                colors: ['#1277DD', '#0052A2'],
                                start: [1, 0],
                                end: [0.2, 0],
                            }}
                            onPress={onNextClick}
                        />
                    </View>
                {/* </Card> */}
            </Content>
        </View>
    )
}

export default EmploymentDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: 'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
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
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        padding:10,
        marginLeft:50,
        marginTop:200,
        width:300,
        height:100,
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

