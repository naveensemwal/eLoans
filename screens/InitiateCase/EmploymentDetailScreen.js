import { Content, Input, Item, Label, Form } from 'native-base';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { FormDataContext } from '../../contexts/FormDataContext';
import Card from '../../components/Card';

const EmploymentDetailScreen = props => {

    const { formData, updateForm, submitForm } = useContext(FormDataContext);
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
        console.log(formData)
        props.navigation.navigate("SubmitLoan");
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Content padder >
                <Card style={{ backgroundColor: 'white' }}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Company ID</Label>
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
                            onPress={onNextClick}
                        />
                    </View>
                </Card>
            </Content>
        </View>
    )
}

export default EmploymentDetailScreen;

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

