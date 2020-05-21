import { Content, Input, Item, Label, Form } from 'native-base';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { FormDataContext } from '../../contexts/FormDataContext';
import Card from '../../components/Card';

const PersonalDetailScreen = props => {

    const { formData, updateForm } = useContext(FormDataContext)

    const [personalDetails, setPersonalDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        dateOfBirth: '',
        panNumber: '',
    });

    const onNextClick = () => {
        updateForm({ ...formData, personalDetails });
        props.navigation.navigate("EmploymentDetail");
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Content padder >
                <Card style={{ backgroundColor: 'white' }}>
                    <Form>
                        <Item floatingLabel>
                            <Label>First Name</Label>
                            <Input
                                onChangeText={value => setPersonalDetails({ ...personalDetails, firstName: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Last Name</Label>
                            <Input
                                onChangeText={value => setPersonalDetails({ ...personalDetails, lastName: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input keyboardType='email-address'
                                onChangeText={value => setPersonalDetails({ ...personalDetails, email: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Mobile#</Label>
                            <Input keyboardType='number-pad'
                                onChangeText={value => setPersonalDetails({ ...personalDetails, mobile: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Date of Birth</Label>
                            <Input keyboardType='number-pad'
                                onChangeText={value => setPersonalDetails({ ...personalDetails, dateOfBirth: value })} />
                        </Item>
                        <Item floatingLabel>
                            <Label>PAN#</Label>
                            <Input
                                onChangeText={value => setPersonalDetails({ ...personalDetails, panNumber: value })} />
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

export default PersonalDetailScreen;

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

