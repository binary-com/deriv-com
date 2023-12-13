import React, { useCallback, useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import affiliate_validation from '../validations/_affilaite_validation'
import BirthForm from '../utils/_birth-form'
import AffiliateInput from '../utils/_affiliate-input'
import AffiliatesHeader, { InputGroup, InputWrapper } from '../utils/_affiliate-header'
import { localize } from 'components/localization'

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
        company_registration_number_error_msg: '',
        website_url_error_msg: '',
        second_website_url_error_msg: '',
        password_error_msg: '',
    })

    const company_fields = !is_individual
        ? [
              {
                  id: 'dm-company_name',
                  name: 'company_name',
                  type: 'text',
                  label: localize('_t_Company name*_t_'),
              },
              {
                  id: 'dm-company_registration_number',
                  name: 'company_registration_number',
                  type: 'text',
                  label: localize('_t_Company registration number*_t_'),
              },
          ]
        : []

    const form_inputs = [
        {
            id: 'dm-first_name',
            name: 'first_name',
            type: 'text',
            label: localize('_t_First name*_t_'),
        },
        {
            id: 'dm-last_name',
            name: 'last_name',
            type: 'text',
            label: localize('_t_Last name*_t_'),
        },
        {
            id: 'dm-date_birth',
            name: 'date_birth',
            type: 'date',
            label: localize('_t_Date of Birth*_t_'),
        },
        {
            id: 'dm-phone',
            name: 'phone',
            type: 'text',
            label: localize('_t_Phone number*_t_'),
        },
        ...company_fields,
        {
            id: 'dm-website_url',
            name: 'website_url',
            type: 'text',
            label: is_individual
                ? localize('_t_Website/social media URL*_t_')
                : localize('_t_Company website/social media URL*_t_'),
        },
        {
            id: 'dm-second_website_url',
            name: 'second_website_url',
            type: 'text',
            label: is_individual
                ? localize('_t_Second website/social media URL_t_')
                : localize('_t_Company second website/social media URL_t_'),
        },
        {
            id: 'dm-username',
            name: 'username',
            type: 'text',
            label: localize('_t_Username*_t_'),
        },
        {
            id: 'dm-password',
            name: 'password',
            type: 'password',
            label: localize('_t_Password*_t_'),
        },
    ]

    const is_valid = is_individual
        ? form_data.username &&
          form_data.first_name &&
          form_data.last_name &&
          form_data.date_birth &&
          form_data.phone.length > 6 &&
          form_data.password &&
          !form_errors.first_name_error_msg &&
          !form_errors.last_name_error_msg &&
          !form_errors.phone_error_msg &&
          !form_errors.password_error_msg
        : form_data.first_name &&
          form_data.last_name &&
          form_data.date_birth &&
          form_data.phone.length > 6 &&
          form_data.password &&
          form_data.company_name &&
          form_data.company_registration_number &&
          !form_errors.first_name_error_msg &&
          !form_errors.last_name_error_msg &&
          !form_errors.phone_error_msg &&
          !form_errors.password_error_msg &&
          !form_errors.company_name_error_msg &&
          !form_errors.company_registration_number_error_msg

    useEffect(() => {
        updateData({ ...form_data })
    }, [form_data])

    useEffect(() => {
        onValidate(is_valid)
    }, [onValidate, is_valid])

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({ ...prev, [name]: value }))

        if (affiliate_validation[name]) {
            const error_msg = affiliate_validation[name](value)
            setFormErrors((errors) => ({
                ...errors,
                [`${name}_error_msg`]: error_msg,
            }))
        }

        onValidate(is_valid)
    }, [])

    const handleError = (item) => {
        setFormData((prev) => ({ ...prev, [item.name]: '' }))
        setFormErrors((errors) => ({
            ...errors,
            [`${item.name}_error_msg`]: '',
        }))
    }

    return (
        <InputGroup>
            <AffiliatesHeader text="_t_Details_t_" />
            <InputWrapper>
                {form_inputs.map((item) => {
                    if (item.name === 'date_birth') {
                        return (
                            <BirthForm
                                id={item.id}
                                key={item.id}
                                value={form_data[item.name]}
                                label={item.label}
                                setFieldValue={setFormData}
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
                                    value={form_data[item.name]}
                                    error={form_errors[`${item.name}_error_msg`]}
                                    label={item.label}
                                    placeholder={item.label}
                                    onChange={handleInput}
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
                                value={form_data[item.name]}
                                error={form_errors[`${item.name}_error_msg`]}
                                placeholder={item.label}
                                password_icon={item.type == 'password'}
                                onChange={handleInput}
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
