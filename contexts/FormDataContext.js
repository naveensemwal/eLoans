import React, { createContext, useState, useEffect } from 'react';

export const FormDataContext = createContext();

const initialFormState = {
    loanAmount: '10000',
    loanType: 'Home Loan',
    personalDetails: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        dateOfBirth: '',
        panNumber: '',
    },
    employmentDetails: {
        companyID: '',
        designation: '',
        businessEmail: '',
        businessPhone: '',
        dateOfJoining: '',
        employeeCode: '',
        monthlyTakeHome: 0,
        monthlyEmi: 0
    },
    aadharFrontImage: '',
    aadharBackImage: '',
    panImage: '',

}



const FormDataContextProvider = (props) => {
    const [formData, setFormData] = useState(initialFormState);

    const submitForm = () => {
        console.log(formData);
    };

    const updateForm = (state) => {
        setFormData(state);
    };




    return (
        <FormDataContext.Provider value={{ formData, updateForm, submitForm }}>
            {props.children}
        </FormDataContext.Provider>
    );
}

export default FormDataContextProvider;