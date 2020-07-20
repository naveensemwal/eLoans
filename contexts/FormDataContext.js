import React, { createContext, useState, useEffect } from 'react';

export const FormDataContext = createContext();

const initialFormState = {
    loanAccountNumber:'',
    loanAmount: '2500000',
    loanType: 'Home Loan',
    personalDetails: {
        firstName: 'Naveen',
        lastName: 'Semwal',
        email: '',
        mobile: '',
        dateOfBirth: '21-02-1988',
        panNumber: 'DGIPS1231L',
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
    supportingDocuments:[]
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