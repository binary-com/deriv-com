import React from 'react'
import FormAccountType from './form_account_type'
import FormAddressDetails from './form_address_details'
import FormPhoneNumber from './form_phone_number'
import FormPersonalDetails from './form_personal_details'
import FormTermsOfUse from './form_terms_of_use'
import { StepContext } from '.'

const Form = () => {
    const { step } = React.useContext(StepContext)

    return (
        <div>
            {step === 1 && <FormAccountType />}
            {step === 2 && <FormAddressDetails />}
            {step === 3 && <FormPhoneNumber />}
            {step === 4 && <FormPersonalDetails />}
            {step === 5 && <FormTermsOfUse />}
        </div>
    )
}

export default Form
