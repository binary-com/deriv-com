import React, { useCallback, useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import affiliate_validation from '../validations/_affilaite_validation'
import BirthForm from '../utils/_birth-form'
import AffiliateInput from '../utils/_affiliate-input'
import AffiliatesHeader, { InputGroup, InputWrapper } from '../utils/_affiliate-header'
import { localize } from 'components/localization'

// prevent these characters from the input type='number' tag
const input_id = document.getElementById('company_registration_number')
input_id?.addEventListener('keydown', function (e) {
    if (['.', ',', '-', '+', 'e'].includes(e.key)) {
        e.preventDefault()
    }
})

const AccountDetails = ({
    is_individual,
    affiliate_account,
    updateData,
    onValidate,
}: WizardStepProps<'account_details'>) => {
    const [form_data, setFormData] = useState(affiliate_account.account_details)
    const [form_errors, setFormErrors] = useState({
        user_name_error_msg: '',
        first_name_error_msg: '',
        last_name_error_msg: '',
        phone_error_msg: '',
        company_name_error_msg: '',
        company_registration_error_msg: '',
        website_url_error_msg: '',
        second_website_url_error_msg: '',
        password_error_msg: '',
    })

    const form_inputs = [
        {
            id: 'dm-first_name',
            name: 'first_name',
            type: 'text',
            label: localize('_t_First name*_t_'),
            error: form_errors.first_name_error_msg,
            value: form_data.first_name,
        },
        {
            id: 'dm-last_name',
            name: 'last_name',
            type: 'text',
            label: localize('_t_Last name*_t_'),
            error: form_errors.last_name_error_msg,
            value: form_data.last_name,
        },
        {
            id: 'dm-date_birth',
            name: 'date_birth',
            type: 'date',
            label: localize('_t_Date of Birth*_t_'),
            value: form_data.date_birth,
            value_set: setFormData,
        },
        {
            id: 'dm-phone',
            name: 'phone',
            type: 'text',
            label: localize('_t_Phone number*_t_'),
            error: form_errors.phone_error_msg,
            value: form_data.phone,
        },
        {
            id: 'dm-company_name',
            name: 'company_name',
            type: 'text',
            label: localize('_t_Company name*_t_'),
            error: form_errors.company_name_error_msg,
            value: form_data.company_name,
        },
        {
            id: 'dm-company_registration_number',
            name: 'company_registration_number',
            type: 'number',
            label: localize('_t_Company registration number*_t_'),
            error: form_errors.company_registration_error_msg,
            value: form_data.company_registration_number,
        },
        {
            id: 'dm-website_url',
            name: 'website_url',
            type: 'text',
            label: is_individual
                ? localize('_t_Website/social media URL*_t_')
                : localize('_t_Company website/social media URL*_t_'),
            error: form_errors.website_url_error_msg,
            value: form_data.website_url,
        },
        {
            id: 'dm-second_website_url',
            name: 'second_website_url',
            type: 'text',
            label: is_individual
                ? localize('_t_Second website/social media URL_t_')
                : localize('_t_Company second website/social media URL_t_'),
            error: form_errors.second_website_url_error_msg,
            value: form_data.second_website_url,
        },
        {
            id: 'dm-username',
            name: 'username',
            type: 'text',
            label: localize('_t_Username*_t_'),
            error: form_errors.user_name_error_msg,
            value: form_data.username,
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('_t_Password*_t_'),
            error: form_errors.password_error_msg,
            value: form_data.password,
        },
    ]

    const is_valid = is_individual
        ? form_data.username &&
          form_data.first_name &&
          form_data.last_name &&
          form_data.date_birth &&
          form_data.phone &&
          form_data.password &&
          !form_errors.first_name_error_msg &&
          !form_errors.last_name_error_msg &&
          !form_errors.phone_error_msg &&
          !form_errors.password_error_msg
        : form_data.first_name &&
          form_data.last_name &&
          form_data.date_birth &&
          form_data.phone &&
          form_data.password &&
          form_data.company_name &&
          form_data.company_registration_number &&
          !form_errors.first_name_error_msg &&
          !form_errors.last_name_error_msg &&
          !form_errors.phone_error_msg &&
          !form_errors.password_error_msg &&
          !form_errors.company_name_error_msg &&
          !form_errors.company_registration_error_msg

    useEffect(() => {
        updateData({ ...form_data })
    }, [form_data])

    useEffect(() => {
        onValidate(is_valid)
    }, [onValidate, is_valid])

    const getFormFields = () => {
        return form_inputs.filter((item) => {
            if (is_individual) {
                const company_details = ['company_name', 'company_registration_number']

                return !company_details.includes(item.name)
            }
            return true
        })
    }
    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({ ...prev, [name]: value }))

        if (affiliate_validation[name]) {
            const error_msg = affiliate_validation[name](value)
            setFormErrors({
                ...form_errors,
                [`${name}_error_msg`]: error_msg,
            })
        }
    }, [])

    const handleError = useCallback((item) => {
        console.log(item)
        setFormData((prev) => ({ ...prev, [item.name]: '' }))
        setFormErrors({
            ...form_errors,
            [`${item.name}_error_msg`]: '',
        })
    }, [])

    return (
        <InputGroup>
            <AffiliatesHeader text="_t_Details_t_" />
            <InputWrapper>
                {getFormFields().map((item) => {
                    if (item.name === 'date_birth') {
                        return (
                            <BirthForm
                                id={item.id}
                                key={item.id}
                                error={item.error}
                                value={item.value}
                                label={item.label}
                                setFieldValue={item.value_set}
                            />
                        )
                    } else if (item.name === 'username') {
                        return (
                            <>
                                <AffiliatesHeader text="_t_Affiliate account details_t_" sized />
                                <AffiliateInput
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    type={item.type}
                                    value={item.value}
                                    error={item.error}
                                    label={item.label}
                                    placeholder={item.label}
                                    onChange={handleInput}
                                    onBlur={handleInput}
                                    handleError={() => handleError(item)}
                                />
                            </>
                        )
                    } else {
                        return (
                            <AffiliateInput
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                type={item.type}
                                label={item.label}
                                value={item.value}
                                error={item.error}
                                required={item.required}
                                placeholder={item.label}
                                password_icon={item.type == 'password'}
                                onChange={handleInput}
                                onBlur={handleInput}
                                data-lpignore="true"
                                handleError={() => handleError(item)}
                            />
                        )
                    }
                })}
            </InputWrapper>
        </InputGroup>
    )
}
export default AccountDetails
