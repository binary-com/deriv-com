import React, { useCallback, useEffect, useState } from 'react'
import { WizardStepProps } from '../_types'
import affiliate_validation from '../validations/_affilaite_validation'
import BirthForm from '../utils/_birth-form'
import AffiliateInput from '../utils/_affiliate-input'
import AffiliatesHeader, { InputGroup, InputWrapper } from '../utils/_affiliate-header'
import Typography from 'features/components/atoms/typography'
import { Localize, localize } from 'components/localization'

const getFormFields = (is_individual: boolean) => {
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

    return [
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
}

const AccountDetails = ({
    is_individual,
    affiliate_account,
    updateData,
    onValidate,
}: WizardStepProps<'account_details'>) => {
    const [form_data, setFormData] = useState(affiliate_account.account_details)
    const [form_errors, setFormErrors] = useState({
        username_error_msg:
            form_data.username && (affiliate_validation['username'](form_data['username']) ?? ''),
        first_name_error_msg:
            form_data.first_name &&
            (affiliate_validation['first_name'](form_data['first_name']) ?? ''),
        last_name_error_msg:
            form_data.last_name &&
            (affiliate_validation['last_name'](form_data['last_name']) ?? ''),
        phone_error_msg: Number.isInteger(Number(form_data.phone?.substring(1)))
            ? ''
            : affiliate_validation['phone'](form_data['phone']),
        company_name_error_msg:
            form_data.company_name &&
            (affiliate_validation['company_name'](form_data['company_name']) ?? ''),
        company_registration_number_error_msg:
            form_data.company_registration_number &&
            (affiliate_validation['company_registration_number'](
                form_data['company_registration_number'],
            ) ??
                ''),
        website_url_error_msg:
            form_data.website_url &&
            (affiliate_validation['website_url'](form_data['website_url']) ?? ''),
        second_website_url_error_msg:
            form_data.second_website_url &&
            (affiliate_validation['second_website_url'](form_data['second_website_url']) ?? ''),
        password_error_msg:
            form_data.password && (affiliate_validation['password'](form_data['password']) ?? ''),
    })
    const form_inputs = getFormFields(is_individual)

    useEffect(() => {
        updateData({ ...form_data })
        onValidate(
            is_individual
                ? form_data.first_name &&
                      form_data.last_name &&
                      form_data.date_birth &&
                      form_data.phone.length > 6 &&
                      form_data.website_url &&
                      form_data.username &&
                      form_data.password &&
                      !form_errors.first_name_error_msg &&
                      !form_errors.last_name_error_msg &&
                      !form_errors.website_url_error_msg &&
                      !form_errors.second_website_url_error_msg &&
                      !form_errors.phone_error_msg &&
                      !form_errors.username_error_msg &&
                      !form_errors.password_error_msg
                : form_data.first_name &&
                      form_data.last_name &&
                      form_data.date_birth &&
                      form_data.phone.length > 6 &&
                      form_data.website_url &&
                      form_data.username &&
                      form_data.password &&
                      form_data.company_name &&
                      form_data.company_registration_number &&
                      !form_errors.first_name_error_msg &&
                      !form_errors.last_name_error_msg &&
                      !form_errors.phone_error_msg &&
                      !form_errors.website_url_error_msg &&
                      !form_errors.second_website_url_error_msg &&
                      !form_errors.username_error_msg &&
                      !form_errors.password_error_msg &&
                      !form_errors.company_name_error_msg &&
                      !form_errors.company_registration_number_error_msg,
        )
    }, [form_data, form_errors])

    const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (affiliate_validation[name]) {
            const error_msg = affiliate_validation[name](value) || ''
            setFormErrors((errors) => ({
                ...errors,
                [`${name}_error_msg`]: error_msg,
            }))
        }
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
                            <li key={item.id}>
                                <BirthForm
                                    id={item.id}
                                    value={form_data[item.name]}
                                    label={item.label}
                                    setFieldValue={setFormData}
                                />
                            </li>
                        )
                    } else if (item.name === 'username') {
                        return (
                            <li key={item.id}>
                                <AffiliatesHeader text="_t_Affiliate account details_t_" sized />
                                <Typography.Paragraph>
                                    <Localize translate_text="_t_Please create a username and password for your affiliate account._t_" />
                                </Typography.Paragraph>
                                <AffiliateInput
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    value={form_data[item.name]}
                                    error={form_errors[`${item.name}_error_msg`]}
                                    label={item.label}
                                    placeholder={item.label}
                                    onChange={handleInput}
                                    handleError={() => handleError(item)}
                                />
                            </li>
                        )
                    } else {
                        return (
                            <li key={item.id}>
                                <AffiliateInput
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    label={item.label}
                                    value={form_data[item.name]}
                                    error={form_errors[`${item.name}_error_msg`]}
                                    placeholder={item.label}
                                    password_icon={item.type == 'password'}
                                    onChange={handleInput}
                                    onBlur={handleInput}
                                    data-lpignore="true"
                                    handleError={() => handleError(item)}
                                />
                            </li>
                        )
                    }
                })}
            </InputWrapper>
        </InputGroup>
    )
}
export default AccountDetails
